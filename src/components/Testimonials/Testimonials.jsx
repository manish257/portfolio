import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container tertimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Aman</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            accusamus ipsa nesciunt consequuntur architecto? Quo!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Aman</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            accusamus ipsa nesciunt consequuntur architecto? Quo!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Aman</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            accusamus ipsa nesciunt consequuntur architecto? Quo!
          </small>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
