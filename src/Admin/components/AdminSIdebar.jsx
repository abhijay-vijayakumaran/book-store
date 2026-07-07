import React from 'react'

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import './AdminStyle.css'
import { GiBookshelf } from "react-icons/gi";
import { PiBagFill } from "react-icons/pi";
import { RiSettings3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div>
              <div className='flex flex-col w-60 h-200 bg-amber-950 justify-center p-5'>
          <img src="https://icon-library.com/images/admin-icon-png/admin-icon-png-18.jpg" width={'150px'} alt="" />
          <h1 className='text-amber-50 text-3xl text-center my-3'>Admin</h1>

          <ul className='text-center m-3'>
           <Link to={'/admin-home'}>
            <li className='border-0 hover:border-2 rounded bg-amber-900 hover:bg-amber-100 shadow-2xl flex text-2xl my-3 py-2'><FaHome className='text-3xl mx-3 ' />  Home</li>
           </Link>
            
          <Link to={'/admin-Books'}>
            <li className='border-0 hover:border-2 rounded bg-amber-900 hover:bg-amber-100 shadow-2xl flex text-2xl my-3 py-2 '><GiBookshelf className='text-4xl ms-3' />All Books</li>
          </Link>
          
      
            <Link to={'/admin-settings'}>
                         <li className='border-0 hover:border-2 rounded bg-amber-900 hover:bg-amber-100 shadow-2xl flex text-2xl my-3 py-2'><RiSettings3Fill className='text-3xl mx-3' />Settings</li>
            </Link>
          </ul>
      </div>
      
    </div>
  )
}

export default AdminSidebar
