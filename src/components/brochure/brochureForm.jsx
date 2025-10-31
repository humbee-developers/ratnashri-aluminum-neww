import "./brochureForm.scss";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function BrochureForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!name || !email) {
      toast.error("Please fill in both name and email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sendToSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const responseData = await res.json();
      console.log("🟢 Response from Google Apps Script:", responseData);

      if (res.ok && responseData.status === "ok") {
        toast.success("Downloaded successful! 🎉"); 

        // PDF download
        const link = document.createElement("a");
        link.href = "/ratnashri-brochure.pdf";
        link.download = "Ratnashri-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clear form fields
        setName("");
        setEmail("");
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("🔴 Submission failed:", error);
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="BrochureMain">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="BrochureInner">
        <div className="BrochureInnerContent">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            Download Brochure
          </motion.p>
        </div>

        <div className="BrochureInput">
          <StyledWrapper>
            <div className="coolinput">
              <label className="text" htmlFor="name">Name*</label>
              <input
                className="input"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </StyledWrapper>

          <StyledWrapper>
            <div className="coolinput">
              <label className="text" htmlFor="email">Email*</label>
              <input
                className="input"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </StyledWrapper>

          <div>
            <button className="button" onClick={handleDownload} disabled={loading}>
              <span className="button-content">
                {loading ? "Downloading..." : "Download"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 340px;
    margin-bottom: 15px;
  }

  .coolinput label.text {
    font-size: 0.75rem;
    color: #000000;
    font-weight: 700;
    margin: 0 0 5px 7px;
    padding: 0 3px;
    width: fit-content;
  }

  .coolinput input.input {
    padding: 11px 25px 11px 10px;
    font-size: 15px;
    border: 1px #619dea38 solid;
    border-radius: 5px;
    background: #619dea17;
  }

  .coolinput input.input:focus {
    outline: none;
  }
`;

export default BrochureForm;
