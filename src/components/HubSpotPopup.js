"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function HubSpotPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 17000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  useEffect(() => {
    if (visible && !scriptInjected.current) {
      scriptInjected.current = true;
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/246129357.js";
      document.head.appendChild(script);
    }
  }, [visible]);

  if (!mounted || !visible) return null;

  return createPortal(
    <div
      style={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && setVisible(false)}
    >
      <div style={styles.modal}>
        <button
          style={styles.closeBtn}
          onClick={() => setVisible(false)}
          aria-label="Close"
        >
          &#x2715;
        </button>
        <div style={styles.body}>
          <div
            ref={formRef}
            style={styles.formWrapper}
            className="hs-form-frame"
            data-region="na2"
            data-form-id="aeb3dd0b-34f2-4708-9676-82ef6651128c"
            data-portal-id="246129357"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999,
    padding: "16px",
    boxSizing: "border-box",
  },
  modal: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "500px",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 12px 48px rgba(0,0,0,0.22)",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "12px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#666",
    lineHeight: 1,
    padding: "4px 8px",
    borderRadius: "4px",
    zIndex: 1,
  },
  body: {
    overflowY: "auto",
    padding: "20px",
    flexGrow: 1,
    WebkitOverflowScrolling: "touch",
  },
  formWrapper: {
    marginTop: "-50px",
  },
};
