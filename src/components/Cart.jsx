import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./itemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setActiveCart(false);
    };
  }, [navigate]);

  return (
    <>
      <div
        style={{backgroundColor:'white'}}
        className={` fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        <div className="overflow-y-auto max-h-[70vh]">
          {cartItems.length > 0 ? (
            cartItems.map((food) => {
              return (
                <ItemCard
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  qty={food.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty
            </h2>
          )}
        </div>

        <div className="absolute bottom-0 w-[90vw] lg:w-[18vw]">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: ${totalPrice.toFixed(2)}
          </h3>
          <hr className="my-2" />
          <button
            className={`bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full mb-5 ${
              cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={true}
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="relative">
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
          } z-40`}
        />
        {totalQty > 0 && (
          <span className="absolute fixed bottom-12 right-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold z-50">
            {totalQty}
          </span>
        )}
      </div>
    </>
  );
};

export default Cart;