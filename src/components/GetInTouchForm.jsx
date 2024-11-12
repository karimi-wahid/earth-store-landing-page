import React from "react";

const GetInTouchForm = () => {
  return (
    <section className="w-[70%] flex justify-center  flex-col ">
      <h1 className="text-3xl font-[600] my-10">Get In Touch</h1>
      <form className="w-full flex flex-col bg-slate-100 p-5 space-y-5">
        <input
          type="text"
          placeholder="Full name"
          name="fullName"
          required
          className="w-full input"
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="PhoneNo"
          required
          className="w-full input"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          required
          className="w-full input"
        />
        <textarea
          name="msg"
          required
          className="w-full h-40 input"></textarea>
        <button className="btn w-full lg:w-[30%] items-start">
          SEND NOW
        </button>
      </form>
    </section>
  );
};

export default GetInTouchForm;
