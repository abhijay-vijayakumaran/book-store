import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function AdminHeader() {

const handleLogout=()=>{

  sessionStorage.clear()
  window.location.href='/login'

}

  return (
    <div>
      <Navbar
        fluid
        rounded
        className="!bg-amber-950 fixed top-0  left-0 w-full "
      >
        <NavbarBrand href="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/028/247/965/original/stack-of-old-book-png.png"
            className="mr-3 h-6 sm:h-9"
            alt=" Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold !text-amber-100 dark:text-white">
            Story Harbor
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
        
            <Button onClick={handleLogout} className="p-5 text-xl !bg-amber-100 text-amber-950">
              LogOut
              <RiLogoutCircleLine className="text-4xl ms-3" />
            </Button>

          <NavbarToggle />
        </div>
      </Navbar>
      <marquee
        behavior=""
        direction="left"
        className="mt-12 bg-amber-100 pt-5 pb-3 mb-0 "
      >
        Welcome, Admin! You're all set to manage and monitor the system. Let’s
        get to work!
      </marquee>
    </div>
  );
}

export default AdminHeader;
