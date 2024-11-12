import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantityCart } from "../redux/CartSlice";

const Cart = () => {
  const product = useSelector((state) => state.name.cartItem);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.name.quantity);

  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantityCart({ id, quantity }));
  };

  return (
    <div className="flex items-center justify-center my-10 px-1 lg:px-5">
      <div className="w-full lg:w-[90%] bg-neutral-50">
        <h1 className="text-xl font-semibold">Cart Lists</h1>
        <ul className="w-full lg:p-5 pl-1">
          <li className="grid grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-5 p-3  w-full font-semibold border border-triple">
            <div></div>
            <p>Product</p>
            <p>Price</p>
            <p className="hidden lg:block">Quantity</p>
            <p className="hidden lg:block">Subtotal</p>
          </li>
          {totalQuantity >= 1 ? (
            product.map((item, index) => (
              <li
                className="grid grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-5 w-full py-5 border-b border-triple"
                key={index}>
                <div className="flex items-center gap-10">
                  <p
                    className="w-[30px] h-[30px] bg-triple rounded-full flex items-center justify-center hover:scale-110 cursor-pointer"
                    onClick={() => removeProductFromCart(item.id)}>
                    X
                  </p>
                  <img src={item.imgUrl} alt="products" className="w-20 h-16 lg:w-30 lg:h-24 pr-2" />
                </div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="border-triple border rounded-md w-20 h-8 outline-none px-2 hidden lg:block"
                  disabled={item.quantity == 0}
                />
                <p className="hidden lg:block">
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))
          ) : (
            <p>No Product Found</p>
          )}

          <li className="mt-5 flex items-center justify-center">
            {totalQuantity >= 1 ? (
              <button className="w-full md:w-2/4 lg:w-2/6 btn">
                <Link to="/payment/checkout">Proceed to Checkout</Link>
              </button>
            ) : (
              <button className="w-full md:w-2/4 lg:w-2/6 btn">
                <Link to="/shop">Go to Shop</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
