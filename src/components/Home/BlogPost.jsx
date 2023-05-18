import React from "react";

const BlogPost = () => {
  return (
    <div className="mb-28">
      <h1 className="text-5xl font-bold leading-[50px] text-center mb-5">
        Blog Post
      </h1>
      <div className="flex gap-10">
        <div className="card w-1/3 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1512572525676-f9b59951929e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhbnNmb3JtZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">Transformers</h2>
            <p className="font-medium">
              A legendary franchise that has captured the hearts of fans
              worldwide, is an epic saga of robots in disguise. Transformers has
              become an iconic symbol of action, adventure, and the eternal
              battle between good and evil. Let's delve into the thrilling world
              of Transformers and discover the enduring allure that continues to
              captivate audiences of all ages.
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <div className="card h-72 mb-10 card-side bg-base-100 shadow-xl">
            <figure className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1608889175157-718b6205a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2ZW5nZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <div className="card-body w-1/2">
              <h2 className="card-title text-3xl font-bold">Deadpool</h2>
              <p className="font-medium">
                The "Merc with a Mouth," is a charismatic and irreverent
                anti-hero known for his razor-sharp wit, unbreakable fourth
                wall, and penchant for breaking all the rules. With a twisted
                sense of humor and a penchant for mayhem, Deadpool brings a
                unique blend of chaos, comedy, and complex character depth to
                the world of superheroes.
              </p>
            </div>
          </div>
          <div className="card h-72 card-side bg-base-100 shadow-xl">
            <figure className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1608889453710-95a45def16f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2ZW5nZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <div className="card-body w-1/2">
              <h2 className="card-title text-3xl font-bold">Star Wars</h2>
              <p className="font-medium">
                A groundbreaking space-fantasy franchise, transports audiences
                to a galaxy far, far away, where the eternal battle between the
                light and dark sides of the Force unfolds. With its iconic
                characters, epic conflicts, and timeless themes of hope,
                redemption, and the power of good triumphing over evil, Star
                Wars has captured the hearts of millions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
