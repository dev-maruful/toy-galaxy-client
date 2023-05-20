import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Newsletter = () => {
  return (
    <div className="mb-28">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          data-aos-delay="300"
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-center md:block"
        >
          <img
            className="rounded-t-3xl md:rounded-l-3xl h-80 md:h-full"
            src="https://images.unsplash.com/photo-1574047473179-a73921fc1eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHN0YXIlMjB3YXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center py-5 md:py-0">
          <h1 className="text-5xl font-bold leading-[50px] text-center mb-5">
            Newsletter
          </h1>
          <p className="text-center font-semibold mb-5">
            Subscribe for latest toy updates!
          </p>
          <div className="flex items-center justify-center">
            <input
              className="px-3 py-3 border border-gray-300 rounded-full w-2/4 mr-2"
              type="text"
              placeholder="your email address"
            />
            <button className="btn btn-outline btn-primary rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center md:block"
        >
          <img
            className="rounded-b-3xl md:rounded-r-3xl h-80 md:h-full"
            src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2ZW5nZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
