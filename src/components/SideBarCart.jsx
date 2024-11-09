import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../hooks/AppContext";

const SideBarCart = () => {
  const { sideToggle, handleSideToggle } = useContext(AppContext);

  return (
    
    <div
      className={`${sideToggle ? "w-full h-screen fixed top-0 left-0 z-[30] bg-black bg-opacity-50" : "hidden"}`}>
      <div className="w-full md:w-[70%] lg:w-[25%] h-[98vh] flex flex-col justify-between items-center absolute top-0 right-0 z-50 bg-neutral-100 pb-3 p-5 rounded-bl-md">
      <div className="w-full flex justify-between items-center flex-col text-green-500">
        <div className="flex justify-between items-center w-full mb-3 border-b border-neutral-600 pb-3">
          <h1>Shopping Cart</h1>
          <IoMdClose
            size={40}
            onClick={handleSideToggle}
            className="cursor-pointer bg-neutral-300 bg-opacity-25 p-3 rounded-full text-black hover:bg-green-600 hover:text-white"
          />
        </div>

        <div className="w-full">
          <p className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-1000x1000.jpg"
                alt=""
                className="w-[70px]"
              />
              <p>
                <p className="text-[16px] text-black font-semibold">Postcard V2</p>
                <p className="text-neutral-600">
                  1 <span className="text-[12px]">X</span> $17.99
                </p>
              </p>
            </div>
            <IoMdClose
              size={40}
              className="cursor-pointer bg-neutral-300 bg-opacity-25 p-3 rounded-full text-black hover:bg-green-600 hover:text-white"
            />
          </p>
        </div>
      </div>

      <div className="w-full grid place-items-center">
        <div className="w-full mb-5 border-y border-neutral-400 p-5">
          <h1 className="flex justify-between items-center">
            <span className="text-green-600">Subtotal:</span>{" "}
            <span className="text-neutral-600">$17.99</span>
          </h1>
        </div>
        <div className="w-full flex justify-between items-center gap-2">
        <button className="w-full px-5 py-2 bg-green-600 hover:bg-green-700 text-white">
          <Link to="/cart">VIEW CART</Link>
        </button>
        <button className="w-full px-5 py-2 bg-green-600 hover:bg-green-700 text-white">
          <Link to="/payment/checkout">CHECKOUT</Link>
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideBarCart;
