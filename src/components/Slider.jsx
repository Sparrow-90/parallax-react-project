import React, { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const Slider = () => {

    const slides = [
        {
            img: 'https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80',
        },

    ]

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
}

const nexSlide = () =>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
}
const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
}


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
        <div  style={{backgroundImage: `url(${slides[currentIndex].img})`}} className='w-full h-full position-relative bg-cover rounded-2xl  bg-center duration-500 shadow-lg shadow-black'>
     {}
     <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={prevSlide}><BsChevronCompactLeft size={50}/></div>
     {}   
     <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nexSlide}><BsChevronCompactRight size={50}/></div>
        </div>
     <div className='flex top-4 justify-center py-2'>
        {
            slides.map((slide, slideIndex) => (
                <div  key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer text-black/50'>
                    <RxDotFilled/>
                </div>
            ))
        }
     </div>
    </div>
  )
}

export default Slider