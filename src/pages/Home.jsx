import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuHoverMobile from "../components/MenuHover/MenuHoverMobile";
import MenuHoverApple from "../components/MenuHover/MenuHoverApple";
import MenuHoverLaptop from "../components/MenuHover/MenuHoverLaptop";
import Slider from "../components/Slider/Slider";

import { Menu, createStyles } from "@mantine/core";
import "../assets/css/Home.css";
const useStyles = createStyles((theme) => ({
  dropdown: {
    backgroundColor: "red",

    padding: "0px",
  },
}));

export default function Home() {

  const [isShowMenuHoverMobile, setIsShowMenuHoverMobile] = useState(false);
  const [isShowMenuHoverApple, setIsShowMenuHoverApple] = useState(false);
  const [isShowMenuHoverLaptop, setIsShowMenuHoverLaptop] = useState(false);

  const handleMouseHover = (event) => {
    const {name} = event.currentTarget;
    setIsShowMenuHoverMobile(false);
    setIsShowMenuHoverApple(false);
    setIsShowMenuHoverLaptop(false);
    console.log(event.currentTarget);
    console.log("hover:"+name);

    if (name === "Mobile") {
      setIsShowMenuHoverMobile(true);
    }
    if (name === "Apple") {
      setIsShowMenuHoverApple(true);
    }
    if (name === "Laptop") {
      setIsShowMenuHoverLaptop(true);
    }
    if (name === "") {
      setIsShowMenuHoverMobile(false);
      setIsShowMenuHoverApple(false);
      setIsShowMenuHoverLaptop(false);
    }
  };

  const handleMouseLeave = (name) => {
    setIsShowMenuHoverMobile(false);
    setIsShowMenuHoverApple(false);
    setIsShowMenuHoverLaptop(false);

    console.log("name" + name);
    if (name === "Mobile") {
      setIsShowMenuHoverMobile(true);
    } else if (name === "Apple") {
      setIsShowMenuHoverApple(true);
    } else if (name === "Laptop") {
      setIsShowMenuHoverLaptop(true);
    }
  };
  return (
    <>
      <main className="flex w-full flex-col justify-start items-center mx-auto">
        <div className="container w-full max-w-6xl">
          <div className="group grid grid-cols-12 min-h-[410px] mt-1 gap-2">
            <div className="col-span-2 max-md:hidden min-h-[410px] bg-white">
              <div
                name=""
                className="rounded-lg bg-white p-1 flex flex-col justify-between min-h-[100px] "
               
              >
                <Link
                  href="/"
                  name="Mobile"
                  onMouseOver={handleMouseHover}
                  onMouseLeave={() => handleMouseLeave("Mobile")}
                >
                  <div className="h-[26px] flex cursor-pointer items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <img
                          src="https://cdn-v2.didongviet.vn/files/page/2022/5/29/0/icon0008.png"
                          style={{ height: "24px", objectFit: "contain" }}
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Điện thoại"
                        />
                      </div>
                      <div>
                        <p className="text-black text-sm-[12px] pl-3 hover:text-[#be1e2d]">
                          Điện thoại
                        </p>
                      </div>
                    </div>
                    <img
                      src="https://didongviet.vn/svg/Header/arrowright.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </Link>
                <Link
                  href="/"
                  name="Apple"
                  onMouseOver={handleMouseHover}
                  onMouseLeave={() => handleMouseLeave("Apple")}
                >
                  <div className="h-[26px] flex cursor-pointer items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <img
                          src="https://cdn-v2.didongviet.vn/files/page/2023/5/2/0/1685677499753_apple_iphone_cion.png"
                          style={{ height: "24px", objectFit: "contain" }}
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Điện thoại"
                        />
                      </div>
                      <div>
                        <p className="text-black text-sm-[12px] pl-3">Apple</p>
                      </div>
                    </div>
                    <img
                      src="https://didongviet.vn/svg/Header/arrowright.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </Link>
                <Link
                  href="/"
                  name="Laptop"
                  onMouseOver={handleMouseHover}
                  onMouseLeave={() => handleMouseLeave("Laptop")}
                >
                  <div className="h-[26px] flex cursor-pointer items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <img
                          src="https://cdn-v2.didongviet.vn/files/page/2022/5/29/0/icon0010.png"
                          style={{ height: "24px", objectFit: "contain" }}
                          loading="lazy"
                          width="24"
                          height="24"
                          alt="Điện thoại"
                        />
                      </div>
                      <div>
                        <p className="text-black text-sm-[12px] pl-3">Laptop</p>
                      </div>
                    </div>
                    <img
                      src="https://didongviet.vn/svg/Header/arrowright.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative h-[410px] max-md:h-full max-md:w-full md:col-span-10">
              <div className="grid md:grid-cols-5">
                <div className="bg-blue-400 w-full col-span-4">
                  <Slider></Slider>
                </div>
                <div className="bg-red-400 col-span-1">Banner left</div>
              </div>
              {isShowMenuHoverMobile && <MenuHoverMobile />}
              {isShowMenuHoverApple && <MenuHoverApple />}
              {isShowMenuHoverLaptop && <MenuHoverLaptop />}
            </div>
          </div>
        </div>
        <div className="group">
          Hover me
          <div className="child">
            This will be displayed when the parent is hovered
          </div>
        </div>
      </main>
    </>
  );
}
