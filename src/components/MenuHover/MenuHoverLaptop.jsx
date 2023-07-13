import React from "react";

export default function MenHoverLaptop({ handleMouseOver, onMouseOver, innerRef}) {
  return (
    <div
      className="absolute inset-y-2 z-50 w-2/3 overflow-hidden rounded bg-transparent text-gray-700 group-hover:block top-0 hidden child"
      style={{ height: "410px", zIndex: 99, left: "0px", width: "100%" }}
    >
      <div className="container grid h-full w-full grid-cols-4 items-start justify-between gap-4 bg-white ">
        <div className="col-span-1 my-2 h-full flex-col border-r px-2">
          <p className="py-2 text-sm font-bold">Mac</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="macbook-pro" title="MacBook Pro">
              <p className="text-sm font-normal hover:text-ddv ">MacBook Pro</p>
            </a>
            <a href="macbook-air" title="MacBook Air">
              <p className="text-sm font-normal hover:text-ddv ">MacBook Air</p>
            </a>
          </div>
        </div>
        <div className="col-span-1 my-2 h-full flex-col border-r">
          <p className="py-2 text-sm font-bold">Máy tính bảng</p>
          <div className="grid grid-cols-1 gap-4">
            <a title="iPad" href="apple-ipad.html">
              <p className="text-sm font-normal hover:text-ddv">iPad</p>
            </a>
            <a title="Galaxy Tab" href="samsung-galaxy-tab.html">
              <p className="text-sm font-normal hover:text-ddv">Galaxy Tab</p>
            </a>
          </div>
        </div>
        <div className="col-span-2 my-2 h-full flex-col overflow-auto">
          <p className="py-2 text-sm font-bold">Sản phẩm giá sốc</p>
          <a
            title="iPad Gen 9 2021 | Wifi 64GB"
            href="/may-tinh-bang/ipad-gen-9-64gb-wifi.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/ipad-gen-9-64gb-wifi.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  iPad Gen 9 2021 | Wifi 64GB
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">6.890.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="MacBook Air M1 2020 13 inch | 8GB/256GB"
            href="/apple-macbook-imac/macbook-air-13-256gb-2020-chip-arm.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/products/2023/3/21/1/1682044807859_thumb_macbook_air_m1_8gb_256gb_didongviet.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  MacBook Air M1 2020 13 inch | 8GB/256GB
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">
                    18.390.000
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="iPad 10.9-inch 2022 | 64GB Wifi"
            href="/may-tinh-bang/ipad-gen-10-64gb-wifi.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/ipad-2022-64gb-wifi-didongviet.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  iPad 10.9-inch 2022 | 64GB Wifi
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">
                    10.590.000
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="iPad Pro M2 11-inch (2022) | 128GB Wifi"
            href="/may-tinh-bang/ipad-pro-m2-11-inch-128gb-wifi.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/ipad-pro-11-inch-m2-128gb-wifi-didongviet.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  iPad Pro M2 11-inch (2022) | 128GB Wifi
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">
                    19.890.000
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="MacBook Air M2 13-inch 2022 | 8GB/256GB"
            href="/apple-macbook-imac/macbook-air-m2-2022-8gb-256gb-13-inch.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/products/2023/3/21/1/1682044876951_thumb_macbook_air_m2_8gb_256gb_didongviet.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  MacBook Air M2 13-inch 2022 | 8GB/256GB
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">
                    26.890.000
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
