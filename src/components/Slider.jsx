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
    <div className='slider-container'>
        <div style={{backgroundImage: `url(${slides[currentIndex].img})`}} className='image-slider-container'>
     {}
     <div className='leftArrow' onClick={prevSlide}><BsChevronCompactLeft size={50}/></div>
     {}   
     <div className='rightArrow' onClick={nexSlide}><BsChevronCompactRight size={50}/></div>
        </div>
     <div className='dots-container'>
        {
            slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='dots'>
                    <RxDotFilled/>
                </div>
            ))
        }
     </div>
    </div>
  )
}

export default Slider