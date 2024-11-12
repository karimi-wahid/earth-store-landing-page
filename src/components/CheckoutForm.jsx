import React, { useState } from "react";
import { FaBox } from "react-icons/fa";
import { userSchema } from "../auth/CheckoutForm";
import { useSelector } from "react-redux";
import AlertBox from "./AlertBox";

const CheckoutForm = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [activeAlert, setActiveAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessage2, setAlertMessage2] = useState("");
  const product = useSelector((state) => state.name.cartItem);
  const totalPrice = useSelector((state) => state.name.price);
  const [billData, setBillData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryName: "",
    streetAdd: "",
    apartment: "",
    townCity: "",
    zipCode: "",
    phone: "",
    email: "",
    note: "",
    paymentMethod: "",
    couponCode: "",
  });
  

  const [discount, setDiscount] = useState(0);

  const handleInputVisible = () => {
    setInputVisible(!inputVisible);
  };

  const handleInputValueChange = (e) => {
    const { name, value } = e.target;

    setBillData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    const { couponCode } = billData;

    // Logic for discount on coupon code
    if (couponCode === "DISCOUNT50") {
      setDiscount(50);
      setAlertMessage("Coupon applied: 50% discount");
    } else if (couponCode === "DISCOUNT25") {
      setDiscount(25);
      setAlertMessage("Coupon applied: 25% discount");
    } else if (couponCode === "DISCOUNT75") {
      setDiscount(75);
      setAlertMessage("Coupon applied: 75% discount");
    } else if (couponCode === "DISCOUNT100") {
      setDiscount(100);
      setAlertMessage("Coupon applied: 100% discount");
    } else {
      setDiscount(0);
      setAlertMessage("Invalid coupon code");
    }

    setActiveAlert(true);
    setTimeout(() => setActiveAlert(false), 3000);
  };

  const discountedPrice = (totalPrice * (1 - discount / 100)).toFixed(2);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const isValid = await userSchema.isValid(billData);
  
    if (isValid) {
      // Data is here
      console.log(billData);
      setAlertMessage("Order placed successfully!");
      setAlertMessage2("Thanks for buying our Products!");
      setActiveAlert(true);
  
      setTimeout(() => {
        setActiveAlert(false);
      }, 3000);
    } else {
      setAlertMessage("Please complete the form before placing the order.");
      setActiveAlert(true);
      setTimeout(() => setActiveAlert(false), 3000);
    }
  };

  return (
    <>
    {activeAlert && <AlertBox setActiveAlert={setActiveAlert} label1={alertMessage} label2={alertMessage2} />}

    <section className="grid place-items-center">
      <h1 className="text-2xl mt-10 px-5 w-[80%] font-[600]">Checkout</h1>
      <div className="border-t-2 border-primary bg-triple p-5 my-5 mx-5 w-[80%]">
        <p className="flex items-center">
          <span className="text-primary mr-5">
            <FaBox />
          </span>
          <span className="text-secondary">Have a coupon?</span>
          <span
            className="text-primary cursor-pointer"
            onClick={handleInputVisible}>
            {" "}
            Click here to enter your code
          </span>
        </p>
        <form
          className={`${inputVisible ? "block" : "hidden"} my-5 `}
          onSubmit={handleCouponSubmit}>
          <input
            type="text"
            placeholder="Enter your coupon..."
            name="couponCode"
            className="input"
            onChange={handleInputValueChange}
          />
          <button
            type="submit"
            className="btn">
            Apply
          </button>
        </form>
      </div>
      <form
        className="grid grid-cols-1 lg:grid-cols-3 place-items-center w-[95%]"
        onSubmit={handleFormSubmit}>
        <div className="col-span-2 grid space-y-5 px-5 py-10 w-[90%]">
          <h1 className="font-[600] text-xl border-b border-triple mb-5 w-2/4 py-5">
            Baling Details
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="grid">
              <label htmlFor="firstName">
                First name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="input"
                onChange={handleInputValueChange}
              />
            </div>
            <div className="grid">
              <label htmlFor="lastName">
                Last name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="input"
                onChange={handleInputValueChange}
              />
            </div>
          </div>

          <div className="grid">
            <label htmlFor="companyName">Company name (Optional)</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="input"
              onChange={handleInputValueChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="countryName ">
              Country / Region <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="countryName"
              id="countryName"
              required
              className="input"
              onChange={handleInputValueChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="streetAdd ">
              Street address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="streetAdd"
              id="streetAdd"
              placeholder="House number and street name"
              required
              className="input"
              onChange={handleInputValueChange}
            />
          </div>

          <input
            type="text"
            name="apartment"
            id="streetAdd"
            placeholder="Apartment, suite, unit ,etc. (Optional)"
            className="input"
            onChange={handleInputValueChange}
          />
          <div className="grid">
            <label htmlFor="TownCity">
              Town / City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="townCity"
              required
              id="TownCity"
              className="input"
              onChange={handleInputValueChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="postCode">
              Postcode /ZIP <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              required
              id="postCode"
              className="input"
              onChange={handleInputValueChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="phone"
              required
              id="phone"
              className="input"
              onChange={handleInputValueChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="emailAdd">
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="email"
              required
              id="emailAdd"
              className="input"
              onChange={handleInputValueChange}
            />
          </div>

          <h1 className="font-[600] text-xl border-b border-triple mb-5 w-full lg:w-2/4 py-5">
            Additional information
          </h1>

          <div className="grid">
            <label htmlFor="note">Order notes (optional)</label>
            <textarea
              name="note"
              id="note"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="input w-full lg:w-2/3"
              onChange={handleInputValueChange}></textarea>
          </div>
          <label htmlFor="method">
            Payment Method <span className="text-red-600">*</span>
          </label>
          <select
            name="paymentMethod"
            id="method"
            className="input w-full lg:w-2/5"
            required
            onChange={handleInputValueChange}>
            <option value="cash">On delivery</option>
            <option value="bank">Back payment</option>
          </select>
        </div>

        <div className="col-span-1 border border-secondary p-5 space-y-10 w-[90%] lg:w-full">
          <div className="border-b-4 border-primary w-[95%] space-y-7 pb-5">
            <h1 className="font-[600] mb-5 text-2xl">Your order</h1>
            <p className="font-[600] border-b border-triple flex justify-between items-center pb-3">
              <span>Product</span>
              <span>Subtotal</span>
            </p>
            {product.map((item, index) => (
              <p className="flex justify-between items-center text-secondary border-b border-triple pb-3" key={index}>
                <span>
                  {item.title}{" "}
                  <span className="text-[12px] text-red-600">X </span>
                  {item.quantity}
                </span>
                <span>${item.price}</span>
              </p>
            ))}
            <p className="flex justify-between items-center text-blue-600 border-b border-triple pb-3">
              <span>Total</span>
              <span>
                ${billData.couponCode ? discountedPrice : totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
          <button
            className="btn w-[98%]"
            type="submit">
            Place Order
          </button>
        </div>
      </form>
    </section>
    </>
  );
};

export default CheckoutForm;
