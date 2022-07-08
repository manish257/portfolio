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
              <p>Mobile App UI/UX Design.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Web UI/UX Design.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>UI/UX Brand Identity.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>HCI Design.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Interaction design, wireframes, and prototypes, and usability testing.</p>
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
              <p>App Development using various Stacks.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Frontend, backend and APIs.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Work with preferred databses SQL or NoSQL.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Integration with PIM, CMS, and CRM systems.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>More responsive apps with top-notch styling using more recent technologies.</p>
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
              <p>RISC-V Single Cycle, Multicyle, and Pipelined Processor design.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Verilog HDL programs for hardware.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Circuit Design, PCB Design and Testing.</p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Transistor level processor designs on Cadence. </p>
            </li>

            <li>
              <HiCheck className="service__list-icon" />
              <p>Xilinx and ModelSim use for designs.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
