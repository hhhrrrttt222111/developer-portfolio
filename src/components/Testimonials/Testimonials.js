import React, { useContext, useRef } from 'react'

import Slider from "react-slick";

import { FaQuoteLeft,FaArrowRight,FaArrowLeft } from "react-icons/fa";

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData'

import './Testimonials.css'

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    console.log(testimonialsData)

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 5000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    }


    return (
        <>
            {
                testimonialsData.length > 0 && (
                    <div className="testimonials" style={{backgroundColor: theme.primary2}}>
                        <div className="testimonials--header">
                            <h1 style={{color: theme.primary}}>Testimonials</h1>
                        </div>
                        <div className="testimonials--body">
                            <FaQuoteLeft className="quote"   style={{color: theme.primary2}}/>
                            <div className="testimonials--slider" style={{backgroundColor: theme.primary}}>
                                <Slider {...settings} ref={sliderRef}>
                                    {testimonialsData.map((test) => (
                                        <div className="single--testimony" key={test.id}>
                                            <div className="testimonials--container" >
                                                <div className="review--img" style={{backgroundColor: theme.primary2}}>
                                                    <img src={test.image} alt={test.name} />
                                                </div>
                                                <div className="review--content" style={{backgroundColor: theme.primary2, color: theme.secondary}}>
                                                    <p>{test.text}</p>
                                                    <h1>{test.name}</h1>
                                                    <h4>{test.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            <button className="prevBtn" onClick={gotoPrev}  style={{backgroundColor: theme.primary}}>
                                <FaArrowLeft  style={{color: theme.primary2}}/>
                            </button>
                            <button className="nextBtn" onClick={gotoNext}  style={{backgroundColor: theme.primary}}>
                                <FaArrowRight  style={{color: theme.primary2}}/>
                            </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Testimonials
