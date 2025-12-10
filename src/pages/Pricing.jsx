import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <>
            <Helmet>
                <title>Pricing | California Estimators</title>
                <meta name="description" content="Transparent pricing for construction estimating services. Per project, per sheet, or monthly plans." />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop")' }}>
                <div className="container">
                    <h1>Transparent Pricing</h1>
                    <p>No hidden fees. Pay only for what you need.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                    {/* Plan 1 */}
                    <div className="pricing-card" style={{ border: '1px solid #eee', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                        <h3>Single Trade</h3>
                        <p style={{ color: '#666', marginBottom: '20px' }}>Perfect for subcontractors</p>
                        <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '10px' }}>$150+</div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '30px' }}>Per Project</p>
                        <ul style={{ textAlign: 'left', marginBottom: '30px', listStyle: 'none' }}>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Material Takeoff</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Color-coded Plans</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Excel Sheet</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> 24h Turnaround</li>
                        </ul>
                        <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Get Started</Link>
                    </div>

                    {/* Plan 2 */}
                    <div className="pricing-card popular" style={{ border: '2px solid var(--primary-blue)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 10px 30px rgba(14, 76, 146, 0.1)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-blue)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>MOST POPULAR</div>
                        <h3>Full GC Estimate</h3>
                        <p style={{ color: '#666', marginBottom: '20px' }}>For General Contractors</p>
                        <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '10px' }}>$350+</div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '30px' }}>Per Project</p>
                        <ul style={{ textAlign: 'left', marginBottom: '30px', listStyle: 'none' }}>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> All CSI Divisions</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Labor & Material</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Bid Review Call</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> 2-3 Day Turnaround</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Started</Link>
                    </div>

                    {/* Plan 3 */}
                    <div className="pricing-card" style={{ border: '1px solid #eee', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                        <h3>Monthly Plan</h3>
                        <p style={{ color: '#666', marginBottom: '20px' }}>Busier Contractors</p>
                        <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '10px' }}>$1,500</div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '30px' }}>Per Month</p>
                        <ul style={{ textAlign: 'left', marginBottom: '30px', listStyle: 'none' }}>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Up to 10 Projects</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Dedicated Estimator</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Priority Support</li>
                            <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}><Check size={16} color="green" /> Unlimited Revisions</li>
                        </ul>
                        <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Subscribe</Link>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <h3>Have a large project?</h3>
                    <p>We also offer hourly rates starting at $40/hr for complex industrial or commercial projects.</p>
                    <Link to="/contact" style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'underline' }}>Request a Custom Quote</Link>
                </div>
            </div>
        </>
    );
};

export default Pricing;
