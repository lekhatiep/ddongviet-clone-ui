import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
 <div className="w-full overflow-hidden max-md:hidden h-[44px] min-w-[100vh]">
    <div id="topBanner" className="flex h-full w-full items-center justify-center overflow-hidden bg-[#cd131d]" >
        <a href="/" className="item-center container flex w-full justify-center overflow-hidden">
            <img src="https://cdn-v2.didongviet.vn/files/banners/2023/5/21/1/1687323167073_artboard_1.jpg" alt="DDV"/>
            </a>
            </div>
            </div>
      <header className="page-header flex items-center w-full mx-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between max-md:justify-between max-md:grid-cols-8 w-full max-md:grid md:gap-8 max-md:h-[60px] py-2">
          <div className="md:w-1/5">
            <img
              src="https://didongviet.vn/svg/Header/logowhite.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col items-end justify-end mt-2 relative md:w-2/6">
            <div className="w-full">
              <input
                className="h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-4 pr-1"
                type="text"
                placeholder="Samsung"
              />
              <span className="absolute right-0 top-[0.6rem] mr-4 max-md:top-2">
                <button>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m23.233 21.86-5.712-5.94a9.66 9.66 0 0 0 2.273-6.23c0-5.343-4.347-9.69-9.69-9.69C4.763 0 .415 4.347.415 9.69c0 5.343 4.348 9.69 9.69 9.69a9.586 9.586 0 0 0 5.552-1.753l5.755 5.985c.241.25.565.388.911.388a1.265 1.265 0 0 0 .91-2.14ZM10.104 2.528c3.95 0 7.163 3.213 7.163 7.162 0 3.95-3.213 7.162-7.162 7.162-3.95 0-7.163-3.213-7.163-7.162 0-3.95 3.213-7.162 7.162-7.162Z"
                      fill="#BE1E2D"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
            <ul className="w-full flex space-x-2 pt-2 items-end">
              <li className="text-10 font-bold text-white hover:underline cursor-pointer">
                Iphone 14 Pro Max
              </li>
              <li className="text-10 font-bold text-white hover:underline cursor-pointer">
                S23 Ultra 256GB
              </li>
              <li className="text-10 font-bold text-white hover:underline cursor-pointer">
                Red mi
              </li>
              <li className="text-10 font-bold text-white hover:underline cursor-pointer">
                Ipad
              </li>
            </ul>
          </div>
          <div className="md:w-3/6">
            <ul className="flex space-x-1 items-center">
              <li className="w-2/6">
                <a href="/" className="flex">
                  <img
                    src="https://didongviet.vn/svg/Header/phone.svg"
                    alt=""
                  />
                  <span className="text-white text-sm pl-1">
                    Đặt hàng 1800.6018
                  </span>
                </a>
              </li>
              <li className="w-2/6">
                <a href="/" className="flex">
                  <img
                    src="https://didongviet.vn/svg/Header/location.svg"
                    alt=""
                  />
                  <p className="text-white text-sm pl-1">
                    Cửa hàng <br></br> gần bạn
                  </p>
                </a>
              </li>
              <li className="w-2/6">
                <a href="/" className="flex">
                  <img
                    src="https://didongviet.vn/svg/Header/package.svg"
                    alt=""
                  />
                  <span className="text-white text-sm pl-1">
                    Tra cứu <br></br> đơn hàng
                  </span>
                </a>
              </li>
              <li className="w-2/6">
                <a href="/" className="flex items-center">
                  <img src="https://didongviet.vn/svg/Header/cart.svg" alt="" />
                  <span className="text-white text-sm pl-1">Giỏ hàng</span>
                </a>
              </li>
              <li className="flex w-2/6">
                <img src="https://didongviet.vn/svg/Header/user.svg" alt="" />
                <p className="flex flex-col pl-1">
                  <a href="/" className="text-sm text-white hover:underline">Đăng nhập</a>
                  <a href="/" className="text-sm text-white hover:underline">Đăng ký</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
