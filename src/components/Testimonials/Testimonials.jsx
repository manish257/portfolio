import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    name: "Aman",
    image: AVTR1,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis, exercitationem dolorum consectetur facere saepe tenetur quia officiis asperiores vero velit nisi earum ut pariatur!",
  },
  {
    name: "Dhiraj",
    image: AVTR2,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis, exercitationem dolorum consectetur facere saepe tenetur quia officiis asperiores vero velit nisi earum ut pariatur!",
  },
  {
    name: "Aarya",
    image: AVTR3,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis, exercitationem dolorum consectetur facere saepe tenetur quia officiis asperiores vero velit nisi earum ut pariatur!",
  },
  {
    name: "Preeti",
    image: AVTR4,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis, exercitationem dolorum consectetur facere saepe tenetur quia officiis asperiores vero velit nisi earum ut pariatur!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container tertimonials__container" 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ avatar, name, image, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
