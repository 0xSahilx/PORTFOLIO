import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_i38s7qg";
    const templateId = "template_7injuye";
    const publicKey = "v7bwjRGgPQhA6cI_D";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Shahil",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("error sending email:", error);
      });
  };

  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  };

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
          >
            <p className="heading-sub-text">Hire Me</p>
            <p className="heading-text">Get in Touch</p>
          </motion.div>
          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={verticalLeft}
            >
              <div className="contact-heading">
                <p>
                  I’m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to use the form
                </p>
              </div>
              <div className="contact-hello">
                <p>Say Hello</p>
                <Link
                  className="hello-links"
                  to="//wa.me/+917985179107"
                  target="_blank"
                >
                  wa.me/Shahil
                </Link>
                <Link
                  className="hello-links"
                  to="mailto:sahilaryan9211@gmail.com"
                  target="_blank"
                >
                  sahilaryan9211@gmail.com
                </Link>
              </div>
            </motion.div>

            {/* form */}

            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={verticalLeft}
            >
              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                action="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-mid">
                  <div className="message">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-btn">
                  <button type="submit" className="hero-contact">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
