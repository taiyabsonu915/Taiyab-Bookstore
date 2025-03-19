import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // Cart se item remove karne ka function
  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.id !== selectedBook.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setShowModal(false);
    setSelectedBook(null);
  };

  const confirmRemove = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="p-5 md:mt-20 mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-5xl">Your cart is empty at the moment.....</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((book, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md flex flex-col">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                alt={book.volumeInfo.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{book.volumeInfo.title}</h2>
              <p className="text-gray-600">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>

              {/* Remove & Buy Now Buttons */}
              <div className="flex flex-row space-x-10">
                <button
                  className="ml-5 bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600 transition"
                  onClick={() => confirmRemove(book)}
                >
                  Remove
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-black ">Are you sure?</h2>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={removeFromCart}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
