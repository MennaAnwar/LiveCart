import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Categories.css";
import Data from "./CategoriesData";

const Categories: FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Data.map((cat, index) => (
          <SwiperSlide key={`cat-` + index}>
            <a
              className="d-flex flex-column align-items-center"
              href="/react/porto/demo37/shop/?category=women"
            >
              <img src={cat.icon} />
              {cat.cat}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Categories;
