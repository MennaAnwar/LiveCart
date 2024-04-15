import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Properly import necessary CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-cube";
import "swiper/css/thumbs";

import { EffectCube, Pagination } from "swiper/modules";

interface Imgs {
  imgs: string[];
}

const ProductSwiper: FC<Imgs> = ({ imgs }) => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={`img-` + index}>
          <img src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
