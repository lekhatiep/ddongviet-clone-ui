import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuHoverMobile from "../components/MenuHover/MenuHoverMobile";
import MenuHoverApple from "../components/MenuHover/MenuHoverApple";
import MenuHoverLaptop from "../components/MenuHover/MenuHoverLaptop";
import Slider from "../components/Slider/Slider";
import SliderBody from "../components/SliderBody/SliderBody";
import ItemAds from "../components/ItemAds/ItemAds";
import WrapSubmenu from "../components/MenuHover/WrapSubmenu";

//css
import "../assets/css/Home.css";
import ItemHorizontal from "../components/ItemHorizontal/ItemHorizontal";

export default function Home() {
  const [menuName, setMenuName] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);

  const subMenuRef = useRef(null);

  const listItemAds = [
    {
      href: "https://didongviet.vn/may-tinh-bang/ipad-gen-9-64gb-wifi.html",
      src: "https://cdn-v2.didongviet.vn/files/banners/2023/6/10/1/1688947116995_right_5790k.png",
      alt: "",
    },
    {
      href: "https://didongviet.vn/dien-thoai/samsung-galaxy-s23-ultra-5g-256gb-bhdt.html",
      src: "https://cdn-v2.didongviet.vn/files/banners/2023/6/11/1/1689012053303_s23_ultra.jpg",
    },
    {
      href: "https://didongviet.vn/dien-thoai/oppo-a57-4gb-128gb-bh13t.html",
      src: "https://cdn-v2.didongviet.vn/files/banners/2023/6/8/1/1688779744492_398x252_5.jpg",
    },
  ];

  const listItemHorizontal = [
    {
      href:"https://didongviet.vn/dien-thoai/iphone-15-pro-max.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/8/18/0/1695001713231_iphone_15_pro_max.png",
      alt:"iPhone 15 Pro Max"
    },
    {
      href:"https://didongviet.vn/dien-thoai/samsung-galaxy-z-flip5-5g.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/15/0/1692080008025_frame_44.png",
      alt:"Samsung Galaxy Z Flip5"
    },
    {
      href:"https://didongviet.vn/apple-macbook-imac/macbook-air-m1-2020.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/15/0/1692080217166_frame_32.png",
      alt:"Macbook Air M1"
    },
    {
      href:"https://didongviet.vn/dien-thoai/samsung-galaxy-s23-ultra-5g-256gb.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/8/25/0/1695651188729_untitled_design.png",
      alt:"Samsung Galaxy S23 Ultra"
    },
    {
      href:"https://didongviet.vn/phu-kien/cu-sac-mophie-essential-pd-30w-1c.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/31/0/1693464688879_mophie.png",
      alt:"Củ Sạc Mophie 30W"
    },
    {
      href:"https://didongviet.vn/may-tinh-bang/ipad-gen-9-64gb-wifi.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/15/0/1692080182719_frame_25.png",
      alt:"iPad Gen 9 2021"
    },
    {
      href:"https://didongviet.vn/dien-thoai/iphone-15-pro-max.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/8/18/0/1695001713231_iphone_15_pro_max.png",
      alt:"iPhone 15 Pro Max"
    },
    {
      href:"https://didongviet.vn/dien-thoai/samsung-galaxy-z-flip5-5g.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/15/0/1692080008025_frame_44.png",
      alt:"Samsung Galaxy Z Flip5"
    },
    {
      href:"https://didongviet.vn/apple-macbook-imac/macbook-air-m1-2020.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/15/0/1692080217166_frame_32.png",
      alt:"Macbook Air M1"
    },
    {
      href:"https://didongviet.vn/dien-thoai/samsung-galaxy-s23-ultra-5g-256gb.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/8/25/0/1695651188729_untitled_design.png",
      alt:"Samsung Galaxy S23 Ultra"
    },
    {
      href:"https://didongviet.vn/phu-kien/cu-sac-mophie-essential-pd-30w-1c.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/31/0/1693464688879_mophie.png",
      alt:"Củ Sạc Mophie 30W"
    },
    {
      href:"https://didongviet.vn/may-tinh-bang/ipad-gen-9-64gb-wifi.html",
      src:"https://cdn-v2.didongviet.vn/files/page/2023/7/15/0/1692080182719_frame_25.png",
      alt:"iPad Gen 9 2021"
    }
  ];
  
  const handleMouseHover = (event) => {
    const { name } = event.currentTarget;
    setShowSubMenu(true);

    if (subMenuRef.current) {
      subMenuRef.current.style.display = "block";
    }

    if (name === "Mobile") {
      setMenuName(name);
    }
    if (name === "Apple") {
      setMenuName(name);
    }
    if (name === "Laptop") {
      setMenuName(name);
    }
    if (name === "") {
      setShowSubMenu(false);
    }
  };

  const handleMouseLeave = (name) => {
    if (subMenuRef.current) {
      console.log(subMenuRef.current);
      subMenuRef.current.style.display = "none";
    }
  };

  return (
    <>
      <main className="flex w-full flex-col justify-start items-center mx-auto">
        <div className="container w-full max-w-6xl">
          <div className="grid grid-cols-12 min-h-[410px] mt-1 gap-2" onMouseLeave={() => setShowSubMenu(false)}>
            <div
              className="col-span-2 max-md:hidden bg-white rounded-lg"
            >
              <div
                name=""
                className="rounded-lg bg-white p-1 flex flex-col justify-between min-h-[100px]"
              
              >
                <Link
                  href="/"
                  name="Mobile"
                  onMouseOver={(e) => handleMouseHover(e)}
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
                  onMouseOver={(e) => handleMouseHover(e)}
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
                <Link href="/" name="Laptop" onMouseOver={handleMouseHover} onMouseLeave={() => setShowSubMenu(false)}>
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
                <div className="w-full col-span-4 min-h-[410px] pr-[0.5rem]">
                   <Slider></Slider>
                </div>
                <div className="col-span-1 flex flex-col justify-between">
                  {listItemAds.length > 0 &&
                    listItemAds.map((val, i) => (
                      <ItemAds key={i} data={val}></ItemAds>
                    ))}
                </div>
              </div>

              {showSubMenu && (
                <WrapSubmenu myRef={subMenuRef}>
                  {menuName === "Mobile" && <MenuHoverMobile />}
                  {menuName === "Apple" && <MenuHoverApple />}
                  {menuName === "Laptop" && <MenuHoverLaptop />}
                </WrapSubmenu>
              )}
            </div>
          </div>
          <div className="no-scrollbar my-2 w-full rounded-lg bg-white p-4 max-md:hidden max-md:overflow-x-scroll md:grid md:grid-cols-12 md:gap-4">
            {
              listItemHorizontal.length > 0 && 
              listItemHorizontal.map((val,i)=>(
                  <ItemHorizontal key={i} data={val} />
              ))
            }
          </div>
          <div className="w-full rounded-lg overflow-hidden flex justify-between items-center relative">
            <SliderBody></SliderBody>
          </div>
          <div className="px-3 my-2 flex-col items-center justify-between rounded-lg bg-white  py-4 max-md:my-1 max-md:bg-bgddv max-md:py-2">
            <h2 className="text-24  font-bold text-ddv ">
              <a href="#">iPhone VN/A Chính Thống</a>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
