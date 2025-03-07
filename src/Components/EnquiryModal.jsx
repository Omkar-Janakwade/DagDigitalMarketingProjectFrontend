import React, { useState } from "react";
import "./EnquiryModal.css"; // Keep styles if needed

const EnquiryForm = ({ show, toggleForm, heading }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:8082/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Enquiry submitted successfully!");
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        setSuccess("Failed to submit enquiry.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null; // Hide when not needed

  return (
    <div className="enquiry-form-overlay">
      <div className="enquiry-form-container">
        {/* Dynamically set the heading */}
        <h2 style={{color:"black"}}>{heading}</h2>

        <form onSubmit={handleSubmit} style={{textAlign:"justify", color:"black"}}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="tel" id="number" name="number" className="form-control" value={formData.number} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          {success && <p className="text-success">{success}</p>}

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={toggleForm}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
