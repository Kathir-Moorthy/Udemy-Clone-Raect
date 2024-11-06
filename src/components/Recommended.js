import React, { useRef, useEffect, useState } from 'react';
import cfive from '../assets/images/cfive.jpg';
import ctwo from '../assets/images/ctwo.jpg';
import cthree from '../assets/images/cthree.jpg';
import cfour from '../assets/images/cfour.jpg';

// Recommended Component
function Recommended() {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 2; // Number of cards to show at once
    const totalCards = 4; // Update this with the actual count or dynamically calculate it
    const maxIndex = Math.ceil(totalCards / cardsToShow) - 1; // Calculate max index for navigation
    const slideWidth = 100; // Each slide takes 100% width (for two cards)

    const slideRight = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const slideLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }
    }, [currentIndex]);

    return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p><br />
            <div className="slider">
                <div className="recommended__container" ref={sliderRef}>
                    <div className="course-card">
                        <img src={ctwo} alt="Course 1" />
                        <h3>2023 Python Data Visualization Masterclass</h3>
                        <p>Col Steele</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="course-card">
                        <img src={cthree} alt="Course 2" />
                        <h3>Web Development Bootcamp 2023</h3>
                        <p>Col Steele</p>
                        <p>4.4 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="course-card">
                        <img src={cfour} alt="Course 3" />
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Col Steele</p>
                        <p>4.3 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                    <div className="course-card">
                        <img src={cfive} alt="Course 4" />
                        <h3>Basic to Advanced Programming with EMC</h3>
                        <p>Kathir</p>
                        <p>4.1 ⭐⭐⭐⭐</p>
                        <p><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>999 <del>1999</del></p>
                    </div>
                </div>
                <button className="prev" onClick={slideLeft} aria-label="Previous course">❮</button>
                <button className="next" onClick={slideRight} aria-label="Next course">❯</button>
            </div>
        </div>
    );
}

export default Recommended;
