import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>manishmahato257@gmail.com</h5>
            <a
              href="mailto:manishmahato257@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__options">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Manish Kushwaha</h5>
            <a href="https://m.me/portrayalss" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__options">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>manishmahato257@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone=00923117637245"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
