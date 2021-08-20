import React, { useContext, useRef } from 'react'

import Slider from "react-slick";

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
        swipe: false,
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
                            <div className="testimonials--slider">
                                <Slider {...settings} ref={sliderRef}>
                                    {testimonialsData.map((test) => (
                                        <div className="single--testimony" key={test.id}>
                                            <img src={test.image} alt={test.name} />
                                            <h1>{test.name}</h1>
                                            <h4>{test.title}</h4>
                                            <p>{test.text}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <button onClick={gotoPrev}>Prev</button>
                            <button onClick={gotoNext}>Next</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Testimonials
