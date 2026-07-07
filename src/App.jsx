import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Users/Pages/Home";
import AllBooks from "./Users/Pages/Allbooks";
import Contact from "./Users/Pages/Contact";
import Auth from "./Pages/Auth";

import ViewBook from "./Users/Pages/ViewBook";
import Profile from "./Users/Pages/Profile";
import Pnf from "./Pages/Pnf";


import { useState } from "react";
import Preloader from "./Components/Preloader";

import PaymentSuccess from "./Users/Pages/PaymentSuccess";
import PaymentError from "./Users/Pages/PaymentError";

import AdminHome from "./Admin/pages/AdminHome";
import AdminBooks from "./Admin/pages/AdminBooks";
import AdminCareers from "./Admin/pages/AdminCareers";
import AdminSettings from "./Admin/pages/AdminSettings";

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <>
      <Routes>
        {/* Common Route Pages */}
        <Route path="" element={loader ? <Preloader /> : <Home />} />
        <Route path="all-books" element={<AllBooks />} />
        <Route path="contact" element={<Contact />} />

        <Route path="payment-success" element={<PaymentSuccess />} />
        <Route path="payment-error" element={<PaymentError />} />

        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth register />} />

        {/* User */}
        <Route path="view/:id" element={<ViewBook />} />
        <Route path="profile" element={<Profile />} />


<Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-career' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />

        {/* Pnf */}
        <Route path="/*" element={<Pnf />} />
      </Routes>
      <footer />
    </>
  );
}

export default App;
