import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: "https://spikeybits.com/wp-content/uploads/2018/03/sagrada-dice.jpg",
    title: "React Dice Game",
    github: "https://github.com/manish257/React-Dice-Game/tree/main/Dice_Game",
    demo: "https://github.com/manish257/React-Dice-Game/tree/main/Dice_Game",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-vector/hand-holding-mobile-phone-with-internet-pharmacy-shopping-app-pharmacy-shop-facade-medical-assistance-help-support-online-health-care-application-smartphone-vector-illustration-flat-style_169241-3663.jpg?w=1380",
    title: "Online Medicine Shop using Django",
    github: "https://github.com/manish257/Django-Online-Medicine",
    demo: "https://github.com/manish257/Django-Online-Medicine",
  },
  {
    id: 3,
    image:
      "https://igotoffer.com/blog/wp-content/uploads/2017/11/the-history-of-the-microprocessor.jpg",
    title: "Pipelined RISC-V Processor",
    github: "https://github.com/manish257/Pipelined-RISC_V",
    demo: "https://github.com/manish257/Pipelined-RISC_V",
  },
  {
    id: 4,
    image: "https://miro.medium.com/max/1330/1*MLudTwKUYiCYQE0cV7p6aQ.png",
    title: "American Sign Language Detection using Tensorflow",
    github: "https://github.com/manish257/American-Sign-Language-Detection",
    demo: "https://github.com/manish257/American-Sign-Language-Detection",
  },
  {
    id: 5,
    image: "http://armofthings.com/wp-content/uploads/2016/01/IMG_20160103_201358_676-1024x731.jpg",
    title: "Home Automation Using Tiva C",
    github:
      "https://github.com/manish257/Smart-Domicile-Home-automation-using-TIVA-C-ARM-TM4C1233H6PM",
    demo: "https://github.com/manish257/Smart-Domicile-Home-automation-using-TIVA-C-ARM-TM4C1233H6PM",
  },
  {
    id: 6,
    image:
      "https://www.altium.com/documentation/sites/default/files/resize/wiki_attachments/304897/BoardExample_2-450x266.png",
    title: "Altium PCB Designs",
    github: "https://github.com/manish257/Altium-Projects",
    demo: "https://github.com/manish257/Altium-Projects",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
