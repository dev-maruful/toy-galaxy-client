import React from "react";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import ShopByCategory from "./ShopByCategory";
import BlogPost from "./BlogPost";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <ShopByCategory></ShopByCategory>
      <BlogPost></BlogPost>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
