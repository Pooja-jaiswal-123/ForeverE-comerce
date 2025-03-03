import React from "react";

export const NewsletterBox = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        tenetur ratione libero commodi error veniam ducimus!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg"
      >
        <input
          className="w-full sm:flex-1 outline-none p-3 rounded-md focus:ring focus:ring-gray-300"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-md hover:bg-gray-800 transition duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
