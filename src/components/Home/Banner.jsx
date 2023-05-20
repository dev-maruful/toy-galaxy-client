import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div className="hero mt-10 mb-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          data-aos-delay="300"
          data-aos="fade-down"
          data-aos-duration="1000"
          src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2ZW5nZXJzJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="rounded-lg shadow-2xl"
        />
        <div data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl md:text-5xl font-bold md:leading-[50px]">
            Discover Endless Adventures Where Imagination Knows No Bounds!
          </h1>
          <p className="py-6 font-medium">
            Welcome to a rare Galaxy, where imagination takes flight and the
            possibilities are infinite! Prepare to be captivated by our galaxy
            of toys, where Avengers, Marvel heroes, Star Wars legends,
            Transformers, and more converge in a spectacular display of wonder!
          </p>
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
