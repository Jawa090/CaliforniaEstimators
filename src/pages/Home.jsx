import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calculator, Building2, HardHat, FileText, Users, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import FAQ from '../components/FAQ/FAQ';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import './Home.css';

const Home = () => {
    const services = [
        { title: "Commercial Estimating", icon: <Building2 size={32} />, desc: "Detailed cost estimates for office buildings, retail spaces, schools, and hospitals.", link: "/services/commercial" },
        { title: "Residential Estimating", icon: <Building2 size={32} />, desc: "Complete estimates for new home builds, renovations, extensions, and remodeling projects.", link: "/services/residential" },
        { title: "Construction Takeoff", icon: <HardHat size={32} />, desc: "Accurate material takeoffs for lumber, concrete, drywall, painting, and flooring.", link: "/services/construction-takeoff" },
        { title: "Industrial Estimating", icon: <Building2 size={32} />, desc: "Specialized estimation for factories, warehouses, and complex industrial plants.", link: "/services/industrial" },
        { title: "MEP Estimating", icon: <Calculator size={32} />, desc: "Mechanical, Electrical, and Plumbing estimates ensuring total project coverage.", link: "/services/mep" },
        { title: "Electrical Estimating", icon: <FileText size={32} />, desc: "Precise electrical takeoffs for wiring, fixtures, and systems.", link: "/services/electrical" }
    ];

    const faqs = [
        { question: "What is your turnaround time?", answer: "We typically deliver estimates within 24-48 hours, depending on the project size and complexity." },
        { question: "Which software do you use?", answer: "We use industry-standard software including Planswift, Bluebeam, and RSMeans for accurate pricing." },
        { question: "Do you provide estimates for all trades?", answer: "Yes, we cover all trades including CSI divisions 1-33, from site work to finishes." },
        { question: "Are your estimates detailed enough for bidding?", answer: "Absolutely. Our estimates are highly detailed, itemized, and ready for you to submit directly to your clients." }
    ];

    return (
        <>
            <Helmet>
                <title>California Construction Takeoff & Estimating Services | California Estimators</title>
                <meta name="description" content="Accurate construction takeoff and estimating services for contractors in California & USA. Fast, reliable, and builder-ready material quantities." />
            </Helmet>

            {/* HERO SECTION */}
            <HeroSlider />

            {/* TRUSTED BY */}
            <div className="trusted-by-section">
                <div className="container">
                    <p className="trusted-text">Trusted by top contractors and architects</p>
                    <div className="logos-grid">
                        <span className="logo-placeholder">Bluebeam</span>
                        <span className="logo-placeholder">Planswift</span>
                        <span className="logo-placeholder">RSMeans</span>
                        <span className="logo-placeholder">Xactimate</span>
                        {/* Duplicate for marquee */}
                        <span className="logo-placeholder">Bluebeam</span>
                        <span className="logo-placeholder">Planswift</span>
                        <span className="logo-placeholder">RSMeans</span>
                        <span className="logo-placeholder">Xactimate</span>
                    </div>
                </div>
            </div>

            {/* ABOUT SNIPPET */}
            <section className="section-padding about-snippet">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <span className="section-tag">WHO WE ARE</span>
                                <h2>Your Reliable Estimating Partner</h2>
                                <p>California Estimators is a team of certified professional estimators and quantity surveyors dedicated to helping contractors win more bids. We understand the unique challenges of the California construction market, from code compliance to labor costs.</p>
                                <ul className="feature-list">
                                    <li><CheckCircle size={20} className="text-primary" /> Certified CPE & ASPE Estimators</li>
                                    <li><CheckCircle size={20} className="text-primary" /> 99% Bid Winning Ratio</li>
                                    <li><CheckCircle size={20} className="text-primary" /> 24/7 Support Available</li>
                                </ul>
                                <Link to="/about" className="btn btn-link">Read More About Us <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES OVERVIEW */}
            <section className="section-padding services-section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-tag">OUR SERVICES</span>
                        <h2>Comprehensive Estimating Solutions</h2>
                        <p>From residential remodels to large-scale commercial complexes, we cover it all.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-icon-wrapper">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to={service.link} className="service-link">Learn More <ArrowRight size={14} /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section-padding why-choose-us">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Contractors Choose Us</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <Clock size={40} className="feature-icon" />
                            <h3>Fast Efficiency</h3>
                            <p>Never miss a bid deadline. We deliver most estimates within 24-48 hours.</p>
                        </div>
                        <div className="feature-card">
                            <ShieldCheck size={40} className="feature-icon" />
                            <h3>Pinpoint Accuracy</h3>
                            <p>Multi-level quality checks ensure every number is verified before delivery.</p>
                        </div>
                        <div className="feature-card">
                            <Users size={40} className="feature-icon" />
                            <h3>Dedicated Support</h3>
                            <p>Direct access to your estimator for any questions or adjustments needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section-padding testimonials-section bg-dark-blue">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-tag text-white">CLIENT FEEDBACK</span>
                        <h2 className="text-white">What Our Partners Say</h2>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>

            {/* PROCESS */}
            <section className="section-padding home-process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Simple 4-Step Process</h2>
                        <p>We've streamlined estimating so you can focus on building.</p>
                    </div>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Upload Plans</h3>
                            <p>Submit your drawings via our website.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Get Quote</h3>
                            <p>Receive a fixed fee quote instantly.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Estimation</h3>
                            <p>We perform the takeoff & pricing.</p>
                        </div>
                        <div className="process-line"></div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h3>Delivery</h3>
                            <p>Receive estimates & win the bid.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="section-padding faq-section bg-gray-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-header text-center">
                                <span className="section-tag">FAQ</span>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <FAQ items={faqs} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-content glass-card-dark">
                        <h2>Ready to Start Your Next Project?</h2>
                        <p>Upload your plans today and get a professionally prepared estimate.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-warning btn-lg">Upload Plans Now</Link>
                            <a href="tel:+1234567890" className="btn btn-outline-light btn-lg">Call Us: (555) 123-4567</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
