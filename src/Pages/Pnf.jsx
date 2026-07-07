import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {

  // const navigate = useNavigate()

  // const backHome = () => {
  //   navigate('/')
  // }

  return (
    <div>

      {/* 
<div className="bg-gray-100 min-h-screen flex items-center justify-center px-6">

        <section
          className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 text-center max-w-2xl w-full border border-gray-200">

          <h1
            className="text-7xl md:text-9xl font-extrabold text-gray-900 tracking-tight">
            404
          </h1>

          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mt-6">
            Page Not Found
          </h2>


          <p
            className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed">
            Sorry, the page you are looking for does not exist,
            has been removed, or is temporarily unavailable.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a href="/"
              className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 shadow-lg">

              Go Home

            </a>

            <button
              onclick="history.back()"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300">

              Go Back

            </button>

          </div>


          <p className="text-sm text-gray-400 mt-10">
            Error Code : 404
          </p>

        </section>

</div>  */}

      <section className='min-h-screen w-full flex justify-center items-center flex-col'>
        <img className='w-[30%]' src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="PNF" />
        <div className='text-center'>
          <h3 className='text-3xl'>Looks like you are lost</h3>
          <p>the page you are looking for is not available</p>
         <Link to={"/"}> <button className='mt-4 bg-black text-white px-5 py-3'>Go Home</button></Link>
        </div>
      </section>

    </div>
  )
}

export default Pnf
