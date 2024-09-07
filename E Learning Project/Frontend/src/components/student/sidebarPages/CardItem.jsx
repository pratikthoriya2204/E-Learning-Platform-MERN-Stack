import React from 'react'
import books from "../../../assets/books.jpg"
import books2 from "../../../assets/books2.jpg"

function CardItem(props) {
  const {cls} = props;
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl md:w-80 md:h-72">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img className="w-full h-28"
                  src={books}
                  alt="Sunset in the mountains" />
              </a>
              <a href="#!">
                <div
                  className="absolute top-0 left-0 px-4 py-2 text-white text-lg">
                  <h3 className='capitalize underline'>{cls.name}</h3>
                </div>
                <div
                  className="absolute bottom-0 left-0 px-4 py-2 text-white text-sm">
                  <h3 className='capitalize'>{cls.subject} </h3>
                </div>
              </a>
              <a href="!#">
                <div
                  className="absolute top-[70px] right-0 mt-2 mr-3">
                  <img
                    alt="name"
                    src={books2}
                    className="h-16 w-16 mx-auto object-cover rounded-full"
                  />
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out capitalize">{cls.description} </a>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                <span className="ml-1">{cls.date}</span></span>
            </div>
          </div>
    </>
  )
}

export default CardItem
