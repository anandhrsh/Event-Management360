import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCounts, setCharCounts] = useState({
    name: 0,
    subject: 0,
    message: 0
  });

  const validateName = (value) => {
    const alphabeticRegex = /^[a-zA-Z\s]+$/;
    if (!value.trim()) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    if (value.length > 50) return "Name must not exceed 50 characters";
    if (!alphabeticRegex.test(value)) return "Name must contain only alphabetic characters";
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validateSubject = (value) => {
    if (!value.trim()) return "Subject is required";
    if (value.length < 5) return "Subject must be at least 5 characters";
    if (value.length > 100) return "Subject must not exceed 100 characters";
    return "";
  };

  const validateMessage = (value) => {
    if (!value.trim()) return "Message is required";
    if (value.length < 50) return "Message must be at least 50 characters for detailed inquiry";
    if (value.length > 1000) return "Message must not exceed 1000 characters";
    return "";
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setCharCounts(prev => ({ ...prev, name: value.length }));
    setErrors(prev => ({ ...prev, name: validateName(value) }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors(prev => ({ ...prev, email: validateEmail(value) }));
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject(value);
    setCharCounts(prev => ({ ...prev, subject: value.length }));
    setErrors(prev => ({ ...prev, subject: validateSubject(value) }));
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setCharCounts(prev => ({ ...prev, message: value.length }));
    setErrors(prev => ({ ...prev, message: validateMessage(value) }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const subjectError = validateSubject(subject);
    const messageError = validateMessage(message);

    const newErrors = {
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if (hasErrors) {
      toast.error("Please fix all validation errors before submitting");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/v1/message/send`,
        { name, email, subject, message },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCharCounts({ name: 0, subject: 0, message: 0 });
      setErrors({});
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <div className="contact-logo">
          <img src="/Logo.jpg" alt="Event Engineer 360 Logo" />
        </div>

        <div className="contact-info-item address">
          <h4>📍 Address</h4>
          <p>First floor, Bihari Complex, 106, Mithapur, Patna, Bihar</p>
        </div>

        <div className="contact-info-item phone">
          <h4>📞 Call Us</h4>
          <p>+91 93860 89306</p>
        </div>

        <div className="contact-info-item email">
          <h4>✉️ Mail Us</h4>
          <p>teamevent360@gmail.com</p>
        </div>

        <div className="contact-info-item map">
          <h4>🗺️ Find Us</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115146.35684660863!2d85.05433238088365!2d25.594159414316785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39ed59e0e754f13b%3A0xb9b06588ec100337!2sfirst%20floor%2C%20Bihari%20Complex%2C%20106%2C%20Mithapur%20Farm%20Area%2C%20Mithapur%2C%20Patna%2C%20Bihar%20800001!3m2!1d25.5941825!2d85.1367339!5e0!3m2!1sen!2sin!4v1756303107461!5m2!1sen!2sin"
              title="EventEngineer360 office location"
              style={{ border: 0, width: "100%", height: "200px", borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-form-container">
          <h2>Send Us A Message</h2>
          <p>Get in touch with us for your event planning needs. We're here to help make your special occasions memorable and perfectly organized.</p>

          <form onSubmit={handleSendMessage} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Tell us your name *</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={name}
                  onChange={handleNameChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Enter your email *</label>
                <input
                  type="email"
                  placeholder="Last name"
                  value={email}
                  onChange={handleEmailChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Enter phone number</label>
              <input
                type="text"
                placeholder="eg. +1 800 000000"
                value={subject}
                onChange={handleSubjectChange}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows={5}
                placeholder="Write us a message"
                value={message}
                onChange={handleMessageChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-secondary">
                Back to Home
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
