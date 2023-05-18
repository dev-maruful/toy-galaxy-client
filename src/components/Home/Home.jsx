import React from "react";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import ShopByCategory from "./ShopByCategory";
import BlogPost from "./BlogPost";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <ShopByCategory></ShopByCategory>
      <BlogPost></BlogPost>
    </div>
  );
};

export default Home;
