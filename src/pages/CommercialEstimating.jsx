import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Download, Upload, Building2, Calculator, Award, TrendingUp, Users } from 'lucide-react';
import './CommercialEstimating.css';

const CommercialEstimating = () => {
    return (
        <>
            <Helmet>
                <title>Commercial Estimating Services | California Estimators</title>
                <meta name="description" content="Professional commercial estimating services for office buildings, retail centers, and institutional projects. CSI division-based estimates." />
            </Helmet>

            {/* Hero Section */}
            <section className="commercial-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Commercial Estimating Services</h1>
                    <p className="hero-subtitle">Comprehensive cost estimates for commercial builds with institutional-grade accuracy</p>
                    <div className="hero-badges">
                        <div className="badge-item">
                            <Building2 size={24} />
                            <span>$2.5B+ Projects Estimated</span>
                        </div>
                        <div className="badge-item">
                            <Users size={24} />
                            <span>500+ Commercial Clients</span>
                        </div>
                        <div className="badge-item">
                            <TrendingUp size={24} />
                            <span>85% Win Rate</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div className="commercial-layout">
                    {/* Main Content */}
                    <div className="commercial-main">
                        {/* Service Overview */}
                        <section className="service-overview">
                            <h2>Professional Commercial Estimating</h2>
                            <p>From office buildings to retail centers, our commercial estimating services cover all trades with institutional-grade accuracy. We provide CSI division-based estimates perfect for GC bidding, ensuring you have a complete picture of project scope, risks, and opportunities. Our commercial team has estimated over $2.5 billion in commercial projects across California.</p>
                            
                            <div className="commercial-types">
                                <div className="type-card">
                                    <Building2 size={40} />
                                    <h3>Office Buildings</h3>
                                    <p>Multi-story office complexes, corporate headquarters, and business parks</p>
                                </div>
                                <div className="type-card">
                                    <Building2 size={40} />
                                    <h3>Retail Centers</h3>
                                    <p>Shopping malls, strip centers, big-box stores, and specialty retail</p>
                                </div>
                                <div className="type-card">
                                    <Building2 size={40} />
                                    <h3>Institutional</h3>
                                    <p>Schools, hospitals, government buildings, and public facilities</p>
                                </div>
                                <div className="type-card">
                                    <Building2 size={40} />
                                    <h3>Mixed-Use</h3>
                                    <p>Combined residential, commercial, and office developments</p>
                                </div>
                            </div>
                        </section>

                        {/* CSI Divisions */}
                        <section className="csi-divisions">
                            <h2>Complete CSI Division Coverage</h2>
                            <p>We provide detailed estimates following CSI MasterFormat divisions, ensuring comprehensive coverage of all project elements.</p>
                            
                            <div className="divisions-grid">
                                <div className="division-group">
                                    <h4>General Requirements</h4>
                                    <ul>
                                        <li><Check size={14} /> General Conditions</li>
                                        <li><Check size={14} /> Project Management</li>
                                        <li><Check size={14} /> Quality Requirements</li>
                                        <li><Check size={14} /> Temporary Facilities</li>
                                    </ul>
                                </div>
                                <div className="division-group">
                                    <h4>Site Construction</h4>
                                    <ul>
                                        <li><Check size={14} /> Site Preparation</li>
                                        <li><Check size={14} /> Earthwork & Excavation</li>
                                        <li><Check size={14} /> Utilities & Infrastructure</li>
                                        <li><Check size={14} /> Paving & Landscaping</li>
                                    </ul>
                                </div>
                                <div className="division-group">
                                    <h4>Structural Systems</h4>
                                    <ul>
                                        <li><Check size={14} /> Concrete & Masonry</li>
                                        <li><Check size={14} /> Structural Steel</li>
                                        <li><Check size={14} /> Wood & Plastics</li>
                                        <li><Check size={14} /> Thermal & Moisture</li>
                                    </ul>
                                </div>
                                <div className="division-group">
                                    <h4>Envelope Systems</h4>
                                    <ul>
                                        <li><Check size={14} /> Doors & Windows</li>
                                        <li><Check size={14} /> Finishes & Specialties</li>
                                        <li><Check size={14} /> Equipment & Furnishings</li>
                                        <li><Check size={14} /> Special Construction</li>
                                    </ul>
                                </div>
                                <div className="division-group">
                                    <h4>MEP Systems</h4>
                                    <ul>
                                        <li><Check size={14} /> Fire Suppression</li>
                                        <li><Check size={14} /> Plumbing Systems</li>
                                        <li><Check size={14} /> HVAC Systems</li>
                                        <li><Check size={14} /> Electrical Systems</li>
                                    </ul>
                                </div>
                                <div className="division-group">
                                    <h4>Technology Systems</h4>
                                    <ul>
                                        <li><Check size={14} /> Communications</li>
                                        <li><Check size={14} /> Electronic Safety</li>
                                        <li><Check size={14} /> Integrated Automation</li>
                                        <li><Check size={14} /> Transportation</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Our Process */}
                        <section className="commercial-process">
                            <h2>Our Commercial Estimating Process</h2>
                            <div className="process-timeline">
                                <div className="timeline-item">
                                    <div className="timeline-marker">1</div>
                                    <div className="timeline-content">
                                        <h4>Project Analysis</h4>
                                        <p>Comprehensive review of architectural, structural, and MEP drawings. Analysis of specifications, addenda, and project requirements.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">2</div>
                                    <div className="timeline-content">
                                        <h4>Quantity Takeoff</h4>
                                        <p>Detailed measurement and counting using advanced software. CSI division-based organization with waste factors and constructability analysis.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">3</div>
                                    <div className="timeline-content">
                                        <h4>Cost Analysis</h4>
                                        <p>Application of current market pricing, labor rates, and equipment costs. Prevailing wage calculations and union considerations.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">4</div>
                                    <div className="timeline-content">
                                        <h4>Risk Assessment</h4>
                                        <p>Identification of project risks, contingencies, and value engineering opportunities. Schedule impact analysis and coordination requirements.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">5</div>
                                    <div className="timeline-content">
                                        <h4>Final Delivery</h4>
                                        <p>Comprehensive estimate package with detailed breakdowns, backup documentation, and bid support materials.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="case-study">
                            <h2>Featured Project Success</h2>
                            <div className="case-study-card">
                                <div className="case-study-image">
                                    <img src="https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2677&auto=format&fit=crop" alt="Tech Campus" />
                                    <div className="project-badge">$5.2M Project</div>
                                </div>
                                <div className="case-study-content">
                                    <h3>Tech Campus Headquarters</h3>
                                    <p className="project-location">San Jose, Silicon Valley</p>
                                    <p>Estimated 200,000 sq ft office complex with advanced MEP systems, helping client win $5.2M contract with competitive yet profitable pricing. The project included complex technology infrastructure, sustainable building systems, and specialized laboratory spaces.</p>
                                    
                                    <div className="project-details">
                                        <div className="detail-item">
                                            <span className="detail-label">Project Size:</span>
                                            <span className="detail-value">200,000 sq ft</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Contract Value:</span>
                                            <span className="detail-value">$5.2 Million</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Profit Margin:</span>
                                            <span className="detail-value">12%</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Delivery Time:</span>
                                            <span className="detail-value">72 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Value Engineering */}
                        <section className="value-engineering">
                            <h2>Value Engineering Services</h2>
                            <p>We don't just estimate - we help optimize your project costs through strategic value engineering recommendations.</p>
                            
                            <div className="ve-services">
                                <div className="ve-card">
                                    <Calculator size={32} />
                                    <h4>Cost Optimization</h4>
                                    <p>Identify opportunities to reduce costs without compromising quality or functionality.</p>
                                </div>
                                <div className="ve-card">
                                    <TrendingUp size={32} />
                                    <h4>Alternative Materials</h4>
                                    <p>Suggest equivalent materials and systems that offer better value or performance.</p>
                                </div>
                                <div className="ve-card">
                                    <Building2 size={32} />
                                    <h4>System Integration</h4>
                                    <p>Optimize building systems for efficiency and reduced installation costs.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="commercial-sidebar">
                        <div className="pricing-card">
                            <h3>Commercial Pricing</h3>
                            <div className="price-display">
                                <span className="price">Starting from $300</span>
                                <span className="price-note">per project</span>
                            </div>
                            <div className="pricing-tiers">
                                <div className="tier">
                                    <strong>Small Commercial</strong>
                                    <span>Up to 10,000 sq ft - $300</span>
                                </div>
                                <div className="tier">
                                    <strong>Medium Commercial</strong>
                                    <span>10,000-50,000 sq ft - $500</span>
                                </div>
                                <div className="tier">
                                    <strong>Large Commercial</strong>
                                    <span>50,000+ sq ft - Custom Quote</span>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary full-width">Get Quote</Link>
                        </div>

                        <div className="services-included">
                            <h3>What's Included</h3>
                            <ul>
                                <li><Check size={16} /> Complete CSI breakdown</li>
                                <li><Check size={16} /> Prevailing wage calculations</li>
                                <li><Check size={16} /> Permit cost estimates</li>
                                <li><Check size={16} /> Risk assessment</li>
                                <li><Check size={16} /> Value engineering</li>
                                <li><Check size={16} /> Bid support meeting</li>
                                <li><Check size={16} /> Excel & PDF deliverables</li>
                            </ul>
                        </div>

                        <div className="upload-card">
                            <Upload size={40} className="upload-icon" />
                            <h3>Upload Your Plans</h3>
                            <p>Get started with your commercial estimate today.</p>
                            <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                        </div>

                        <div className="expertise-card">
                            <h3>Our Expertise</h3>
                            <div className="expertise-stats">
                                <div className="stat">
                                    <span className="stat-number">$2.5B+</span>
                                    <span className="stat-label">Projects Estimated</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Commercial Clients</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">85%</span>
                                    <span className="stat-label">Win Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommercialEstimating;