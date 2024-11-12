import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../hooks/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";

const SideBarCart = () => {
  const { sideToggle, setSideToggle, handleSideToggle } =
    useContext(AppContext);
  const products = useSelector((state) => state.name);
  const totalPrice = useSelector((state) => state.name.price);
  const totalQuantity = useSelector((state) => state.name.quantity);
  const dispatch = useDispatch();

  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className={`${
        sideToggle
          ? "w-full h-screen fixed top-0 left-0 z-[50] bg-black bg-opacity-50"
          : "hidden"
      }`}>
      <div className="w-full md:w-[70%] lg:w-[25%] h-[90vh] flex flex-col justify-between items-center absolute top-0 right-0 bg-triple pb-3 p-5 rounded-bl-md">
        <div className="w-full flex justify-between items-center flex-col text-primary">
          <div className="flex justify-between items-center w-full mb-3 border-b border-triple pb-3">
            <h1>Shopping Cart</h1>
            <IoMdClose
              size={40}
              onClick={handleSideToggle}
              className="cursor-pointer bg-triple bg-opacity-25 p-3 rounded-full text-black hover:bg-primary hover:text-white"
            />
          </div>

          <div className="w-full overflow-y-scroll">
            {totalQuantity >= 1 ? (
              products.cartItem.map((product, index) => (
                <div
                  className="flex justify-between items-center my-5 pb-3 border-b border-triple"
                  key={index}>
                  <div className="flex items-center gap-3">
                    <img
                      src={product.imgUrl}
                      alt={product.title}
                      className="w-[70px]"
                    />
                    <div>
                      <p className="text-[16px] text-black font-semibold">
                        {product.title}
                      </p>
                      <p className="text-secondary">
                        {product.quantity}{" "}
                        <span className="text-[12px]">X</span> ${product.price}
                      </p>
                    </div>
                  </div>
                  <IoMdClose
                    onClick={() => removeProductFromCart(product.id)}
                    size={40}
                    className="cursor-pointer bg-triple bg-opacity-25 p-3 rounded-full text-black hover:bg-primary hover:text-white"
                  />
                </div>
              ))
            ) : (
              <p>No Product Found</p>
            )}
          </div>
        </div>

        <div className="w-full grid place-items-center">
          <div className="w-full mb-5 border-y border-triple p-5">
            <h1 className="flex justify-between items-center">
              <span className="text-primary">Subtotal:</span>{" "}
              <span className="text-secondary">${totalPrice.toFixed(2)}</span>
            </h1>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <button className="w-full btn">
              <Link to="/cart" onClick={() => setSideToggle(!sideToggle)}>
                VIEW CART
              </Link>
            </button>
            <button className="w-full btn">
              <Link
                to="/payment/checkout"
                onClick={() => setSideToggle(!sideToggle)}>
                CHECKOUT
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarCart;
