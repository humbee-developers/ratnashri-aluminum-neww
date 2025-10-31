"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FormSchemas } from "../ValidationSchema/Schema";
import "./formNew.scss";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YellowSubmitButtonForm from "../yellowSubmitButtonForm/YellowSubmitButtonForm";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/images/tcs.jpg"
const Form1 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      PhoneNo: "",
      message: "",
    },
    validationSchema: FormSchemas,
    validateOnChange: true,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true); // Disable the button during submission

      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            companyName: values.companyName,
            Emaildata: values.email,
            Phonedata: values.PhoneNo,
            Descriptiondata: values.message,
          }),

        });

        console.log("Form Data Submitted:", values);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        submitMessage();
        console.log(await response.json());
        resetForm(); // Reset form fields after submission
      } catch (error) {
        toast.error("Error Submitting Form");
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false); // Enable the button after submission
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  useEffect(() => {
    const inputs = document.querySelectorAll(
      ".input-container input, .input-container textarea"
    );

    inputs.forEach((input) => {
      input.addEventListener("blur", (e) => {
        if (e.target.value) {
          e.target.classList.add("not-empty");
        } else {
          e.target.classList.remove("not-empty");
        }
      });

      if (input.value) {
        input.classList.add("not-empty");
      }
    });
  }, []);

  return (
    <div className="form">
      {/* <div>
        <Image src={image1} alt="none" className="ImgSec" />
      </div> */}
      {/* <div>
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: true }}
        >

          <p className="form_header">The Authenticity of luxury in each layer</p>
        </motion.div>
      </div> */}

      <div className="FormInnerTextHeader">
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
            className="form_header">Mission & Vision</motion.div>
            <div className="HeaderTextMission">
              <p>At Ratnashri Aluminium, our mission is simple: to engineer aluminium solutions that combine quality, innovation, and sustainability. We want to push the boundaries of what’s possible in extrusion and make partners of our clients.</p>
            </div>
            <div className="HeaderTextInnerText">
              <p>We envision being a leader not just in capacity, but in trust, precision, and eco-friendly manufacturing. Timely delivery, unmatched quality, and service with transparency — that’s our promise.</p>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div data-tf-live="01K6WRQ05Y6T4YPW43E6FJH7ZD"></div><script src="//embed.typeform.com/next/embed.js"></script>
 
          {/* <div data-tf-live="01K4MFSRXZB5GD75V7BB353YXC"></div><script src="//embed.typeform.com/next/embed.js"></script> */}
          {/* <div className="form_field_flex">
            <div className="form_content">
              <div className="input-container">
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                <label className="label" htmlFor="fullName">
                  Full Name
                </label>
                <div className="underline"></div>
                {touched.fullName && errors.fullName && (
                  <p className="error">{errors.fullName}</p>
                )}
              </div>
            </div>
            <div className="form_content">
              <div className="input-container">
                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                />
                <label className="label" htmlFor="companyName">
                  Company Name
                </label>
                <div className="underline"></div>
                {touched.companyName && errors.companyName && (
                  <p className="error">{errors.companyName}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form_field_flex">
            <div className="form_content">
              <div className="input-container">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="underline"></div>
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="form_content">
              <div className="input-container">
                <input
                  id="PhoneNo"
                  type="text"
                  name="PhoneNo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.PhoneNo}
                />
                <label className="label" htmlFor="PhoneNo">
                  Phone Number
                </label>
                <div className="underline"></div>
                {touched.PhoneNo && errors.PhoneNo && (
                  <p className="error">{errors.PhoneNo}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form_content">
            <div className="input-container">
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className="message_field"
              />
              <label className="label" htmlFor="message">
                Message
              </label>
              <div className="underline"></div>
              {touched.message && errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="submit-button">
            <YellowSubmitButtonForm
              btn_text={isSubmitting ? "Submitting..." : "Submit"}
              disabled={isSubmitting}
              type="submit"
            />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={true}
              theme="light"
              transition={Slide}
              className={"contactFormNotification"}
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Form1;
