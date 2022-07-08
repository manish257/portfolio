import React from "react";
import "./Testimonials.css";

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
    name: "Missandei",
    image: "https://pbs.twimg.com/profile_images/2403580562/m94b03woyggkfo11osw7_400x400.jpeg",
    review:
      "Manish is wonderful to work with, and has an exceptional skill in Python, C and Assembly. He is exceptionally good at Logic Building and programming. He's not only a reliable team leader but also inspiring how he's good with time management and planning.",
  },
  {
    name: "Stephen Strange",
    image: "https://pbs.twimg.com/profile_images/893371970447867908/Vzcva6xN_400x400.jpg",
    review:
      "Manish is smart and hard working. He has always prove his self a valuable team player. I would recommend Manish very highly, not only for his knowledge, skills and perseverance but also for his ability to remain calm and methodical under severe pressure.",
  },
  {
    name: "Bruce Wayne",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0P2fKkgWq7evqEZlgBZPi2ROSR_4gRMKDw&usqp=CAU",
    review:
      "Manish is smart and hard working. He is always interested to learn and teach others. He has always prove his self a valuable team player. There is no pressure working with as everything is planned before hand and work goes smooth.",
  },
  {
    name: "T'Challa",
    image: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/03/black-panther-e1520897716634.jpg",
    review:
      "Manish and I are working together in our final year project.In addition to his excellent core skills of Machine Learning and Team management, Manish is great in leading the group. He is always motivating us to work together and the planning is always perfect. ",
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
