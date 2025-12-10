import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Upload } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | California Estimators</title>
                <meta name="description" content="Get in touch for a free quote. Upload your plans for accurate construction takeoff services in California." />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507208773393-40d9fc9f600e?q=80&w=2670&auto=format&fit=crop")' }}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get a free quote within minutes.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>

                    {/* Form Side */}
                    <div className="contact-form-wrapper" style={{ background: 'white', padding: '30px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '20px' }}>Send us a message</h2>
                        <form>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                                    <input type="email" placeholder="email@example.com" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone</label>
                                    <input type="tel" placeholder="(323) 555-0101" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Project Details</label>
                                <textarea rows="4" placeholder="Tell us about your project..." style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                            </div>

                            <div style={{ marginBottom: '20px', padding: '20px', border: '2px dashed #ddd', textAlign: 'center', borderRadius: '4px', cursor: 'pointer' }}>
                                <Upload size={32} color="var(--primary-blue)" />
                                <p style={{ margin: '10px 0', fontSize: '0.9rem' }}>Drag & drop plans here or click to upload</p>
                                <span style={{ fontSize: '0.8rem', color: '#999' }}>PDF, DWG, PLN accepted</span>
                            </div>

                            <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Request</button>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="contact-info">
                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ marginBottom: '20px' }}>Get in Touch</h3>
                            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                                We are always ready to help you with your estimation needs.
                                Send us your plans and we will get back to you with a quote usually within the hour.
                            </p>

                            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <Phone color="var(--primary-blue)" />
                                <div>
                                    <strong>Phone</strong>
                                    <p>(323) 555-0101 (California Office)</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <Mail color="var(--primary-blue)" />
                                <div>
                                    <strong>Email</strong>
                                    <p>estimates@californiaestimators.com</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <MapPin color="var(--primary-blue)" />
                                <div>
                                    <strong>Head Office</strong>
                                    <p>123 Wilshire Blvd, Los Angeles, CA 90017</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                <Clock color="var(--primary-blue)" />
                                <div>
                                    <strong>Office Hours</strong>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM (PST)</p>
                                    <p>Sat: 9:00 AM - 1:00 PM (PST)</p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Map - Visual Improvement */}
                        <div style={{ height: '300px', width: '100%', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1548345680-f54756309526?q=80&w=2600&auto=format&fit=crop"
                                alt="Los Angeles Map Location"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} /> Los Angeles Office
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contact;
