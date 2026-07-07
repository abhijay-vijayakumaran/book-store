import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

import { getHomeAPI } from '../../services/allAPIs'



function Home() {


  const [homeBooks, setHomeBooks] = useState([])

  const getHomeBooks = async () => {
    try {
      const response = await getHomeAPI()

      console.log(response);

      setHomeBooks(response.data.books)


    } catch (err) {
      console.log("Error" + err);
    }
  }

  //fetch the 4 recent books to the Home
  useEffect(() => {
    getHomeBooks()
  }, [])

  return (
    <>
      <Header />

      {/* Landing */}
      <div style={{ height: '500px' }} className="flex flex-col justify-center items-center bg-[url(https://www.entertales.com/wp-content/uploads/635841049393339322-1773368249_o-PILE-OF-BOOKS-facebook.jpg)] bg-cover bg-center text-white">
      </div>

      {/* New Arrivals */}
      <section className="md:px-40 p-5 my-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">New Arrivals</h1>
        <h1 className="text-3xl">Explore Our Latest Collection</h1>
        <div className="md:grid grid-cols-4 w-full my-10">

          {homeBooks.length > 0 ?
            homeBooks.map((item) => (
              <div className="shadow rounded p-3 m-4 md:my-0">

                <img width={'100%'} height={'400px'} src={item.imageUrl} alt="book" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className='text-blue-700 font-bold text-lg'>{item.author}</p>
                  <p>{item.title}</p>
                  <p><del className='text-red-600 font-bold'>${item.price}</del><span className='text-green-600 font-bold'>${item.dprice}</span></p>
                </div>

              </div>

            ))
            :
            "Error while fetching book Details...."}






        </div>

        <div className="text-center my-10">
          <Link to={'all-books'} className="bg-blue-800 p-3 text-white font-bold">Explore More...</Link>
        </div>
      </section>

      {/* Author */}
      <section className="md:grid grid-cols-2 items-center gap-10 my-5 md:px-40 p-5">

        <div className="text-center">

          <h1 className='text-lg font-medium'>FEATURED AUTHORS</h1>
          <h2 className='text-xl'>Capativates with every word</h2>
          <p className='text-justify my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem recusandae ut neque enim maiores cum, modi id beatae velit atque aperiam explicabo aut perspiciatis quia! Suscipit iusto dolores enim maxime. Explicabo dolorem, doloribus cum, facilis eligendi iste reiciendis, ipsum consequuntur perferendis nulla corrupti officia. Beatae, at debitis totam eaque explicabo dolores ab assumenda commodi velit ex. Asperiores ea veritatis commodi!</p>
          <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem recusandae ut neque enim maiores cum, modi id beatae velit atque aperiam explicabo aut perspiciatis quia! Suscipit iusto dolores enim maxime. Explicabo dolorem, doloribus cum, facilis eligendi iste reiciendis, ipsum consequuntur perferendis nulla corrupti officia. Beatae, at debitis totam eaque explicabo dolores ab assumenda commodi velit ex. Asperiores ea veritatis commodi!</p>
        </div>

        <div className="p-5 flex justify-center items-center">
          <img src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg" alt="author" />
        </div>

      </section>






    </>
  )
}

export default Home
