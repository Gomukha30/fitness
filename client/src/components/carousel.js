// import React, { useState } from "react";
// import slide1 from "/Users/sudheshnatadikamalla/Desktop/fitness/src/assets/slide1.png";
// import slide2 from "/Users/sudheshnatadikamalla/Desktop/fitness/src/assets/slide2.png";
// import slide3 from "/Users/sudheshnatadikamalla/Desktop/fitness/src/assets/slide3.png";

// const Carousel = () => {
//   return (
//     <>
//       <div
//         id="indicators-carousel"
//         className="relative w-full"
//         data-carousel="static"
//       >
//         <div className="relative  overflow-clip rounded-lg md:h-96">
//           <div
//             className=" duration-700 ease-in-out"
//             data-carousel-item="active"
//           >
//             <img
//               src={slide1}
//               style={{
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100vw",
//                 height: "100vh",
//               }}
//               alt="firstslide"
//             />
//           </div>
//           <div className="duration-700 ease-in-out" data-carousel-item="active">
//             <img
//               src={slide2}
//               style={{
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100vw",
//                 height: "100vh",
//               }}
//               alt="secondpage"
//             />
//           </div>
//           <div
//             className=" duration-700 ease-in-out"
//             data-carousel-item="active"
//           >
//             <img
//               src={slide3}
//               style={{
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100vw",
//                 height: "100vh",
//               }}
//               alt="thirdpage"
//             />
//           </div>
//         </div>
//         <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="true"
//             aria-label="Slide 1"
//             data-carousel-slide-to="0"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 2"
//             data-carousel-slide-to="1"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 3"
//             data-carousel-slide-to="2"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 4"
//             data-carousel-slide-to="3"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 5"
//             data-carousel-slide-to="4"
//           ></button>
//         </div>
//         <button
//           type="button"
//           className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-prev
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>
//         <button
//           type="button"
//           className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-next
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full h-[680px] relative">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-transform duration-500 ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={slide}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 -translate-x-8 bg-white/30 rounded-full p-2 cursor-pointer focus:outline-none"
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 translate-x-8 bg-white/30 rounded-full p-2 cursor-pointer focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
