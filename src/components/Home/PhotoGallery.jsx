import React from "react";

const PhotoGallery = () => {
  return (
    <div className="mb-20">
      <h1 className="text-5xl font-bold leading-[50px] text-center mb-5">
        Photo Gallery
      </h1>
      <div className="divide-y rounded-lg">
        <div className="grid grid-cols-3 divide-x">
          <div>
            <img
              className="rounded-tl-3xl"
              src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZlbmdlcnMlMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF2ZW5nZXJzJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              className="md:rounded-tr-3xl"
              src="https://images.unsplash.com/photo-1608889345749-630640d94426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZlbmdlcnMlMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x">
          <div>
            <img
              className="rounded-bl-3xl"
              src="https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2ZW5nZXJzJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2ZW5nZXJzJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-br-3xl"
              src="https://images.unsplash.com/photo-1608889335949-4322c37f42f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF2ZW5nZXJzJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
