import React, { useRef, useEffect, useState } from 'react';
import cfive from '../assets/images/cfive.jpg';
import ctwo from '../assets/images/ctwo.jpg';
import cthree from '../assets/images/cthree.jpg';
import cfour from '../assets/images/cfour.jpg';
import cone from '../assets/images/cone.jpg';

// Popular Component
function Popular() {
    const popularSliderRef = useRef(null); // Ref for the slider
    const prevButtonRef = useRef(null); // Ref for the previous button
    const nextButtonRef = useRef(null); // Ref for the next button
    const [popularCurrentIndex, setPopularCurrentIndex] = useState(0);
    const [popularCardsToShow, setPopularCardsToShow] = useState(window.innerWidth > 800 ? 4 : 2);

    useEffect(() => {
        // Function to handle slider settings on resize
        const updatePopularSliderSettings = () => {
            setPopularCardsToShow(window.innerWidth > 800 ? 4 : 2);
            setPopularCurrentIndex(0);
            if (popularSliderRef.current) {
                popularSliderRef.current.style.transform = `translateX(0)`;
            }
        };

        // Adding and cleaning up resize event listener
        const handleResize = () => updatePopularSliderSettings();
        window.addEventListener("resize", handleResize);
        updatePopularSliderSettings();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const totalPopularCards = 8; // Set this to the actual number of cards you have
    const maxPopularIndex = totalPopularCards - popularCardsToShow;
    const popularSlideWidth = 100 / popularCardsToShow;

    // Function to slide right
    const popularSlideRight = () => {
        if (popularCurrentIndex < maxPopularIndex) {
            setPopularCurrentIndex((prevIndex) => prevIndex + 1);
            popularSliderRef.current.style.transform = `translateX(-${(popularCurrentIndex + 1) * popularSlideWidth}%)`;
        }
    };

    // Function to slide left
    const popularSlideLeft = () => {
        if (popularCurrentIndex > 0) {
            setPopularCurrentIndex((prevIndex) => prevIndex - 1);
            popularSliderRef.current.style.transform = `translateX(-${(popularCurrentIndex - 1) * popularSlideWidth}%)`;
        }
    };

    // Adding event listeners to buttons
    useEffect(() => {
        if (prevButtonRef.current && nextButtonRef.current) {
            prevButtonRef.current.addEventListener('click', popularSlideLeft);
            nextButtonRef.current.addEventListener('click', popularSlideRight);
        }

        return () => {
            if (prevButtonRef.current && nextButtonRef.current) {
                prevButtonRef.current.removeEventListener('click', popularSlideLeft);
                nextButtonRef.current.removeEventListener('click', popularSlideRight);
            }
        };
    }, [popularCurrentIndex, maxPopularIndex, popularSlideWidth]);

    return (
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best fit</p>
            <br />
            <div className="popular-content">
                <button className="slider-button1 popular-prev" ref={prevButtonRef}>❮</button>
                <div className="popular-slider" ref={popularSliderRef}>
                    <div className="pop-card">
                        <img src={cone} alt="Course 1" />
                        <h3>Django and Flask Advanced Python Programming</h3>
                        <p>Col Steele</p>
                        <p>4.0 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>1199 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={ctwo} alt="Course 2" />
                        <h3>2023 Python Data Visualization Masterclass</h3>
                        <p>Col Steele</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={cthree} alt="Course 3" />
                        <h3>Web Development Bootcamp 2023</h3>
                        <p>Kathir</p>
                        <p>4.4 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={cfour} alt="Course 4" />
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Col Steele</p>
                        <p>4.3 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={ctwo} alt="Course 5" />
                        <h3>2023 Python Data Visualization Masterclass</h3>
                        <p>Col Steele</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={cthree} alt="Course 6" />
                        <h3>Web Development Bootcamp 2023</h3>
                        <p>Col Steele</p>
                        <p>4.4 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={cfour} alt="Course 7" />
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Col Steele</p>
                        <p>4.3 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="pop-card">
                        <img src={cfive} alt="Course 8" />
                        <h3>Basic to Advanced Programming with EMC</h3>
                        <p>Col Steele</p>
                        <p>4.1 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                </div>
                <button className="slider-button1 popular-next" ref={nextButtonRef}>❯</button>
            </div>
        </div>
    );
}

export default Popular;