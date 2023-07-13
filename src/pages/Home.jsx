import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuHoverMobile from "../components/MenuHover/MenuHoverMobile";
import MenuHoverApple from "../components/MenuHover/MenuHoverApple";
import MenuHoverLaptop from "../components/MenuHover/MenuHoverLaptop";
import Slider from "../components/Slider/Slider";
import ItemAds from "../components/ItemAds/ItemAds";
import WrapSubmenu from "../components/MenuHover/WrapSubmenu";

//css
import "../assets/css/Home.css";

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
              className="col-span-2 max-md:hidden bg-white"
               
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
                <Link href="/" name="Laptop" onMouseOver={handleMouseHover}>
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
                <div className="w-full col-span-4 min-h-[410px]">
                   <Slider></Slider>
                </div>
                <div className="col-span-1">
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
        </div>
      </main>
    </>
  );
}
