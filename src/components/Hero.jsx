"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 1,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "Women Latest Fashion Sale",
      price: 1000,
    },
    {
      id: 2,
      img: "/banner-2.jpg",
      title: "New Arrivals",
      mainTitle: "Men’s Summer Collection",
      price: 1500,
    },
    {
      id: 3,
      img: "/banner-3.jpg",
      title: "Best Seller",
      mainTitle: "Kids Exclusive Outfits",
      price: 800,
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-6">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
