import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/bundle";
import "./Slider.css"
export default function Slider() {
  SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

  const listSlideImages = [
    "https://cdn-v2.didongviet.vn/files/banners/2023/5/7/1/1686119813558_khoan_khoan_02.png",
    "https://cdn-v2.didongviet.vn/files/banners/2023/6/10/1/1688984068396_pk_xaaa_kho_824x400.jpg",
    "https://cdn-v2.didongviet.vn/files/banners/2023/6/12/1/1689148538718_macbook_air_m2_824x400.jpg",
    "https://cdn-v2.didongviet.vn/files/banners/2023/6/11/1/1689072477972_824x400_80_6.jpg",
    "https://cdn-v2.didongviet.vn/files/banners/2023/6/10/1/1688975691163_824x400.png",
  ];
  return (
    <>
      <Swiper
        navigation
        pagination ={{color: 'white'}}
        effect="fade"
        modules={{}}
        autoplay={{ delay: 3000 }}
      >
        {listSlideImages &&
          listSlideImages.map((val,index) => (
            <SwiperSlide key={index}>
              <a
                href="/"
                className=" w-full overflow-hidden rounded relative min-h-full"
              >
                <img
                  src={val}
                  alt=""
                  className="md:object-cover max-md:object-fill h-full"
                />
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
