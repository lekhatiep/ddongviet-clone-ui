import React from "react";
import { Link } from "react-router-dom";

export default function ItemProduct() {
  return (
    <>
      <div>
        <Link
          to="/dien-thoai/iphone-15-pro-max-256gb.html"
          className="flex flex-col items-center bg-white rounded-md border px-3 py-4 hover:border-white hover:drop-shadow-xl"
        >
          <div className="flex w-full items-center justify-start h-[30px] pb-2">
            <p className="border border-ddv bg-ddv m-1 items-center whitespace-nowrap rounded px-2 py-1 text-white font-medium max-md:text-xs">
              Giảm 10%
            </p>
            <p className="border border-ddv bg-white m-1 items-center whitespace-nowrap rounded px-2 py-1 text-ddv font-medium max-md:text-xs">
              Trả góp 0%
            </p>
          </div>
          <div className="relative w-full">
            <div className="h-[250px] w-full max-md:h-[auto] flex justify-center relative ">
              <div className="h-full object-contain w-full transition duration-200 ease-in-out hover:scale-105 md:h-[200px] md:w-[200px]">
                <img
                  loading="lazy"
                  width="600"
                  height="600"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695955479856_thumb_iphone_15_pro_didongviet.jpg"
                  alt="iPhone 15 Pro Max 512GB Chính hãng (VN/A)"
                />
              </div>
            </div>
          </div>
          <h3>iPhone 15 Pro Max 256GB Chính hãng (VN/A)</h3>
          <div>
            <div>
              <p>39.490.000 đ</p>
              <p>43.990.000</p>
            </div>
          </div>
          <div>
            <p>
              <img
                src="https://cdn-v2.didongviet.vn/files/default/2023/8/29/0/1695952318224_coaa_saaaaan.png"
                alt=""
              />
            </p>
            <p>
              <span>Tặng đến</span>
              <span>4 triệu </span>
              khi lên đời
            </p>
            <p>
              <span>+ 3 KM khác</span>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
