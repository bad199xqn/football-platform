import { useEffect, useState } from "react";

import "./CardsCarousel.css";

import germany from "../../assets/images/country/germany.png";
import italy from "../../assets/images/country/italy.png";

const CardsCarousel = (props) => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);

  const scrollLeft = (e) => {
    document.querySelector("#box-wrapper").scrollBy({
      left: e,
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollRight = (e) => {
    document.querySelector("#box-wrapper").scrollBy({
      left: e,
      top: 0,
      behavior: "smooth",
    });
  };

  const startSwipe = (position) => {
    setIsMouseDown(true);
    setStartPosition(position);
  }

  const mouseMove = (position) => {
    if (isMouseDown) {
      // setEndPosition(position)
      scrollLeft(startPosition - position)
      
    }

    
  }

  const endSwipe = (position) => {
    // console.log('end')
    setIsMouseDown(false)
    setStartPosition(0);
    setEndPosition(0);
  }

  useEffect(() => {
    window.addEventListener("mouseup", (e) => {
      endSwipe();
      });
    

    return () => {
  
      document.getElementById("box").removeEventListener("mouseup",);
    };
  }, []);

  useEffect(() => {
  
  }, [endPosition, isMouseDown])

  return (
    <>
      <div id="box" className="relative " 
      onMouseDown={(e) => startSwipe(e.nativeEvent.screenX)}
      onMouseMove={(e) => mouseMove(e.nativeEvent.screenX)}
      onMouseUp={(e) => endSwipe(e)}
      onTouchStart={(e) => startSwipe(e.nativeEvent.changedTouches[0].screenX)}
      onTouchMove={(e) => mouseMove(e.nativeEvent.changedTouches[0].screenX)}
      onTouchEnd={(e) => endSwipe(e)}
      >
        <ul id="box-wrapper">
          {data.map((item) => (
            <li id="box-item">
              <div
                className="w-72  bg-white p-5 rounded-md shadow-lg"
                
              >
                <div className="flex flex-row">
                  <div className="bg-blue-100 w-auto inline-block px-2 items-start rounded-md">
                    <div className="flex flex-row">
                    <p className="mb-0 font-bold text-purple-600">Thứ 2</p>
                    <p className="mb-0">{`\xa015-6`}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row justify-between items-center p-6">
                    {/* <div className="flex flex-row mb-2 items-center">
                      <img
                        className="rounded-full h-8 w-8 flex items-center justify-center p-1 shadow-lg mr-4"
                        src={germany}
                      ></img>
                      <p className="m-0 font-semibold">Đức</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img
                        className="rounded-full h-8 w-8 flex items-center justify-center shadow-lg mr-4 p-1"
                        src={italy}
                      ></img>
                      <p className="m-0 font-semibold">Italy</p>
                    </div> */}
                                        <div className="flex flex-col items-center w-14">
                      <img
                        className="rounded-full h-8 w-8 flex items-center justify-center p-1 shadow-lg mb-2"
                        src={germany}
                        onMouseUpCapture={(e) => endSwipe(e)}
                      ></img>
                      <p className="m-0 font-semibold">Ba lan</p>
                    </div>
                    <div className="flex flex-col items-center">
            
                      <p className="m-0 font-semibold mb-4">17:00</p>
                      <p className="m-0 font-semibold text-gray-400">VS</p>
                    </div>
                    <div className="flex flex-col items-center w-14">
                      <img
                        className="rounded-full h-8 w-8 flex items-center justify-center shadow-lg  p-1 mb-2"
                        src={italy}
                        onMouseUpCapture={(e) => endSwipe(e)}
                      ></img>
                      <p className="m-0 font-semibold">Italy</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="bg-indigo-50 w-full h-8 flex flex-row justify-between items-center px-2">
                        <div className="w-2/3">
                          <p className="m-0 font-semibold">1 - 0</p>
                        </div>
                        <div className="w-1/3">
                          <div className="border-l-2 border-fuchsia-600">
                            <a href="#" className="m-0 text-sm text-blue-500">1 kết quả</a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-8 flex flex-row justify-between items-center px-2">
                        <div className="w-2/3">
                          <p className="m-0 font-semibold">1 - 0</p>
                        </div>
                        <div className="w-1/3">
                          <div className="border-l-2 border-fuchsia-600">
                            <a href="#" className="m-0 text-sm text-blue-500">1 kết quả</a>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 w-full h-8 flex flex-row justify-between items-center px-2">
                        <div className="w-2/3">
                          <p className="m-0 font-semibold">1 - 0</p>
                        </div>
                        <div className="w-1/3">
                          <div className="border-l-2 border-fuchsia-600">
                            <a href="#" className="m-0 text-sm text-blue-500">1 kết quả</a>
                            
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-8 flex flex-row justify-between items-center px-2">
                        <div className="w-2/3">
                          <p className="m-0 font-semibold">1 - 0</p>
                        </div>
                        <div className="w-1/3">
                          <div className="border-l-2 border-fuchsia-600">
                            <a href="#" className="m-0 text-sm text-blue-500">1 kết quả</a>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 w-full h-8 flex flex-row justify-between items-center px-2">
                        <div className="w-2/3">
                          <p className="m-0 font-semibold">1 - 0</p>
                        </div>
                        <div className="w-1/3">
                          <div className="border-l-2 border-fuchsia-600">
                            <a href="#" className="m-0 text-sm text-blue-500">1 kết quả</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button
          class="scroll-left btn btn-circle btn-sm d-flex align-items-center justify-content-center"
          id="scroll-left"
          onClick={() => scrollLeft(-336)}
          // style={{ backgroundColor: "lightblue" }}
        >
          <i className="fas fa-chevron-left text-white"></i>
        </button>
        <button
          class=" scroll-right btn btn-circle btn-sm d-flex align-items-center justify-content-center"
          id="scroll-right"
          onClick={() => scrollRight(336)}
          // style={{ backgroundColor: "lightblue" }}
        >
          <i className="fas fa-chevron-right text-white"></i>
        </button>
      </div>
      <div
        className="d-flex justify-content-between align-items-center pt-2 pb-2"
        id="copy-link"
      >
        <p className="m-0">{props.url}</p>
        <i
          className="bx bx-copy font-size-16"
          style={{ cursor: "pointer" }}
          onClick={() => props.copy(props.url)}
        ></i>
      </div>
    </>
  );
};

export default CardsCarousel;
