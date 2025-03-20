import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Computer = () => {
  const [books, setBooks] = useState({ Computer: [] });
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [delivery, setDelivery] = useState(() => JSON.parse(localStorage.getItem("delivery")) || []);

  const addToDelivery = (book) => {
     const updatedDelivery = [...delivery, book];
     setDelivery(updatedDelivery);
     localStorage.setItem("delivery", JSON.stringify(updatedDelivery));
   };

  const categories = ["Computer"];

  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const fetchBooksByCategory = async (category) => {
    if (loading) return;
    setLoading(true);

    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${startIndex}&maxResults=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const fetchedBooks = data.items || [];
      setBooks((prevBooks) => ({ ...prevBooks, [category]: [...prevBooks[category], ...fetchedBooks] }));
      setStartIndex((prevIndex) => prevIndex + 20);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    categories.forEach((category) => fetchBooksByCategory(category));
  }, []);

  return (
    <div className="p-5">
      {categories.map((category) => (
        <div key={category} className="mb-8 mt-[10%]">
          <h2 className="text-2xl font-bold mb-4">{category} Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books[category].map((book, index) => (
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
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => fetchBooksByCategory(category)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      ))}

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
              <h2 className="text-2xl font-bold">{selectedBook.volumeInfo.title}</h2>
              <p className="text-gray-600">{selectedBook.volumeInfo.authors?.join(", ")}</p>

              <button
                className={`w-20 px-3 py-2 mt-3 overflow-auto rounded-lg transition ${
                  cart.some((item) => item.id === selectedBook.id) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={cart.some((item) => item.id === selectedBook.id)}
                onClick={() => addToCart(selectedBook)}
              >
                {cart.some((item) => item.id === selectedBook.id) ? "Saved" : "Save"}
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

export default Computer;
