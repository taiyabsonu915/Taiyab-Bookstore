import React, { useEffect, useState } from 'react'

function Delivery() {
  const [delivery, setDelivery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    setDelivery(JSON.parse(localStorage.getItem("delivery")) || []);
  }, []);

  // ❌ Cart se item remove karne ka function
  const removeFromDelivery = () => {
    const updatedDelivery = delivery.filter((item) => item.id !== selectedBook.id);
    setDelivery(updatedDelivery);
    localStorage.setItem("delivery", JSON.stringify(updatedDelivery));
    setShowModal(false);
  };

  return (
<div className="p-5 md:mt-20 mt-20">
  <h2 className="text-2xl font-bold mb-4">Your Delivery</h2>

  {delivery.length === 0 ? (
    <p className="text-gray-500 text-5xl">Your Delivery is empty at the moment.....</p>
  ) : (
    <div className="space-y-4">
      {delivery.map((book, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-md max-w-4xl mx-auto">
          {/* Left: Image */}
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
            alt={book.volumeInfo.title}
            className="w-32 h-32 object-cover rounded-md"
          />

          {/* Middle: Title, Author, and ID */}
          <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex-grow text-center md:text-left">
            <h2 className="text-lg font-semibold break-words">{book.volumeInfo.title}</h2>
            <p className="text-gray-600 break-words">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
            <p className="text-sm text-gray-500">ID: {book.id || "N/A"}</p>
          </div>

          {/* Right: Buttons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              className="text-white px-4 py-2 rounded-lg bg-gray-400 cursor-not-allowed"
              disabled
            >
              Pending
            </button>
            <button
              className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              onClick={() => {
                setSelectedBook(book);
                setShowModal(true);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  )}

  {showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-black font-semibold mb-4">Are you sure you want to cancel this delivery?</h2>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowModal(false)}
          >
            No
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={removeFromDelivery}
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  )}
</div>


  )
}

export default Delivery
