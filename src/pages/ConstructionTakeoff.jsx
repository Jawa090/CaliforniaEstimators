import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Download, Upload, Calculator, FileText, Award, Clock } from 'lucide-react';
import './ConstructionTakeoff.css';

const ConstructionTakeoff = () => {
    return (
        <>
            <Helmet>
                <title>Construction Takeoff Services | California Estimators</title>
                <meta name="description" content="Professional construction takeoff services. Detailed material takeoffs for all trades with 98.5% accuracy." />
            </Helmet>

            {/* Hero Section */}
            <section className="takeoff-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Construction Takeoff Services</h1>
                    <p className="hero-subtitle">Detailed material takeoffs for all trades with industry-leading 98.5% accuracy</p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">5,000+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98.5%</span>
                            <span className="stat-label">Accuracy Rate</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24hrs</span>
                            <span className="stat-label">Turnaround</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div className="takeoff-layout">
                    {/* Main Content */}
                    <div className="takeoff-main">
                        {/* Service Overview */}
                        <section className="service-overview">
                            <h2>Professional Construction Takeoff Services</h2>
                            <p>Our construction takeoff services provide contractors with precise material quantities to ensure accurate bidding and ordering. We define the logic and methodology for every count, ensuring nothing is missed from the blueprints. With over 15 years of experience, we have perfected our takeoff process to deliver industry-leading accuracy rates of 98.5%.</p>
                            
                            <div className="overview-highlights">
                                <div className="highlight-card">
                                    <Calculator size={32} className="highlight-icon" />
                                    <h3>Precision Counting</h3>
                                    <p>Every material quantity measured with pixel-perfect accuracy using advanced digital tools.</p>
                                </div>
                                <div className="highlight-card">
                                    <FileText size={32} className="highlight-icon" />
                                    <h3>Detailed Reports</h3>
                                    <p>Comprehensive Excel spreadsheets with color-coded markup drawings for verification.</p>
                                </div>
                                <div className="highlight-card">
                                    <Clock size={32} className="highlight-icon" />
                                    <h3>Fast Delivery</h3>
                                    <p>Most takeoffs completed within 24-48 hours, with rush options available.</p>
                                </div>
                            </div>
                        </section>

                        {/* Our Methodology */}
                        <section className="methodology-section">
                            <h2>Our Proven Methodology</h2>
                            <p>We strictly adhere to CSI MasterFormat divisions and follow standardized takeoff procedures. Our estimators transpose 2D drawings into 3D quantities, accounting for waste factors, site conditions, and constructability adjustments.</p>
                            
                            <div className="methodology-steps">
                                <div className="method-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4>Plan Analysis</h4>
                                        <p>Thorough review of architectural, structural, and MEP drawings</p>
                                    </div>
                                </div>
                                <div className="method-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4>Digital Measurement</h4>
                                        <p>Precise measurements using PlanSwift and Bluebeam software</p>
                                    </div>
                                </div>
                                <div className="method-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4>Quality Control</h4>
                                        <p>Three-point verification system by senior estimators</p>
                                    </div>
                                </div>
                                <div className="method-step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h4>Final Delivery</h4>
                                        <p>Detailed reports with markup drawings and waste calculations</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* What's Included */}
                        <section className="whats-included">
                            <h2>Comprehensive Takeoff Services</h2>
                            <div className="included-grid">
                                <div className="included-category">
                                    <h4>Structural Elements</h4>
                                    <ul>
                                        <li><Check size={16} /> Lumber & Framing (Board feet, Linear feet)</li>
                                        <li><Check size={16} /> Concrete & Masonry (Cubic yards, Square feet)</li>
                                        <li><Check size={16} /> Structural Steel (Tons, Linear feet)</li>
                                        <li><Check size={16} /> Foundation Work (Footings, Slabs, Walls)</li>
                                    </ul>
                                </div>
                                <div className="included-category">
                                    <h4>Exterior Systems</h4>
                                    <ul>
                                        <li><Check size={16} /> Roofing Materials (Squares, Bundles)</li>
                                        <li><Check size={16} /> Siding & Cladding (Square feet, Pieces)</li>
                                        <li><Check size={16} /> Windows & Doors (Units, Hardware)</li>
                                        <li><Check size={16} /> Waterproofing & Insulation</li>
                                    </ul>
                                </div>
                                <div className="included-category">
                                    <h4>Interior Finishes</h4>
                                    <ul>
                                        <li><Check size={16} /> Drywall & Insulation (Sheets, Rolls)</li>
                                        <li><Check size={16} /> Flooring & Tile (Square feet, Boxes)</li>
                                        <li><Check size={16} /> Paint & Coatings (Gallons, Square feet)</li>
                                        <li><Check size={16} /> Trim & Millwork (Linear feet, Pieces)</li>
                                    </ul>
                                </div>
                                <div className="included-category">
                                    <h4>MEP Systems</h4>
                                    <ul>
                                        <li><Check size={16} /> Electrical Rough-in (Outlets, Switches)</li>
                                        <li><Check size={16} /> Plumbing Rough-in (Fixtures, Pipe)</li>
                                        <li><Check size={16} /> HVAC Systems (Ductwork, Units)</li>
                                        <li><Check size={16} /> Fire Protection Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="case-study">
                            <h2>Success Story</h2>
                            <div className="case-study-card">
                                <div className="case-study-header">
                                    <Award size={32} />
                                    <div>
                                        <h3>Multi-Family Housing Project</h3>
                                        <p>Downtown Los Angeles</p>
                                    </div>
                                </div>
                                <div className="case-study-content">
                                    <p>Completed comprehensive takeoff for 120-unit apartment complex, delivering precise quantities that resulted in 8% cost savings through optimized material ordering and waste reduction.</p>
                                    <div className="case-results">
                                        <div className="result-item">
                                            <span className="result-number">$180,000</span>
                                            <span className="result-label">Cost Savings</span>
                                        </div>
                                        <div className="result-item">
                                            <span className="result-number">99.2%</span>
                                            <span className="result-label">Accuracy Achieved</span>
                                        </div>
                                        <div className="result-item">
                                            <span className="result-number">36hrs</span>
                                            <span className="result-label">Delivery Time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Sample Download */}
                        <section className="sample-download">
                            <div className="download-card">
                                <Download size={40} className="download-icon" />
                                <div className="download-content">
                                    <h3>Download Sample Takeoff Report</h3>
                                    <p>See a real example of our detailed construction takeoff work including material lists, quantities, and markup drawings.</p>
                                    <button className="btn btn-primary">Download PDF Sample</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="takeoff-sidebar">
                        <div className="pricing-card">
                            <h3>Pricing</h3>
                            <div className="price-display">
                                <span className="price">Starting from $200</span>
                                <span className="price-note">per project</span>
                            </div>
                            <ul className="pricing-features">
                                <li><Check size={16} /> Complete material takeoff</li>
                                <li><Check size={16} /> Color-coded markup drawings</li>
                                <li><Check size={16} /> Detailed Excel reports</li>
                                <li><Check size={16} /> 24-48 hour delivery</li>
                                <li><Check size={16} /> Free revisions</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary full-width">Get Quote</Link>
                        </div>

                        <div className="upload-card">
                            <Upload size={40} className="upload-icon" />
                            <h3>Ready to Start?</h3>
                            <p>Upload your plans and get a detailed takeoff quote within minutes.</p>
                            <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                        </div>

                        <div className="contact-card">
                            <h3>Need Help?</h3>
                            <p>Speak with our takeoff specialists about your project requirements.</p>
                            <div className="contact-info">
                                <p><strong>Phone:</strong> (555) 123-4567</p>
                                <p><strong>Email:</strong> takeoff@californiaestimators.com</p>
                            </div>
                            <Link to="/contact" className="btn btn-outline full-width">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConstructionTakeoff;