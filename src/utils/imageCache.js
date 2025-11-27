// Client-side image caching using localStorage
// Stores images as dataURLs with TTL and max item limit to avoid quota issues.

const CACHE_PREFIX = "imgcache:";
const INDEX_KEY = "imgcache:index";
const DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const DEFAULT_MAX_ITEMS = 50; // keep under localStorage limits

function safeGetItem(key) {
  try {
    return typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
  } catch (e) {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    if (typeof window === "undefined") return false;
    window.localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

function safeRemoveItem(key) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  } catch (e) {
    // ignore
  }
}

function getIndex() {
  const s = safeGetItem(INDEX_KEY);
  if (!s) return [];
  try {
    const arr = JSON.parse(s);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function setIndex(arr) {
  safeSetItem(INDEX_KEY, JSON.stringify(arr));
}

function pruneIndex(maxItems) {
  const idx = getIndex();
  if (idx.length <= maxItems) return;
  const removeCount = idx.length - maxItems;
  const toRemove = idx.splice(0, removeCount);
  toRemove.forEach((k) => safeRemoveItem(k));
  setIndex(idx);
}

async function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function fetchToDataUrl(url) {
  const resp = await fetch(url, { cache: "force-cache" });
  if (!resp.ok) throw new Error(`Failed to fetch image ${url}: ${resp.status}`);
  const blob = await resp.blob();
  return blobToDataURL(blob);
}

export async function loadImageWithCache(url, options = {}) {
  const ttlMs = options.ttlMs ?? DEFAULT_TTL_MS;
  const maxItems = options.maxItems ?? DEFAULT_MAX_ITEMS;
  const cacheKey = `${CACHE_PREFIX}${url}`;

  let dataUrl = null;
  const recordStr = safeGetItem(cacheKey);
  if (recordStr) {
    try {
      const record = JSON.parse(recordStr);
      if (record && record.dataUrl && record.ts && Date.now() - record.ts <= ttlMs) {
        dataUrl = record.dataUrl;
      } else {
        safeRemoveItem(cacheKey);
      }
    } catch {
      safeRemoveItem(cacheKey);
    }
  }

  const img = new Image();
  img.crossOrigin = "anonymous";

  if (dataUrl) {
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataUrl;
    });
  }

  try {
    const freshDataUrl = await fetchToDataUrl(url);
    const ok = safeSetItem(cacheKey, JSON.stringify({ dataUrl: freshDataUrl, ts: Date.now() }));
    if (ok) {
      const idx = getIndex();
      idx.push(cacheKey);
      setIndex(idx);
      pruneIndex(maxItems);
    }
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = freshDataUrl;
    });
  } catch (e) {
    // Fallback to direct URL if caching fails
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }
}
