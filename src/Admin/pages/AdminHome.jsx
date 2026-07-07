import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSIdebar from "../components/AdminSIdebar";

function AdminHome() {
  return (
    <>
      <AdminHeader />

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <AdminSIdebar />

        {/* Main Content */}
        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Dashboard
          </h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
              <p className="text-lg font-medium">📚 Total Books</p>
              <h2 className="text-4xl font-bold mt-4">100+</h2>
            </div>

            <div className="bg-red-500 text-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
              <p className="text-lg font-medium">👥 Total Users</p>
              <h2 className="text-4xl font-bold mt-4">100+</h2>
            </div>

            <div className="bg-yellow-500 text-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
              <p className="text-lg font-medium">👨‍💼 Total Employees</p>
              <h2 className="text-4xl font-bold mt-4">25</h2>
            </div>

            <div className="bg-green-600 text-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
              <p className="text-lg font-medium">💰 Revenue</p>
              <h2 className="text-4xl font-bold mt-4">$15,000</h2>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default AdminHome;