import React, { useEffect, useState, useCallback } from "react";
import Books from "../books"; // Assuming Books is an object containing categories and their books.

function Search() {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState({});
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [delivery, setDelivery] = useState(() => JSON.parse(localStorage.getItem("delivery")) || []);

  const addToDelivery = (book) => {
     const updatedDelivery = [...delivery, book];
     setDelivery(updatedDelivery);
     localStorage.setItem("delivery", JSON.stringify(updatedDelivery));
   };

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const fetchBooksByCategory = async (category) => {
    if (loading) return;
    setLoading(true);

    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const fetchedBooks = data.items || [];
      setBooks((prevBooks) => ({
        ...prevBooks,
        [category]: fetchedBooks,
      }));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  const handleSearch = useCallback(() => {
    if (searchBook.trim() !== "") {
      // Check if the category exists in Books
      if (Books[searchBook]) {
        setBooks((prevBooks) => ({
          ...prevBooks,
          [searchBook]: Books[searchBook],
        }));
      } else {
        fetchBooksByCategory(searchBook);
      }
    }
  }, [searchBook]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchBook.trim() !== "") {
      // If there's an existing search, reset books to an empty object
      setBooks({});
    }
  }, [searchBook]);

  return (
    <>
      <div className="max-w-screen-2xl flex container mx-auto md:px-20 px-4 mt-10 md:mt-[8%] fixed z-20">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-full outline-none shadow-md dark:bg-slate-900 dark:text-white pr-10"
            placeholder="Search for books..."
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-5">
        {Object.keys(books).length === 0 && searchBook.trim() !== "" && !loading && (
          <p className="text-red-500 text-center mt-4"></p>
        )}

        {Object.keys(books).map((category) => (
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
      </div>

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
                className={`w-30 px-4 py-2 mt-3 overflow-auto rounded-lg transition ${
                  cart.some((item) => item.id === selectedBook.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={cart.some((item) => item.id === selectedBook.id)}
                onClick={() => addToCart(selectedBook)}
              >
                {cart.some((item) => item.id === selectedBook.id) ? "Saved" : "Save"}
              </button>
              <button className={`w-30 px-4 py-2 mt-3 overflow-auto rounded-lg md:ml-[100px] ml-[80px] transition ${
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
    </>
  );
}

export default Search;
