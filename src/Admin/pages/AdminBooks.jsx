import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSIdebar from "../components/AdminSIdebar";
import {
  bookApprovalAPI,
  bookRejectAPI,
  getAllAdminBooksAPI,
  getAllAdminUsersAPI,
} from "../../services/allAPIs";

import { CheckCircle, XCircle } from "lucide-react";

function AdminBooks() {
  const [activeTab, setActiveTab] = useState("books");

  const [token, setToken] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  //admin Status
  const [clickStatus, setClickStatus] = useState(false);

  //books
  const getBooks = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await getAllAdminBooksAPI(reqHeader);
      console.log(response);

      if (response.status === 200) {
        setAllBooks(response.data.allBooks);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  //Approve handling
  const handleApproval = async (item) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await bookApprovalAPI(item, reqHeader);
      console.log(response);
      setClickStatus(true);
      getBooks();
      // console.log("jsjakd");
    } catch (err) {
      console.log("Error", err);
    }
  };

  //Reject handling
  const handleReject = async (item) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await bookRejectAPI(item, reqHeader);
      console.log(response);

      getBooks();
      // console.log("jsjakd");
    } catch (err) {
      console.log("Error", err);
    }
  };

  //users
  const getUsers = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await getAllAdminUsersAPI(reqHeader);
      console.log(response);

      if (response.status === 200) {
        setAllUsers(response.data.getUser);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, [token]);

  useEffect(() => {
    if (token) {
      getBooks();
      getUsers();
    }
  }, [token]);

  return (
    <>
      <AdminHeader />

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <AdminSIdebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Admin Books</h1>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-xl shadow-lg p-1 flex">
              <button
                onClick={() => setActiveTab("books")}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  activeTab === "books"
                    ? "bg-amber-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                📚 Book List
              </button>

              <button
                onClick={() => setActiveTab("users")}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  activeTab === "users"
                    ? "bg-amber-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                👤 Users
              </button>
            </div>
          </div>

          {/* BOOKS */}
          {activeTab === "books" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allBooks?.length > 0
                ? allBooks.map((item) => (
                    <div className="bg-white rounded-xl shadow-lg p-5">
                      <img
                        src={item.imageUrl}
                        className="w-full h-64 object-cover rounded-lg"
                        alt=""
                      />

                      <h2 className="text-xl font-bold mt-4">{item.title}</h2>

                      <p className="text-gray-500">{item.author}</p>

                      <p className="text-green-600 font-bold text-2xl mt-2">
                        $ {item.price}
                      </p>

                      {item.status == "pending" && (
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleApproval(item)}
                            className="flex items-center gap-1 rounded-lg bg-green-600 p-2 text-white hover:bg-green-700 transition"
                          >
                            <CheckCircle size={20} />
                            Approve
                          </button>

                          <button
                            onClick={() => handleReject(item)}
                            className="flex items-center gap-1 rounded-lg bg-red-600 p-2  text-white hover:bg-red-700 transition"
                          >
                            <XCircle size={20} />
                            Reject
                          </button>
                        </div>
                      )}
                      {item.status == "Approved" && (
                        <div className="flex gap-3">
                          <button className="flex items-center gap-1 rounded-lg bg-green-600 p-2 text-white hover:bg-green-700 transition">
                            <CheckCircle size={20} />
                            Approve
                          </button>
                        </div>
                      )}
                      {item.status == "Rejected" && (
                        <div className="flex gap-3">
                          <button className="flex items-center gap-1 rounded-lg bg-red-600 p-2  text-white hover:bg-red-700 transition">
                            <XCircle size={20} />
                            Reject
                          </button>
                        </div>
                      )}
                      {item.status == "sold" && (
                        <div className="flex gap-3">
                          <button className="flex items-center gap-1 rounded-lg bg-black p-2  text-white">
                            <XCircle size={20} />
                            Sold Out
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                : "no books"}

              {/* 
              <div className="bg-white rounded-xl shadow-lg p-5 opacity-70">
                <img
                  src="https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
                  className="w-full h-64 object-cover rounded-lg"
                  alt=""
                />

                <h2 className="text-xl font-bold mt-4">Rich Dad Poor Dad</h2>

                <p className="text-gray-500">Robert Kiyosaki</p>

                <p className="text-red-600 font-bold text-2xl mt-2">₹450</p>

                <div className="mt-5 text-center">
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    Approved
                  </span>
                </div>
              </div> */}
            </div>
          )}

          {/* USERS */}
          {activeTab === "users" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allUsers?.length > 0
                ? allUsers.map((item) => (
                    <div className="bg-white rounded-xl shadow-lg p-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.imageUrl}
                          className="w-16 h-16 rounded-full"
                          alt=""
                        />

                        <div>
                          <h2 className="font-bold text-xl">{item.username}</h2>

                          <p className="text-gray-500">{item.email}</p>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <p>
                        <span className="font-semibold">User ID :</span>
                        {item._id}
                      </p>

                      <p className="mt-2">
                        <span className="font-semibold">{item.role}</span>
                        User
                      </p>

                      <p className="mt-2">
                        <span className="font-semibold">Status :</span>

                        <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          Active
                        </span>
                      </p>
                    </div>
                  ))
                : "no Users"}

              {/* <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className="w-16 h-16 rounded-full"
                    alt=""
                  />

                  <div>
                    <h2 className="font-bold text-xl">Emma Watson</h2>

                    <p className="text-gray-500">emma@gmail.com</p>
                  </div>
                </div>

                <hr className="my-4" />

                <p>
                  <span className="font-semibold">User ID :</span>
                  789654
                </p>

                <p className="mt-2">
                  <span className="font-semibold">Role :</span>
                  User
                </p>

                <p className="mt-2">
                  <span className="font-semibold">Status :</span>

                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Active
                  </span>
                </p>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminBooks;
