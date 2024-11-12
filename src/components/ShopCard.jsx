import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useState } from "react";
import AlertBox from "./AlertBox";

const ShopCard = ({ filteredData }) => {
  const [activeAlert, setActiveAlert] = useState(false);
  const dispatch = useDispatch();

  const addProductToCart = (poster) => {
    dispatch(addToCart(poster));
    setActiveAlert(true);

    setTimeout(() => {
      setActiveAlert(false);
    }, 2000);
  };

  return (
    <>
      {activeAlert && (
        <AlertBox  setActiveAlert={setActiveAlert} label1={'Product Add'} label2={"Your product has been added to the cart."}/>
      )}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 my-10 z-50">
        {filteredData.map((poster, index) => (
          <div key={index}>
            <Link
              to={`/product/${poster.type.toLowerCase()}/${poster.id}`}
              className="w-full my-3"
            >
              <div className="overflow-hidden w-[95%]">
                <img
                  src={poster.imgUrl}
                  alt={poster.title}
                  className="md:h-[250px] w-[90%] hover:scale-110 duration-200"
                />
              </div>
              <div className="my-2 flex gap-10 lg:block">
                <p className="font-[12px] text-secondary">
                  {poster.type}
                </p>
                <h1 className="font-semibold">{poster.title}</h1>
                <p className="text-secondary">${poster.price}</p>
              </div>
            </Link>
            <button
              onClick={() => addProductToCart(poster)}
              className="btn w-[85%] lg:w-2/3 mb-3"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default ShopCard;