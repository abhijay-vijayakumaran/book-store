import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter, CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { useState } from 'react';



function Header() {

  const [listStatus, setListStatus] = useState(false)
  const [dropDown, setDropDown] = useState(false)


  //Create a state for the token
  const [token, setToken] = useState('')
  useEffect(() => {
    setToken(sessionStorage.getItem("token"))

  }, [token])

  //token assign and consoled it to check if it works
  console.log(token)


  const handleLogout=()=>{

  sessionStorage.clear()
  window.location.href='/login'

}

  return (
    <>

      <div className="grid grid-cols-3 p-3">

        {/* Logo */}
        <div className="flex items-center">

          <img width={"50px"} height={"50%"} src="https://png.pngtree.com/png-vector/20191017/ourmid/pngtree-book-icon-png-image_1820088.jpg" alt="Logo" />
          <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>

        </div>

        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>

        {/* Login block */}
        <div className="md:flex justify-end items-center hidden">

          <FaInstagram className="m-2" />
          <CiTwitter className="m-2" />
          <FaFacebookF className="m-2" />




          {/* Token condition according to login using sessiontoken */}
          {token ? <div>

            <div className="relative inline-block text-left">

              <button onClick={() => setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow-xs hove:bg-gray-50">
                <img width={"40px"} height={"40px"} style={{ borderRadius: '50%' }} className="mx-2" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
              </button>

              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">

                {dropDown && <div className="py-1">
                  <Link className="block px-4 py-2 text-sm text-gray-700" to={"/profile"}>Profile</Link>
                  <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700">Logout</button>
                </div>}

              </div>
            </div>

          </div>
            : <div>
              {/* Login Link */}
              <Link to={"/login"}>
                <button className="border border-black flex rounded px-3 py-2 ms-3 hover:bg-black hover:text-white"><CiUser />Login</button>
              </Link>
            </div>

          }





        </div>
      </div >
      <nav className="w-full p-3 bg-black text-white md:flex justify-center items-center">

        {/* menubar & login */}
        <div className="flex justify-between items-center text-2xl md:hidden text-white">
          <button  ><FaBarsProgress onClick={() => setListStatus(!listStatus)} className='text-white' /></button>



          {/* Token condition according to login using sessiontoken */}

          {token ? <div>

            {/* user section */}
            <div className="relative inline-block text-left">
              <button className="w-full  px-3 py-2 bg-gray-500 shadow-xs hover:bg-gray-50 rounded">
                <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} className="mx-2" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
              </button>
              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                <div className="py-1">
                  <Link className="block px-4 py-2 text-sm text-gray-700" to={'/user/profile'}> Profile </Link>
                  <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700"> Logout</button>
                </div>
              </div>
            </div>

          </div>

            :
            <div>

              {/* login link */}
              <Link to={"/login"}>
                <button className="border border-black  rounded px-3 py-2 ms-3 hover:bg-black hover:text-white">
                  <CiUser /> Login
                </button>
              </Link>

            </div>
          }




        </div>

        <ul className={listStatus ? "flex flex-col" : "md:flex justify-center items-center hidden"}>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/'} >HOME</Link></li>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/all-books'} >BOOKS</Link></li>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/careers'} >CAREERS</Link></li>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/contact'} >CONTACT</Link></li>
        </ul>



      </nav>

    </>
  )
}

export default Header
