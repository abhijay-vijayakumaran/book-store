import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { FaBarsProgress } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../services/allAPIs'
import { SearchContext } from '../../Context/SearchContextShare'



function Allbooks() {

  const [token, setToken] = useState('')

  const [allBooks, setAllBooks] = useState([])

  const [categoryArray, setCategoryArray] = useState([])

  //context api
  const { searchKey, setSearchkey } = useContext(SearchContext)


  //for filter
  const [dummyBooks, setDummyBooks] = useState([])

  //To filter on onclick  of each of the category
  const handleFilter = (it) => {
    console.log(it)

    setAllBooks(dummyBooks.filter(item => item.category == it))
    console.log(dummyBooks);

  }


  const getAllBooks = async (searchKey) => {


    //pass reqHeader to getAllBooksAPI()
    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }

    console.log(searchKey)

    try {
      const response = await getAllBooksAPI(searchKey,reqHeader)

      console.log(response);

      setAllBooks(response.data.allBooks)
      setDummyBooks(response.data.allBooks)


    } catch (err) {
      console.log("Error" + err);
    }
  }

  //get the token first
  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
  }, [])

  //then fetch all books to the allbooks Page if the token is present
  useEffect(() => {
    if (token) {
      getAllBooks(searchKey)
    }

  }, [token,searchKey])


//filter render
  useEffect(() => {
    const unique = []

    dummyBooks.forEach((book) => {
      if (!unique.includes(book.category)) {
        unique.push(book.category)
      }
    })

    setCategoryArray(unique)
  }, [allBooks])



  const handleSearch = () => {
    console.log(searchKey)

  }





  return (
    <>
      <Header />


      {token ?
        <div>
          <div className="flex justify-center items-center flex-col my-5">

            <h1 className='text-3xl font-bold my-5 '>Collections</h1>
            <div className="flex my-5">
              <input type="text" onChange={(e) => setSearchkey(e.target.value)} className='p-2 border border-gray-200 text-black w-100 placeholder-gray-600' placeholder='Search By Title' />
              <button className='bg-blue-900 text-white p-2' onClick={handleSearch}>Search</button>
            </div>

          </div>

          {/* Grid */}
          <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">

            {/* Filter */}
            <div className="col-span-1">


              <div className="flex justify-between">
                <h1 className='text-2xl font-semibold'>Filter</h1>
                <button className='text-2xl md:hidden'><FaBarsProgress /></button>
              </div>


              {
                categoryArray.length > 0 ?
                  categoryArray.map((item) => (
                    <div className="mt-3">
                      <input name='filter' type="radio" onClick={() => handleFilter(item)} />
                      <label for='filter' className='ms-3'>{item}</label>
                    </div>
                  ))
                  :
                  "No Books Present"
              }


              <div className="md:block hidden">
                {/* <div className="mt-3">
                  <input type="radio" />`
                  <label className='ms-3'>Category</label>
                </div> */}

                <div className="mt-3">
                  <input type="radio" onClick={() => getAllBooks()} id='noFilter' name='filter' />
                  <label className='ms-3'>No-filter</label>
                </div>



              </div>

            </div>


            {/* Books */}
            <div className="col-span-3">



              <div className="md:grid grid-cols-4 mt-5 md:mt-0">

                {
                  allBooks.length > 0 ?
                    allBooks.map((item) => (
                      <div className="shadow rounded p-3 ms-4 my-3">

                        <img width={'100%'} width={'300px'} src={item.imageUrl} alt="book" />
                        <div className="flex flex-col justify-center items-center mt-4">

                          <p className='text-blue-700 font-bold text-lg'>{item.title}</p>
                          <p className='text-center'>{item.abstract}</p>
                          <Link to={`/view/${item._id}`} className='bg-blue-600 p-2 mt-3 text-white rounded-xl' >View Book</Link>
                        </div>

                      </div>
                    ))
                    :
                    "Error...while fetching book Details...🥲"

                }

              </div>

            </div>
          </div>
        </div>
        :
        <div>
          <div className='text-center pt-50'>
            <div className=''>
              <h1 className='text-2xl font-bold mb-10'>Please Login....</h1>
              <Link to='/login'><button className='bg-black text-white text-2xl px-6 py-3 rounded-xl'>Login</button></Link>
            </div></div>
        </div>

      }




    </>
  )
}

export default Allbooks
