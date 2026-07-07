import React from 'react'
import Header from '../Components/Header'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div>
      <Header />

      <div className=' text-center px-15 pt-10'>

        <h2 className='text-3xl font-bold mb-5'>Contacts</h2>
        <p className='text-lg mx-15'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam minus qui ratione ad sed quos vitae quibusdam numquam nulla, ducimus doloremque asperiores ex. Libero laborum maiores praesentium earum dicta assumenda?
          Vitae quis magnam commodi repudiandae optio maxime, numquam, deleniti neque quia eius ratione iste deserunt sint nostrum doloremque? Ullam quaerat repudiandae optio laborum voluptatum ipsa omnis commodi eos natus minima!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum cum voluptas repudiandae harum. Dignissimos officia similique corporis odio perferendis iste, accusamus vitae minima iusto voluptas cum obcaecati inventore saepe.
          Autem vitae qui consectetur, architecto quis ut repellat, eveniet debitis ea rerum cupiditate provident optio eaque a quam ab dolore mollitia dolorem minus impedit veniam totam et? Id, ad. Esse.</p>
      </div>

      <div className='flex gap-10 justify-center mt-10'>
        <div className='flex items-center'>
          <div className='p-4 bg-gray-300 rounded-full m-3'>
            <FaLocationDot className='text-2xl' />
          </div>
          <p className='text-sm'>123 Main Street, APT 4B, <br /> Anytown, CA 91234</p>
        </div>
        <div className='flex items-center'>
          <div className='p-4 bg-gray-300 rounded-full m-3'>
            <FaPhoneAlt className='text-2xl' />
          </div>
          <p className='text-sm'>+91 987654321</p>
        </div>
        <div className='flex items-center'>
          <div className='p-4 bg-gray-300 rounded-full m-3'>
            <IoMdMail className='text-2xl' />
          </div>
          <p className='text-sm'>bookstore@gmail.com</p>
        </div>
      </div>

      <div className='flex justify-around gap-10 mt-10 mx-15'>
        <div className='bg-gray-300/80 pt-5 pb-5 w-[40%] h-[100%] text-center'>

          <h3 className='text-center font-semibold text-2xl'>Send me Message</h3>
          <div className='mx-auto'>
            <input className='my-3 px-3' type="text" placeholder='Name' /><br />
            <input className='my-3' type="text" placeholder='Email ID' /><br />
            <textarea className='my-3' placeholder='Message'></textarea>
          </div>

        </div>

        <div className="w-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.7226803459985!2d76.21078157583663!3d10.522494863824615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef5cee5d845b%3A0xa1e3583f9391e59b!2sLuminar%20Technolab%20-%20Software%20Training%20Institute%20in%20Thrissur!5e0!3m2!1sen!2sin!4v1780046361287!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          ></iframe>


        </div>
      </div>





    </div>
  )
}

export default Contact
