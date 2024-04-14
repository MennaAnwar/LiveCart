import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Categories.css";
import Data from "./CategoriesData";
import { Link } from "react-router-dom";

const Categories: FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Data.map((cat, index) => (
          <SwiperSlide key={`cat-` + index}>
            <Link
              className="d-flex flex-column align-items-center justify-content-center"
              to="/shop"
            >
              <img src={cat.icon} />
              {cat.cat}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Categories;
