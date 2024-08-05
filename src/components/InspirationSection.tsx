import { useState } from "react";
import KitchenImg from "../assets/kitchen image.jpg";
import LivingImg from "../assets/living image.jpeg";
import BedroomImg from "../assets/bedroom image.jpeg";
import ArrowImg from "../assets/arrow right yellow.png";
import { Link } from "react-router-dom";

const InspirationSection = () => {
  const images = [
    { src: BedroomImg, title: "Bedroom", subtitle: "Inner Peace" },
    { src: LivingImg, title: "Living", subtitle: "Inner Peace" },
    { src: KitchenImg, title: "Kitchen", subtitle: "Inner Peace" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const { src, title, subtitle } = images[currentIndex];

  return (
    <div className="bg-beige-light w-full lg:h-[670px] flex flex-col lg:flex-row gap-4 justify-center items-center p-8">
      <div className="w-[300px] lg:w-[422px] mr-10">
        <h3 className="text-[40px] font-bold pb-2">
          50+ Beautiful {title} inspiration
        </h3>
        <p className="pb-6">
          Our designer already made a lot of beautiful prototipe of {title} that
          inspire you
        </p>
        <Link to="/Shop">
          <button className="w-[176px] h-[48px] text-white font-bold bg-yellow-dark">
            Explore More
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to="/Shop">
          <div
            className="w-[300px] h-[450px] lg:w-[404px] lg:h-[582px] bg-cover p-4 flex items-end"
            style={{ backgroundImage: `url(${src})` }}
          >
            <h3 className="bg-white bg-opacity-80 w-[217px] h-[130px] font-medium text-start pl-4 pt-9">
              01 -- {title}
              <br></br>
              <span className="text-[28px] font-semibold">{subtitle}</span>
            </h3>
          </div>
        </Link>
      </div>
      <button onClick={handleNext}>
        <img src={ArrowImg} />
      </button>
    </div>
  );
};

export default InspirationSection;
