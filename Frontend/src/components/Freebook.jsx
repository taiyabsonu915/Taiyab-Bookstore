import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookstorebackend-2ur2.onrender.com/book"
        );
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);

        // Trigger resize to reinitialize slider properly
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 100);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false, // Disable infinite scrolling for better UX
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1, // Scroll one slide at a time
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 overflow-hidden">
      <div className="mb-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p className="text-gray-600">
          Discover free courses to enhance your skills. Start learning today!
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {book.length > 0 ? (
            book.map((item) => <Cards item={item} key={item.id} />)
          ) : (
            <div className="text-center text-gray-500">
              <p>No free courses available at the moment.</p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
