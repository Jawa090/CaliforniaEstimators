import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Download, Upload, Factory, Shield, Zap, Wrench, AlertTriangle, Award } from 'lucide-react';
import './IndustrialEstimating.css';

const IndustrialEstimating = () => {
    return (
        <>
            <Helmet>
                <title>Industrial Estimating Services | California Estimators</title>
                <meta name="description" content="Specialized industrial estimating services for factories, warehouses, and processing plants. Expert knowledge of heavy construction and complex systems." />
            </Helmet>

            {/* Hero Section */}
            <section className="industrial-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Industrial Estimating Services</h1>
                    <p className="hero-subtitle">Specialized expertise in heavy construction, complex systems integration, and regulatory compliance</p>
                    <div className="hero-certifications">
                        <div className="cert-badge">
                            <Shield size={20} />
                            <span>Safety Certified</span>
                        </div>
                        <div className="cert-badge">
                            <Factory size={20} />
                            <span>Industrial Expertise</span>
                        </div>
                        <div className="cert-badge">
                            <AlertTriangle size={20} />
                            <span>Regulatory Compliance</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div className="industrial-layout">
                    {/* Main Content */}
                    <div className="industrial-main">
                        {/* Service Overview */}
                        <section className="service-overview">
                            <h2>Specialized Industrial Construction Expertise</h2>
                            <p>Industrial projects demand specialized expertise in heavy construction, complex systems integration, and regulatory compliance. Our industrial estimating team brings decades of experience in manufacturing facilities, warehouses, processing plants, and distribution centers. We understand the unique challenges of industrial construction including heavy equipment installation, specialized utilities, and stringent safety requirements.</p>
                            
                            <div className="industrial-specialties">
                                <div className="specialty-card">
                                    <Factory size={40} className="specialty-icon" />
                                    <h3>Manufacturing Facilities</h3>
                                    <p>Production plants, assembly facilities, and clean room environments with specialized equipment requirements</p>
                                </div>
                                <div className="specialty-card">
                                    <Wrench size={40} className="specialty-icon" />
                                    <h3>Processing Plants</h3>
                                    <p>Food processing, chemical plants, and pharmaceutical facilities with complex utility and safety systems</p>
                                </div>
                                <div className="specialty-card">
                                    <Shield size={40} className="specialty-icon" />
                                    <h3>Warehouses & Distribution</h3>
                                    <p>Large-scale storage facilities, distribution centers, and logistics hubs with material handling systems</p>
                                </div>
                            </div>
                        </section>

                        {/* Industrial Challenges */}
                        <section className="industrial-challenges">
                            <h2>Understanding Industrial Complexity</h2>
                            <p>Industrial construction presents unique challenges that require specialized knowledge and experience. Our team understands these complexities and factors them into every estimate.</p>
                            
                            <div className="challenges-grid">
                                <div className="challenge-item">
                                    <div className="challenge-icon">
                                        <Zap size={24} />
                                    </div>
                                    <h4>High-Voltage Electrical</h4>
                                    <p>Complex electrical systems with high-voltage requirements, specialized switchgear, and industrial-grade components</p>
                                </div>
                                <div className="challenge-item">
                                    <div className="challenge-icon">
                                        <Wrench size={24} />
                                    </div>
                                    <h4>Heavy Equipment Integration</h4>
                                    <p>Coordination with equipment manufacturers, specialized foundations, and crane requirements for installation</p>
                                </div>
                                <div className="challenge-item">
                                    <div className="challenge-icon">
                                        <Shield size={24} />
                                    </div>
                                    <h4>Safety & Compliance</h4>
                                    <p>OSHA requirements, environmental regulations, and industry-specific safety standards and protocols</p>
                                </div>
                                <div className="challenge-item">
                                    <div className="challenge-icon">
                                        <AlertTriangle size={24} />
                                    </div>
                                    <h4>Operational Continuity</h4>
                                    <p>Phased construction to minimize operational disruptions and maintain production schedules</p>
                                </div>
                            </div>
                        </section>

                        {/* Comprehensive Scope */}
                        <section className="comprehensive-scope">
                            <h2>Complete Industrial Construction Scope</h2>
                            <div className="scope-sections">
                                <div className="scope-section">
                                    <h3>🏗️ Heavy Structural Systems</h3>
                                    <div className="scope-grid">
                                        <div className="scope-item">
                                            <h5>Foundation Systems</h5>
                                            <ul>
                                                <li>Mass concrete foundations</li>
                                                <li>Deep foundation systems</li>
                                                <li>Equipment pads & isolation</li>
                                                <li>Vibration control systems</li>
                                            </ul>
                                        </div>
                                        <div className="scope-item">
                                            <h5>Structural Steel</h5>
                                            <ul>
                                                <li>Heavy structural steel</li>
                                                <li>Crane rails & supports</li>
                                                <li>Mezzanine structures</li>
                                                <li>Equipment platforms</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="scope-section">
                                    <h3>🏭 Building Envelope</h3>
                                    <div className="scope-grid">
                                        <div className="scope-item">
                                            <h5>Pre-Engineered Buildings</h5>
                                            <ul>
                                                <li>PEMB structural systems</li>
                                                <li>Insulated metal panels</li>
                                                <li>Industrial roofing systems</li>
                                                <li>High-performance doors</li>
                                            </ul>
                                        </div>
                                        <div className="scope-item">
                                            <h5>Specialized Flooring</h5>
                                            <ul>
                                                <li>Epoxy floor systems</li>
                                                <li>Polished concrete</li>
                                                <li>Chemical-resistant flooring</li>
                                                <li>Anti-static flooring</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="scope-section">
                                    <h3>⚡ Industrial MEP Systems</h3>
                                    <div className="scope-grid">
                                        <div className="scope-item">
                                            <h5>Electrical Systems</h5>
                                            <ul>
                                                <li>High-voltage distribution</li>
                                                <li>Motor control centers</li>
                                                <li>Emergency power systems</li>
                                                <li>Industrial lighting</li>
                                            </ul>
                                        </div>
                                        <div className="scope-item">
                                            <h5>Process Systems</h5>
                                            <ul>
                                                <li>Process piping systems</li>
                                                <li>Compressed air systems</li>
                                                <li>Steam & chilled water</li>
                                                <li>Specialty gas systems</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="scope-section">
                                    <h3>🛡️ Safety & Environmental</h3>
                                    <div className="scope-grid">
                                        <div className="scope-item">
                                            <h5>Fire Protection</h5>
                                            <ul>
                                                <li>Deluge sprinkler systems</li>
                                                <li>Foam suppression systems</li>
                                                <li>Gas suppression systems</li>
                                                <li>Industrial fire alarms</li>
                                            </ul>
                                        </div>
                                        <div className="scope-item">
                                            <h5>Environmental Controls</h5>
                                            <ul>
                                                <li>Dust collection systems</li>
                                                <li>Fume extraction systems</li>
                                                <li>Air scrubbers</li>
                                                <li>Waste treatment systems</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="case-study">
                            <h2>Industrial Success Story</h2>
                            <div className="case-study-card">
                                <div className="case-header">
                                    <Award size={32} className="case-icon" />
                                    <div className="case-title">
                                        <h3>Food Processing Facility</h3>
                                        <p>Central Valley, California</p>
                                    </div>
                                    <div className="case-value">$12M Project</div>
                                </div>
                                
                                <div className="case-body">
                                    <div className="case-description">
                                        <p>Estimated 150,000 sq ft food processing plant with specialized equipment, clean rooms, and complex utility requirements. The project included USDA-compliant design, specialized refrigeration systems, and complex wastewater treatment facilities.</p>
                                    </div>
                                    
                                    <div className="case-features">
                                        <h4>Project Highlights:</h4>
                                        <div className="features-grid">
                                            <div className="feature">
                                                <span className="feature-icon">🏭</span>
                                                <span>150,000 sq ft processing facility</span>
                                            </div>
                                            <div className="feature">
                                                <span className="feature-icon">❄️</span>
                                                <span>Multi-temperature refrigeration zones</span>
                                            </div>
                                            <div className="feature">
                                                <span className="feature-icon">🧪</span>
                                                <span>USDA-compliant clean rooms</span>
                                            </div>
                                            <div className="feature">
                                                <span className="feature-icon">💧</span>
                                                <span>Advanced wastewater treatment</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="case-results">
                                        <div className="result">
                                            <span className="result-number">$12M</span>
                                            <span className="result-label">Project Awarded</span>
                                        </div>
                                        <div className="result">
                                            <span className="result-number">Zero</span>
                                            <span className="result-label">Compliance Issues</span>
                                        </div>
                                        <div className="result">
                                            <span className="result-number">On-Time</span>
                                            <span className="result-label">Delivery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Regulatory Expertise */}
                        <section className="regulatory-expertise">
                            <h2>Regulatory Compliance & Permitting</h2>
                            <p>Industrial projects require extensive regulatory compliance. Our team has deep knowledge of applicable codes and regulations.</p>
                            
                            <div className="regulatory-grid">
                                <div className="reg-card">
                                    <h4>Environmental Regulations</h4>
                                    <ul>
                                        <li>EPA compliance requirements</li>
                                        <li>Air quality management</li>
                                        <li>Wastewater discharge permits</li>
                                        <li>Hazardous material handling</li>
                                    </ul>
                                </div>
                                <div className="reg-card">
                                    <h4>Safety Standards</h4>
                                    <ul>
                                        <li>OSHA industrial standards</li>
                                        <li>Process safety management</li>
                                        <li>Emergency response planning</li>
                                        <li>Worker safety protocols</li>
                                    </ul>
                                </div>
                                <div className="reg-card">
                                    <h4>Industry-Specific Codes</h4>
                                    <ul>
                                        <li>FDA food facility requirements</li>
                                        <li>Pharmaceutical GMP standards</li>
                                        <li>Chemical plant safety codes</li>
                                        <li>Clean room classifications</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="industrial-sidebar">
                        <div className="pricing-card">
                            <h3>Industrial Pricing</h3>
                            <div className="price-display">
                                <span className="price">Custom Quote</span>
                                <span className="price-note">Required for industrial projects</span>
                            </div>
                            <div className="pricing-factors">
                                <h4>Pricing Factors:</h4>
                                <ul>
                                    <li>Project size & complexity</li>
                                    <li>Specialized equipment requirements</li>
                                    <li>Regulatory compliance needs</li>
                                    <li>Site conditions & access</li>
                                    <li>Schedule requirements</li>
                                </ul>
                            </div>
                            <Link to="/contact" className="btn btn-primary full-width">Request Quote</Link>
                        </div>

                        <div className="expertise-card">
                            <h3>Our Industrial Expertise</h3>
                            <div className="expertise-list">
                                <div className="expertise-item">
                                    <Factory size={20} />
                                    <span>Manufacturing Plants</span>
                                </div>
                                <div className="expertise-item">
                                    <Wrench size={20} />
                                    <span>Processing Facilities</span>
                                </div>
                                <div className="expertise-item">
                                    <Shield size={20} />
                                    <span>Warehouses & Distribution</span>
                                </div>
                                <div className="expertise-item">
                                    <Zap size={20} />
                                    <span>Power Generation</span>
                                </div>
                                <div className="expertise-item">
                                    <AlertTriangle size={20} />
                                    <span>Hazardous Materials</span>
                                </div>
                            </div>
                        </div>

                        <div className="upload-card">
                            <Upload size={40} className="upload-icon" />
                            <h3>Start Your Industrial Project</h3>
                            <p>Upload your industrial plans for a detailed consultation and quote.</p>
                            <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                        </div>

                        <div className="certifications-card">
                            <h3>Certifications & Standards</h3>
                            <div className="cert-list">
                                <div className="cert-item">✓ OSHA 30-Hour Certified</div>
                                <div className="cert-item">✓ EPA Compliance Training</div>
                                <div className="cert-item">✓ Industrial Safety Certified</div>
                                <div className="cert-item">✓ Process Safety Management</div>
                                <div className="cert-item">✓ Hazmat Handling Certified</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndustrialEstimating;