import KitchenImg from "../assets/kitchen image.jpg";
import LivingImg from "../assets/living image.jpeg";
import BedroomImg from "../assets/bedroom image.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const InspirationSection = () => {
  return (
    <div className="bg-beige-light w-full h-[670px]">
      <Splide 
      aria-label="Inspiration"
      options={{
        type: 'slide',
        perPage: 2,
        perMove: 1,
      }}>
        <SplideSlide>
          <div
            className="w-[404px] h-[582px] bg-cover"
            style={{ backgroundImage: `url(${BedroomImg})` }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="w-[404px] h-[582px] bg-cover"
            style={{ backgroundImage: `url(${LivingImg})` }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="w-[404px] h-[582px] bg-cover"
            style={{ backgroundImage: `url(${KitchenImg})` }}
          ></div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default InspirationSection;
