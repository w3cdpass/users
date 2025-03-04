const Contact = () => {
    return (
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        
        <form className="contactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;