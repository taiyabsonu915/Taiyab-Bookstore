import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);


  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [delivery, setDelivery] = useState(() => JSON.parse(localStorage.getItem("delivery")) || []);

  // 🛒 Cart me item add karne ka function
  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // 🛒 Delivery me item add karne ka function
  const addToDelivery = (book) => {
    const updatedDelivery = [...delivery, book];
    setDelivery(updatedDelivery);
    localStorage.setItem("delivery", JSON.stringify(updatedDelivery));
  };

  const fetchBooks = async () => {
    if (loading) return;
    setLoading(true);

    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:Mathematics&maxResults=40&startIndex=${startIndex}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const fetchedBooks = data.items || [];
      const randomizedBooks = [...fetchedBooks].sort(() => Math.random() - 0.5);
      setBooks((prevBooks) => [...prevBooks, ...randomizedBooks]);
      setStartIndex((prevIndex) => prevIndex + 40);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const handleObserver = (entries) => {
      if (entries[0].isIntersecting && !loading) {
        fetchBooks();
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loading]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <div className="p-5 mt-[10%]">
      <h2 className="text-2xl font-bold mb-4">Top Books</h2>
      <Slider {...settings}>
        {books.slice(0, 10).map((book, index) => (
          <div key={index} className="p-2">
            <div
              className="border rounded-lg shadow-md p-4 flex flex-col cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                alt={book.volumeInfo.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2 truncate">{book.volumeInfo.title}</h2>
              <p className="text-gray-600">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
            </div>
          </div>
        ))} 
      </Slider>

      <h2 className="text-2xl font-bold mb-4">All books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md flex flex-col cursor-pointer"
            onClick={() => setSelectedBook(book)}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
              alt={book.volumeInfo.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2 truncate">{book.volumeInfo.title}</h2>
            <p className="text-gray-600">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
          </div>
        ))}
      </div>

      {loading && <p className="text-center w-full">Loading more books...</p>}
      <div ref={loadMoreRef} className="w-full h-10"></div>

      {/* 📌 MODAL WITH SAVE BUTTON */}
      {selectedBook && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg w-full max-w-4xl relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelectedBook(null)}
            >
              ✖
            </button>
           

            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={selectedBook.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                alt={selectedBook.volumeInfo.title}
                className="w-30 h-40 object-cover rounded-md"
              />
            </div>

            <div className="w-full md:w-2/3 p-4">
              <h2 className="text-xl font-bold"> {selectedBook.volumeInfo.title}</h2>
              <p className="text-gray-600">{selectedBook.volumeInfo.authors?.join(", ")}</p>
              <p className="text-black" >Price: {selectedBook.saleInfo?.listPrice?.amount ? `₹${selectedBook.saleInfo.listPrice.amount/10}` : "Not availble, Contact for Price"}</p>


              <button
                className={`w-20 px-3 py-2 mt-3 overflow-auto rounded-lg transition ${
                  cart.some((item) => item.id === selectedBook.id) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={cart.some((item) => item.id === selectedBook.id)}
                onClick={() => addToCart(selectedBook)}
              >
                {cart.some((item) => item.id === selectedBook.id) ? "Saved" : "Save  "}
              </button>
              <button className={`w-30 px-4 py-2 mt-3 overflow-auto rounded-lg md:ml-[100px] ml-[60px] transition ${
                  delivery.some((item) => item.id === selectedBook.id) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={delivery.some((item) => item.id === selectedBook.id)}
                onClick={() => addToDelivery(selectedBook)}
                >
                 
                  {delivery.some((item) => item.id === selectedBook.id) ? "Pending" : " Buy Now  "}
             </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
