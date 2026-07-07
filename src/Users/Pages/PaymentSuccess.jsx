import React from "react";
import Header from "../Components/Header";


const PaymentSuccess = () => {
  return (

    <>
<Header/>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6 max-w-6xl mx-auto gap-8">
      {/* Left Column: Text Content */}
      <div className="flex-1 max-w-md font-serif text-left">
        <h1 className="text-3xl md:text-4xl text-[#d91e36] mb-4 font-normal">
          Congratulations
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
          Thankyou for shopping with Bookstore.Hope you have a good time with
          us.
        </p>

        {/* Navigation Button */}
        <button
          onClick={() => (window.location.href = "/books")} // Replace with your router navigation (e.g., useNavigate)
          className="inline-flex items-center justify-center bg-[#1a41bc] text-white font-sans text-sm px-5 py-3 hover:bg-[#133294] transition-colors"
        >
          <span className="mr-2 text-xs">◀◀</span> Explore More books
        </button>
      </div>

      {/* Right Column: Reference Image Display */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"
          alt="Payment Successful Illustration"
          className="w-full h-auto max-w-lg object-contain"
        />
      </div>
    </div>
    </>
  );
};

export default PaymentSuccess;
