function ContactForm() {
  return (
    <div>
      <h2>Contact Us</h2>

      <form>
        <div>
          <label>Name: </label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Message: </label>
          <textarea placeholder="Enter your message"></textarea>
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;