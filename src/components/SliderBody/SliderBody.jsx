import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/bundle";
import "./SliderBody.css"
export default function Slider() {
  SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

  const listSlideImages = [
    "https://cdn-v2.didongviet.vn/files/banners/2023/8/24/1/1695545907706_ip15_2_1240_x_109.jpg",
    "https://cdn-v2.didongviet.vn/files/banners/2023/8/21/1/1695260058399_line_pc_12.jpg",
    "https://cdn-v2.didongviet.vn/files/banners/2023/8/23/1/1695415509288_1240x104_f.jpg",
    "https://cdn-v2.didongviet.vn/files/banners/2023/8/18/1/1695011134483_18_09_02.jpg",
  ];
  return (
    <>
      <Swiper
        navigation
        effect="fade"
        modules={{}}
        autoplay={{ delay: 2000 }}
        autoHeight={true}
      >
        {listSlideImages &&
          listSlideImages.map((val,index) => (
            <SwiperSlide key={index} >
              <a
                href="/"
                className=""
              >
                <img
                  src={val}
                  alt=""
                  className=""
                />
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
