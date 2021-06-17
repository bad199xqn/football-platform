import { useEffect, useState } from "react";

import "./home.css";
import CardsCarousel from "../../components/CardsCarousel";
import germany from "../../assets/images/country/germany.png";
import italy from "../../assets/images/country/italy.png";
import FooterBanner from "../../assets/images/euro-banner.jpg";
import banner from "../../assets/images/banner.png";

const Home = (props) => {
  const lich_dau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      if (totalScroll > 700) {
        setIsFooter(true);
        window.removeEventListener("scroll", progressBarHandler);
      }
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  }, []);

  return (
    <>
      <div className="home-page bg-gradient-to-r from-gray-400 via-blue-200 to-gray-200 ">
        {/* <div className="topnav">
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#" style={{ float: "right" }}>
            Link
          </a>
        </div> */}

        <div className="row pt-24">
          <div className="leftcolumn">
            <div className="header shadow-2xl mb-16">
              {/* <h2 className="text-4xl mb-6 font-bold">Xu hướng dự đoán tỷ số</h2>
              <p>Tổng hợp từ các trang soi kèo uy tín nhất</p> */}
              <div className="relative">
                <img src={banner} className="object-contain rounded-md"></img>
                <div
                  className="absolute w-2/3 top-2 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12 sm:w-full"
                  style={{ zIndex: 10 }}
                >
                  <h2 className="text-xl mb-1 font-bold text-gray-200 sm:mb-4 sm:text-3xl md:text-4xl">
                    Xu hướng dự đoán tỷ số
                  </h2>
                  <p className="sm:text-base md:text-xl text-sm text-gray-200">
                    Tổng hợp từ các trang soi kèo uy tín nhất
                  </p>
                </div>
              </div>
            </div>

            <CardsCarousel />

            <div className="home-card mt-12 mb-16" id="news-card">
              <h3 className="text-xl mb-6 text-left font-bold">
                Tin Euro tổng hợp
              </h3>
              {lich_dau.map((item, key) => {
                return (
                  <>
                    <div className="mb-3 p-4">
                      <p className="text-left mb-3 font-semibold">
                        Kết quả bóng đá Euro 2021 hôm nay 15/06: Ông lớn gây
                        thất vọng
                      </p>
                      <p className="text-left text-gray-500 m-0">
                        Cập nhật kết quả bóng đá Euro 2021 hôm nay ngày 15/06,
                        trong đó rất đáng chú ý khi những ông lớn như Tây Ban
                        Nha, Bồ Đào Nha và Pháp đều ra trận.
                      </p>
                      <div
                        className="text-left mt-3"
                        style={{ marginLeft: "-16px" }}
                      >
                        <button className="mr-2 hover:bg-gray-100 active:bg-gray-200 py-1 round-xl font-semibold text-gray-500 w-32">
                          <i className="fas fa-search mr-2"></i>Khám phá
                        </button>
                        <button className="hover:bg-gray-100 active:bg-gray-200 py-1 round-xl font-semibold text-gray-500 w-32">
                          <i className="fas fa-share mr-2"></i>Chia sẻ
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>

                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>

                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="home-card">
              <h3 className="text-xl mb-6 text-left font-bold">
                Lịch thi đấu hôm nay
              </h3>
              {lich_dau.map((item, key) => {
                const isWhite = key % 2 === 1 ? true : false;
                return isWhite ? (
                  <div className="h-28 w-full ">
                    <div>
                      <div className="flex justify-between items-center p-6">
                        <div className="flex flex-col items-center">
                          <img
                            className="rounded-full h-8 w-8 flex items-center justify-center p-1 shadow-lg mb-2 bg-white"
                            src={germany}
                          ></img>
                          <p className="m-0 font-semibold">Đức</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="m-0 font-semibold">17:00</p>
                          <div className="h-1 w-6 bg-purple-600"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            className="rounded-full h-8 w-8 flex items-center justify-center shadow-lg bg-white p-1 mb-2"
                            src={italy}
                          ></img>
                          <p className="m-0 font-semibold">Italy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-28 w-full bg-indigo-50">
                    <div>
                      <div className="flex justify-between items-center p-6">
                        <div className="flex flex-col items-center">
                          <img
                            className="rounded-full h-8 w-8 flex items-center justify-center p-1 shadow-lg mb-2"
                            src={germany}
                          ></img>
                          <p className="m-0 font-semibold">Đức</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="m-0 font-semibold">17:00</p>
                          <div className="h-1 w-6 bg-purple-600"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            className="rounded-full h-8 w-8 flex items-center justify-center shadow-lg  p-1 mb-2"
                            src={italy}
                          ></img>
                          <p className="m-0 font-semibold">Italy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`${isFooter ? null : "hidden"} footer `}>
          <div className="relative">
            <img src={FooterBanner} className="object-contain"></img>
            <div
              className="absolute w-2/3 sm:top-4 sm:left-4 lg:top-12 lg:left-12 left-3 top-1.5 flex flex-col sm:flex-row md:w-full"
              style={{ zIndex: 10 }}
            >
              <h2 className=" text-md font-semibold text-gray-500 sm:text-xl md:text-2xl lg:text-3xl">
                {`Theo dõi tin Euro 2020 qua\xa0`}
              </h2>
              <div className="flex">
                <h2 className="font-semibold text-blue-600 text-md sm:text-xl md:text-2xl lg:text-3xl">{`Telegram,`}</h2>
                <h2 className="font-semibold text-purple-600 text-md sm:text-xl md:text-2xl lg:text-3xl">{`\xa0Viber`}</h2>
              </div>
            </div>
            <div className="absolute top-0.5 right-2" style={{ zIndex: 10 }}>
              <button
                className="font-semibold text-gray-100 text-xl"
                onClick={() => setIsFooter(false)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
