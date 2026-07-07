import React, { useEffect } from "react";
import Header from "../Components/Header";
import { FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";

import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { makePaymentAPI, viewABookAPI } from "../../services/allAPIs";

import { loadStripe } from "@stripe/stripe-js";

function ViewBook() {
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();

  const [book, setBook] = useState({});

  const [token, setToken] = useState("");

  const getABook = async (id) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await viewABookAPI(id, reqHeader);

      console.log(response);

      setBook(response.data.books);
    } catch (err) {
      console.log("Error" + err);
    }
  };

  const handlePayment = async () => {
    console.log(book);

    //KEY FROM STRIPE WEBSITE
    const stripe = await loadStripe(
      "pk_test_51TogVDCxyBxovFXvPgkZoKkHFNOnZ3Cesbgnmp8qB6uZLTSbWgMILHyraCWDubELbOrx5E9dTjo3c18e0PijciFO00qyICQH84",
    );
    console.log(stripe);

     const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const reqBody={
      bookDetails:book
    }

    try{

      const response=await makePaymentAPI(reqBody,reqHeader)
      console.log(response)

      window.location.href=response.data.url
      
    }catch(err){
      console.log(err)
    }

  };

  //get the token first
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  //then fetch a book when the token is present
  useEffect(() => {
    getABook(id);
  }, [token]);

  return (
    <>
      <Header />

      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className="w-full" src={book.imageUrl} alt="book" />
            </div>
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h1 className="text-xl font-bold">{book.title}</h1>
                <button
                  className="text-grey-400"
                  onClick={() => setOpenModal(true)}
                >
                  <FaEye />
                </button>
              </div>

              <p className="my-3 text-blue-700">{book.author}</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : {book.publisher}</p>
                <p className="font-bold">Language : {book.language}</p>
                <p className="font-bold">No. of Pages : {book.noofpages}</p>
                <p className="font-bold">Seller Mail : {book.userMail}</p>
                <p className="font-bold">Real Price : {book.price}</p>
                <p className="font-bold">ISBN : {book.isbn}</p>
                <p className="font-bold">Category : {book.category}</p>
              </div>

              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">{book.abstract}</p>
              </div>
              <div className="flex justify-end items">
                <Link
                  to={"/all-books"}
                  className="bg-blue-900 text-white p-2 rounded"
                >
                  <IoChevronBack />
                </Link>
                <button
                  onClick={handlePayment}
                  className="bg-green-900 text-white p-2 ms-5 rounded"
                >
                  Buy ${book.dprice}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Book Details</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <div className="flex">
              <p className="text-blue-600">
                <CiCamera className="me-2" />
                Camera Click of the book in the hand of seller
              </p>
            </div>

            <div className="md:flex flex-wrap my-4 overflow-y-auto">
              {book?.uploadedImages?.length > 0
                ? book?.uploadedImages?.map((item) => (
                    // Duplicate Images
                    <img
                      width={"250px"}
                      height={"250px"}
                      className="mx-2 md:mb-0 mb-2"
                      src={item}
                    />
                  ))
                : "No Preview"}
            </div>
          </div>
        </ModalBody>
      </Modal>

      {/* <footer/> */}
    </>
  );
}

export default ViewBook;
