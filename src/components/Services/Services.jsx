import React from "react";
import "./Services.css";
import { HiCheck } from "react-icons/hi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Processor Design/Computer Architecture</h3>
          </div>

          <ul className="service__list">
            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
