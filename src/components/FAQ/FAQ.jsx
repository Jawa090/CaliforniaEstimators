import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                {isOpen ?
                    <ChevronUp className="faq-icon active" /> :
                    <ChevronDown className="faq-icon" />
                }
            </button>
            {isOpen && (
                <div className="faq-answer">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = ({ items }) => {
    return (
        <div className="faq-container">
            {items.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FAQ;
