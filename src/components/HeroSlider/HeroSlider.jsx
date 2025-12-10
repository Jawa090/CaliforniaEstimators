import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            title: "Accurate Construction Estimating",
            subtitle: "Win more bids with detailed, builder-ready material takeoffs.",
            ctaText: "Get Free Quote",
            ctaLink: "/contact"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
            title: "Professional Quantity Surveyors",
            subtitle: "Certified experts delivering precision for residential & commercial projects.",
            ctaText: "View Services",
            ctaLink: "/services"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1581094794329-cd119277ac1b?q=80&w=2070&auto=format&fit=crop",
            title: "Fast 24-48h Turnaround",
            subtitle: "Never miss a deadline. Rapid delivery for urgent bidding needs.",
            ctaText: "Upload Plans",
            ctaLink: "/contact"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0, 42, 92, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})` }}
                >
                    <div className="container">
                        <div className="slide-content">
                            <h1 className={index === currentSlide ? 'animate-slide-up' : ''}>{slide.title}</h1>
                            <p className={index === currentSlide ? 'animate-slide-up-delay' : ''}>{slide.subtitle}</p>
                            <Link
                                to={slide.ctaLink}
                                className={`btn btn-primary ${index === currentSlide ? 'animate-fade-in' : ''}`}
                            >
                                {slide.ctaText}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={32} />
            </button>
            <button className="slider-nav next" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={32} />
            </button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
