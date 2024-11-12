import React, { useState } from "react";
import RelatedProducts from "./RelatedProducts";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantityCart } from "../redux/CartSlice";
import AlertBox from "./AlertBox";

const SingleProduct = ({
  data,
  filteredData,
  id,
  type,
  postDesc,
  paperDesc,
}) => {
  const [active, setActive] = useState(true);
  const [activeAlert, setActiveAlert] = useState(false);
  const quantity = useSelector((state) => state.name.quantity)
  const filteredType = data.filter((item) => item.type.toLowerCase() == type);

  const selectedItem = filteredData[0];
  const title = selectedItem ? selectedItem.title : "";
  const dispatch = useDispatch();

  const addProductToCart = (item) => {
    dispatch(addToCart(item));
    setActiveAlert(true)

    setTimeout(() => {
      setActiveAlert(false)
    }, 2000);
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantityCart({ id, quantity }));
  };

  return (
    <>
    {activeAlert && (
    <AlertBox setActiveAlert={setActiveAlert} label1={"Product Add"} label2={"Your product has been added to the cart."} />
  )}
      <div className="w-full">
        {filteredData.map((item) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 place-items-center"
            key={item.id}>
            <div>
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-[500px] h-[340px]"
              />
            </div>

            <div className="space-y-5">
              <p className="text-primary">{item.type}</p>
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="font-semibold">$ {item.price}</p>
              <p className="text-secondary">{item.aboutText}</p>
              <div className="border-b-2 border-primary pb-5 w-[80%]">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="input mr-1"  
                />
                <button
                  className="btn"
                  onClick={() => addProductToCart(item)}>
                  Add To Cart
                </button>
              </div>
              <p>
                Category : <span className="text-primary">{item.type}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full my-12 px-10">
        <div className="flex items-center gap-5 font-semibold mb-10">
          <h1
            onClick={() => setActive(true)}
            className={`${
              active ? "border-t-2 text-primary" : "border-none"
            } border-primary cursor-pointer`}>
            Description
          </h1>
          <h1
            onClick={() => setActive(false)}
            className={`${
              active ? "border-none" : "border-t-2 text-primary"
            } border-primary cursor-pointer`}>
            Reviews (0)
          </h1>
        </div>
        {active ? (
          <ProductDescription postDesc={postDesc} paperDesc={paperDesc} />
        ) : (
          <ProductReview title={title} />
        )}

        <RelatedProducts filteredType={filteredType} id={id} />
      </div>
    </>
  );
};

export default SingleProduct;
