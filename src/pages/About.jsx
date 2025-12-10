import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Settings, Award } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | California Estimators</title>
                <meta name="description" content="Learn more about California Estimators, our mission, and our team of senior quantity surveyors." />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop")' }}>
                <div className="container">
                    <h1>About California Estimators</h1>
                    <p>Your trusted partner for accurate construction cost estimation in The Golden State.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Who We Are</h2>
                        <p style={{ marginBottom: '15px' }}>
                            California Estimators is a premier construction consultancy firm based in Los Angeles. We are a team of certified Quantity Surveyors, Civil Engineers, and Construction Managers dedicated to helping contractors win more bids.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            With over 15 years of industry experience, we serve clients across California, the USA, and Canada. We understand the specific nuances of California's building codes and labor markets.
                        </p>
                        <p>
                            We act as your complete outsourced estimating department, saving you the overhead of hiring full-time staff while delivering
                            precision and reliability on every project.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                            alt="Team Meeting"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>

                {/* TEAM SECTION */}
                <div style={{ marginTop: '80px' }}>
                    <div className="section-header text-center">
                        <h2>Our Expert Team</h2>
                        <p>Meet the senior estimators behind your winning bids.</p>
                    </div>
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>

                        {/* Team Member 1 */}
                        <div className="team-card" style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>Robert Chen</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>Senior Estimator</p>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>15+ years in Commercial Estimating. Expert in high-rise and mixed-use developments.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="team-card" style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" alt="Estimator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>Sarah Miller</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>Lead Residential Estimator</p>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>Specializes in custom homes and multi-family framing takeoffs.</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="team-card" style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" alt="MEP Engineer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>James Wilson</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>MEP Specialist</p>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>Mechanical Engineer focused on HVAC & Plumbing systems estimation.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ background: '#f8f9fa' }} className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Mission</h2>
                        <p>To empower contractors with the numbers they need to build the world.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card text-center">
                            <Award size={40} style={{ color: 'var(--primary-blue)', marginBottom: '15px' }} />
                            <h3>Accuracy First</h3>
                            <p>We believe that a single mistake can cost thousands. That is why every estimate undergoes a double-check process.</p>
                        </div>
                        <div className="feature-card text-center">
                            <Users size={40} style={{ color: 'var(--primary-blue)', marginBottom: '15px' }} />
                            <h3>Client Partnership</h3>
                            <p>We are not just a service provider; we are your partners in growth. When you win, we win.</p>
                        </div>
                        <div className="feature-card text-center">
                            <Settings size={40} style={{ color: 'var(--primary-blue)', marginBottom: '15px' }} />
                            <h3>Cutting-Edge Tools</h3>
                            <p>We leverage the latest software technology to provide the most detailed and formatted reports in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section-padding">
                <h2>Tools & Software We Use</h2>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
                    {['Bluebeam Revu', 'Planswift', 'RSMeans', 'CostX', 'Trimble', 'Revit'].map(tool => (
                        <div key={tool} style={{
                            padding: '15px 30px',
                            background: 'white',
                            border: '1px solid #eee',
                            borderRadius: '4px',
                            fontWeight: '600',
                            color: 'var(--text-dark)'
                        }}>
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
