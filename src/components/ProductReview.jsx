import React, { useState } from "react";

const ProductReview = ({ title }) => {
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setReviewData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(reviewData);
  };

  return (
    <div className="text-secondary mt-5">
      <h1>There are no reviews yet</h1>
      <form
        onSubmit={handleFormSubmit}
        className="border border-triple w-[100%] lg:p-5 space-y-3">
        <p className="text-xl">Be the first to review "{title}"</p>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div>
          <p>Your review *</p>
          <textarea
            className="w-full lg:w-2/3 h-20 input"
            name="review"
            onChange={handleInputChange}
            required></textarea>
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="w-full lg:w-2/4 block">
            <label htmlFor="">Name *</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              required
              className="w-full input"
            />
          </div>
          <div className="w-full lg:w-2/4 block">
            <label htmlFor="">Email *</label>
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              required
              className="w-full input"
            />
          </div>
        </div>

        <p>
          <input type="checkbox" /> Save my name, email, and website in this
          browser for the next time I comment.
        </p>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductReview;
