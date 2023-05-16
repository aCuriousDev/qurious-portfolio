export default function Contact() {
  return (
    <form className="contact-form">
      <h2 className="contact-form-title">Contact Me</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" minlength="2" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="contact-form-group">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          minLength="4"
          maxLength="500"
          required
        />
      </div>
    </form>
  );
}
