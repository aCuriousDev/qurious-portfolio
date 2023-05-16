import { useState } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const [selectedOption, setSelectedOption] = useState("recruit");
  const [otherText, setOtherText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtherTextChange = (e) => {
    setOtherText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="illustration-container">
        <img
          className="illustration"
          src="path/to/illustration.png"
          alt="Illustration"
        />
      </div>
      <div className="form-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label>Reason for Contact:</label>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="reason"
                value="recruit"
                checked={selectedOption === "recruit"}
                onChange={handleOptionChange}
                required
              />
              Recruit Me
            </label>
            <label>
              <input
                type="radio"
                name="reason"
                value="work"
                checked={selectedOption === "work"}
                onChange={handleOptionChange}
                required
              />
              Work with Me
            </label>
            <label>
              <input
                type="radio"
                name="reason"
                value="other"
                checked={selectedOption === "other"}
                onChange={handleOptionChange}
                required
              />
              Other
            </label>
          </div>

          {selectedOption === "other" && (
            <div className="other-input-container">
              <label htmlFor="other">Other:</label>
              <input
                type="text"
                id="other"
                name="other"
                value={otherText}
                onChange={handleOtherTextChange}
                required
              />
            </div>
          )}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
