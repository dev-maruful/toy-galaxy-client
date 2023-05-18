import React from "react";

const Banner = () => {
  return (
    <div className="hero mt-10 mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2ZW5nZXJzJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold leading-[50px]">
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
