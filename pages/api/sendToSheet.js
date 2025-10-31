export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxZOZoLii91TJQg41jle_ioEQcWNJ4ai13Ub14A1O8yB4HDSktpYchCNZXvv8nL10YnOQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    console.log("📄 Google Sheet Result:", result); // Optional log

    if (result.result === "success") {
      return res.status(200).json({ status: "ok" });
    } else {
      return res.status(500).json({ status: "error", message: "Google Sheet failed" });
    }

  } catch (error) {
    console.error("Google Script Error:", error);
    return res.status(500).json({ status: "error", message: error.message });
  }
}
