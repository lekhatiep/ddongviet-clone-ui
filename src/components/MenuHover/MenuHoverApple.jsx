import React from "react";

export default function MenuHoverApple({handleMouseOver}) {

    
  return (
    <div onMouseLeave = {handleMouseOver}
      class="absolute inset-y-2 z-50 w-2/3 overflow-hidden rounded bg-transparent text-gray-700 group-hover:block top-0"
      style={{ height: "410px", zIndex: 99, left: "0px", width: "100%" }}
    >
      <div class="container grid h-full w-full grid-cols-4 items-start justify-between gap-4 bg-white ">
        <div class="col-span-1 my-2 h-full flex-col border-r px-2">
          <p class="py-2 text-sm font-bold"></p>
          <div class="grid grid-cols-2 gap-4">
            <a href="dien-thoai-iphone" title="iPhone">
              <p class="text-sm font-normal hover:text-ddv ">iPhone</p>
            </a>
            <a href="apple-ipad" title="Apple iPad">
              <p class="text-sm font-normal hover:text-ddv ">Apple iPad</p>
            </a>
            <a href="apple-macbook-imac" title="MacBook">
              <p class="text-sm font-normal hover:text-ddv ">MacBook</p>
            </a>
            <a href="dong-ho-apple-watch" title="Apple Watch">
              <p class="text-sm font-normal hover:text-ddv ">Apple Watch</p>
            </a>
            <a href="apple-airpods" title="Apple AirPods">
              <p class="text-sm font-normal hover:text-ddv ">Apple AirPods</p>
            </a>
            <a href="phu-kien-apple-chinh-hang" title="Phụ kiện Apple">
              <p class="text-sm font-normal hover:text-ddv ">Phụ kiện Apple</p>
            </a>
          </div>
        </div>
        <div class="col-span-1 my-2 h-full flex-col border-r">
          <p class="py-2 text-sm font-bold"></p>
          <div class="grid grid-cols-1 gap-4"></div>
        </div>
        <div class="col-span-2 my-2 h-full flex-col overflow-auto">
          <p class="py-2 text-sm font-bold">Sản phẩm giá sốc</p>
          <a
            title="iPhone 14 Pro Max 128GB Chính hãng (VN/A)"
            href="/dien-thoai/iphone-14-pro-max-128gb.html"
          >
            <div class="my-2 flex items-center justify-start">
              <div class="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div class="flex-col items-center justify-start">
                <p class="px-3 text-14 hover:text-ddv">
                  iPhone 14 Pro Max 128GB Chính hãng (VN/A)
                </p>
                <div class="flex items-center justify-start">
                  <p class="px-3 text-14 font-medium text-ddv">25.790.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="Tai nghe Apple AirPods 2 Chính Hãng (VN/A) (No Wireless Charge)"
            href="/thiet-bi-am-thanh/tai-nghe-bluetooth-apple-airpods-2-no-wireless-charge-vn-a-mau-tr-ng-4.html"
          >
            <div class="my-2 flex items-center justify-start">
              <div class="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/t/a/tai-nghe-apple-airpods-2-2022-didongviet.png"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div class="flex-col items-center justify-start">
                <p class="px-3 text-14 hover:text-ddv">
                  Tai nghe Apple AirPods 2 Chính Hãng (VN/A) (No Wireless
                  Charge)
                </p>
                <div class="flex items-center justify-start">
                  <p class="px-3 text-14 font-medium text-ddv">2.560.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="iPhone 13 128GB Chính Hãng (VN/A)"
            href="/dien-thoai/iphone-13-128gb.html"
          >
            <div class="my-2 flex items-center justify-start">
              <div class="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div class="flex-col items-center justify-start">
                <p class="px-3 text-14 hover:text-ddv">
                  iPhone 13 128GB Chính Hãng (VN/A)
                </p>
                <div class="flex items-center justify-start">
                  <p class="px-3 text-14 font-medium text-ddv">15.790.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="iPad Gen 9 2021 | Wifi 64GB"
            href="/may-tinh-bang/ipad-gen-9-64gb-wifi.html"
          >
            <div class="my-2 flex items-center justify-start">
              <div class="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/ipad-gen-9-64gb-wifi.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div class="flex-col items-center justify-start">
                <p class="px-3 text-14 hover:text-ddv">
                  iPad Gen 9 2021 | Wifi 64GB
                </p>
                <div class="flex items-center justify-start">
                  <p class="px-3 text-14 font-medium text-ddv">6.890.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="MacBook Air M1 2020 13 inch | 8GB/256GB"
            href="/apple-macbook-imac/macbook-air-13-256gb-2020-chip-arm.html"
          >
            <div class="my-2 flex items-center justify-start">
              <div class="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/products/2023/3/21/1/1682044807859_thumb_macbook_air_m1_8gb_256gb_didongviet.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div class="flex-col items-center justify-start">
                <p class="px-3 text-14 hover:text-ddv">
                  MacBook Air M1 2020 13 inch | 8GB/256GB
                </p>
                <div class="flex items-center justify-start">
                  <p class="px-3 text-14 font-medium text-ddv">18.390.000</p>
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
