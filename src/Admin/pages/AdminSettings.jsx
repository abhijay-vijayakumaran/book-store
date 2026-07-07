import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSIdebar from "../components/AdminSIdebar";

function AdminSettings() {
  return (
    <>
      <AdminHeader />

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <AdminSIdebar />

        {/* Main Content */}
        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Admin Settings
          </h1>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="grid md:grid-cols-3">

              {/* Left Section */}
              <div className="bg-amber-900 text-white flex flex-col items-center justify-center p-8">

                <img
                  src="https://icon-library.com/images/admin-icon-png/admin-icon-png-18.jpg"
                  alt=""
                  className="w-40 h-40 rounded-full border-4 border-white object-cover"
                />

                <h2 className="text-2xl font-bold mt-5">
                  Admin
                </h2>

                <p className="text-amber-100">
                  Administrator
                </p>

                <p className="text-center text-sm mt-6">
                  Update your profile details and password from here.
                </p>

              </div>

              {/* Right Section */}
              <div className="md:col-span-2 p-10 space-y-6">

                <div>
                  <label className="block mb-2 font-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Profile Image
                  </label>

                  <input
                    type="file"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4">

                  <button className="px-6 py-3 rounded-lg bg-gray-400 text-white hover:bg-gray-500">
                    Reset
                  </button>

                  <button className="px-6 py-3 rounded-lg bg-amber-900 text-white hover:bg-amber-800">
                    Update
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default AdminSettings;