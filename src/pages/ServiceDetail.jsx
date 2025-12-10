import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { Check, Download, Upload } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{service.title} | California Estimators</title>
                <meta name="description" content={`Professional ${service.title}. ${service.shortDesc}`} />
            </Helmet>

            {/* Header */}
            <div className="page-banner" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="container">
                    <h1>{service.title}</h1>
                    <p>{service.shortDesc}</p>
                </div>
            </div>

            <div className="container section-padding service-content-layout">
                {/* Main Content */}
                <div className="service-main">
                    <section className="service-description">
                        <h2>Service Overview</h2>
                        <p>{service.description}</p>
                        <img src={service.image} alt={service.title} className="service-main-image" />
                    </section>

                    {service.methodology && (
                        <section className="service-methodology" style={{ marginTop: '40px' }}>
                            <h3>Our Methodology</h3>
                            <p>{service.methodology}</p>
                        </section>
                    )}

                    {service.benefits && (
                        <section className="service-benefits" style={{ marginTop: '40px' }}>
                            <h3>Key Benefits</h3>
                            <div className="benefits-grid">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="benefit-card">
                                        <Check size={20} className="benefit-icon" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="what-included" style={{ marginTop: '40px' }}>
                        <h3>What's Included</h3>
                        <ul className="included-list">
                            {service.included.map((item, index) => (
                                <li key={index}><Check size={18} className="check-icon" /> {item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="our-process" style={{ marginTop: '40px' }}>
                        <h3>Our Process</h3>
                        <p>{service.process}</p>
                        
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Plan Review</h4>
                                    <p>We thoroughly analyze your drawings and specifications</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Digital Takeoff</h4>
                                    <p>Using industry-standard software for precise measurements</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Quality Check</h4>
                                    <p>Senior estimators review all quantities for accuracy</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Delivery</h4>
                                    <p>Receive detailed Excel reports and marked-up plans</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {service.specialFeatures && (
                        <section className="special-features" style={{ marginTop: '40px' }}>
                            <h3>Special Features & Capabilities</h3>
                            <div className="special-features-grid">
                                {service.specialFeatures.map((feature, index) => (
                                    <div key={index} className="special-feature-card">
                                        <Check size={20} className="feature-check-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {service.caseStudy && (
                        <section className="case-study" style={{ marginTop: '40px' }}>
                            <h3>Success Story</h3>
                            <div className="case-study-card">
                                <div className="case-study-header">
                                    <h4>{service.caseStudy.title}</h4>
                                </div>
                                <div className="case-study-content">
                                    <p>{service.caseStudy.description}</p>
                                    <div className="case-study-results">
                                        <h5>Key Results:</h5>
                                        <ul>
                                            {service.caseStudy.results.map((result, index) => (
                                                <li key={index}>{result}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="service-features" style={{ marginTop: '40px' }}>
                        <h3>Why Choose Our {service.title}?</h3>
                        <div className="features-showcase">
                            <div className="feature-item">
                                <div className="feature-icon-wrapper">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4>Industry Expertise</h4>
                                    <p>Our team has over 15 years of experience in construction estimation</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon-wrapper">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4>Advanced Software</h4>
                                    <p>We use PlanSwift, Bluebeam, and other professional tools</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon-wrapper">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4>Fast Turnaround</h4>
                                    <p>Most projects completed within 24-48 hours</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon-wrapper">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4>Competitive Pricing</h4>
                                    <p>Affordable rates with no hidden fees</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="sample-download-box">
                        <div className="icon"><Download size={32} /></div>
                        <div className="text">
                            <h4>Download {service.title} Sample</h4>
                            <p>See a real example of our work for this trade.</p>
                        </div>
                        <button className="btn btn-outline">Download PDF</button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="service-sidebar">
                    <div className="pricing-box">
                        <h4>Pricing</h4>
                        <p className="price-tag">{service.pricing}</p>
                        <p className="price-note">Turnaround: 24-48 Hours</p>
                        <Link to="/contact" className="btn btn-primary full-width">Get a Quote</Link>
                    </div>

                    <div className="upload-box">
                        <Upload size={40} className="upload-icon" />
                        <h4>Have Plans Ready?</h4>
                        <p>Upload your drawings and we will send you a quote within minutes.</p>
                        <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
