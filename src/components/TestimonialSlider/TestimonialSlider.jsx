import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "James Wilson",
            role: "General Contractor, Los Angeles",
            content: "California Estimators helped us win 3 major bids last month. Their accuracy is unmatched and the turnaround time is incredible. It feels like having an in-house estimating team.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Senior Architect, San Francisco",
            content: "The detailed material takeoff reports saved me hours of work. The format is clean, professional, and easy to understand. Highly recommended for any busy builder or architect.",
            rating: 5
        },
        {
            id: 3,
            name: "David Thompson",
            role: "Property Developer, San Diego",
            content: "Professional, reliable, and cost-effective. They understand the California building codes perfectly and their estimates are always spot on. A game changer for our business.",
            rating: 5
        },
        {
            id: 4,
            name: "Michael Rodriguez",
            role: "HVAC Contractor, Sacramento",
            content: "I've tried several estimating services, but none compare to the precision of California Estimators. They caught detailed plumbing conflicts that others missed.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="testimonial-slider-container">
            <div className="testimonial-slider-wrapper">
                <div
                    className="testimonial-slides"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-slide">
                            <div className="testimonial-card-glass">
                                <div className="quote-icon-bg">
                                    <Quote size={64} />
                                </div>
                                <div className="stars-row">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{item.content}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h4>{item.name}</h4>
                                        <span>{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="test-nav prev" onClick={prevSlide} aria-label="Previous Testimonial">
                <ChevronLeft size={24} />
            </button>
            <button className="test-nav next" onClick={nextSlide} aria-label="Next Testimonial">
                <ChevronRight size={24} />
            </button>

            <div className="test-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`test-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
