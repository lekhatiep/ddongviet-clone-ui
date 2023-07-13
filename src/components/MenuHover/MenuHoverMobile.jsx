import React from "react";

export default function MenuHover({handleMouseOver}) {
  
  return (
    <
    >
      <div className="container grid h-full w-full grid-cols-4 items-start justify-between gap-4 bg-white ">
        <div className="col-span-1 my-2 h-full flex-col border-r px-2">
          <p className="py-2 text-sm font-bold">Thương hiệu</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="dien-thoai-iphone" title="Apple">
              <p className="text-sm font-normal hover:text-ddv ">Apple</p>
            </a>
            <a href="https://didongviet.vn/samsung.html" title="Samsung ">
              <p className="text-sm font-normal hover:text-ddv ">Samsung </p>
            </a>
            <a href="dien-thoai-vertu" title="Vertu">
              <p className="text-sm font-normal hover:text-ddv ">Vertu</p>
            </a>
            <a href="oppo" title="OPPO">
              <p className="text-sm font-normal hover:text-ddv ">OPPO</p>
            </a>
            <a href="xiaomi" title="Xiaomi">
              <p className="text-sm font-normal hover:text-ddv ">Xiaomi</p>
            </a>
            <a href="realme" title="realme">
              <p className="text-sm font-normal hover:text-ddv ">realme</p>
            </a>
            <a href="dien-thoai-honor" title="Honor">
              <p className="text-sm font-normal hover:text-ddv ">Honor</p>
            </a>
            <a href="dien-thoai-nokia" title="Nokia">
              <p className="text-sm font-normal hover:text-ddv ">Nokia</p>
            </a>
          </div>
        </div>
        <div className="col-span-1 my-2 h-full flex-col border-r">
          <p className="py-2 text-sm font-bold">Khoảng giá</p>
          <div className="grid grid-cols-1 gap-4">
            <a title="dưới 4tr" href="dien-thoai.html">
              <p className="text-sm font-normal hover:text-ddv">dưới 4tr</p>
            </a>
            <a
              title="4tr - 10tr"
              href="dien-thoai.html?price_from=4000000&amp;price_to=10000000&amp;filter=true"
            >
              <p className="text-sm font-normal hover:text-ddv">4tr - 10tr</p>
            </a>
            <a
              title="10tr - 15tr"
              href="undefined.html?price_from=10000000&amp;price_to=15000000&amp;filter=true"
            >
              <p className="text-sm font-normal hover:text-ddv">10tr - 15tr</p>
            </a>
            <a
              title="15tr - 20 tr"
              href="dien-thoai.html?price_from=15000000&amp;price_to=20000000&amp;filter=true"
            >
              <p className="text-sm font-normal hover:text-ddv">15tr - 20 tr</p>
            </a>
          </div>
        </div>
        <div className="col-span-2 my-2 h-full flex-col overflow-auto">
          <p className="py-2 text-sm font-bold">Điện thoại giá sốc</p>
          <a
            title="iPhone 14 Pro Max 128GB Chính hãng (VN/A)"
            href="/dien-thoai/iphone-14-pro-max-128gb.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  iPhone 14 Pro Max 128GB Chính hãng (VN/A)
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">25.790.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="iPhone 14 Pro 128GB Chính hãng (VN/A)"
            href="/dien-thoai/iphone-14-pro-128gb.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-128gb-didongviet_1.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  iPhone 14 Pro 128GB Chính hãng (VN/A)
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">23.390.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="OPPO Reno8 T 5G 128GB Chính Hãng"
            href="/dien-thoai/oppo-reno8-t.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/o/p/oppo-reno8-t-5g-didongviet_2.png"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  OPPO Reno8 T 5G 128GB Chính Hãng
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">9.290.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="Samsung Galaxy A14 5G 128GB Chính Hãng"
            href="/dien-thoai/samsung-galaxy-a14-5g.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/media/catalog/product/s/a/samsung-galaxy-a14-128gb-mau-den-didongviet.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  Samsung Galaxy A14 5G 128GB Chính Hãng
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">4.590.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
          <a
            title="Samsung Galaxy S23 Ultra 5G 256GB Chính Hãng"
            href="/dien-thoai/samsung-galaxy-s23-ultra-5g-256gb.html"
          >
            <div className="my-2 flex items-center justify-start">
              <div className="">
                <img
                  src="https://cdn-v2.didongviet.vn/files/products/2023/4/31/1/1685524083731_samsung_galaxy_s23_ultra_thumb_didongviet_new.jpg"
                  alt="di động việt"
                  width="61"
                  loading="lazy"
                  height="64"
                />
              </div>
              <div className="flex-col items-center justify-start">
                <p className="px-3 text-14 hover:text-ddv">
                  Samsung Galaxy S23 Ultra 5G 256GB Chính Hãng
                </p>
                <div className="flex items-center justify-start">
                  <p className="px-3 text-14 font-medium text-ddv">25.990.000</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
