import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Download, Upload, Zap, Lightbulb, Shield, Wifi, Battery, Award } from 'lucide-react';
import './ElectricalEstimating.css';

const ElectricalEstimating = () => {
    return (
        <>
            <Helmet>
                <title>Electrical Estimating Services | California Estimators</title>
                <meta name="description" content="Professional electrical estimating services by licensed electricians. Precise device counts, wire measurements, and NEC code compliance." />
            </Helmet>

            {/* Hero Section */}
            <section className="electrical-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Electrical Estimating Services</h1>
                    <p className="hero-subtitle">Licensed electricians providing precise electrical estimates with NEC code compliance and smart building integration</p>
                    <div className="hero-features">
                        <div className="feature-item">
                            <Zap size={24} />
                            <span>Licensed Electricians</span>
                        </div>
                        <div className="feature-item">
                            <Shield size={24} />
                            <span>NEC Code Compliance</span>
                        </div>
                        <div className="feature-item">
                            <Lightbulb size={24} />
                            <span>Smart Building Ready</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div className="electrical-layout">
                    {/* Main Content */}
                    <div className="electrical-main">
                        {/* Service Overview */}
                        <section className="service-overview">
                            <h2>Licensed Electrical Professionals</h2>
                            <p>Don't rely on outdated square foot pricing methods. Get precise takeoff counts for all electrical devices, panels, feeders, and systems from our team of licensed electricians and electrical estimators. We provide detailed electrical estimates that account for code requirements, load calculations, and real-world installation conditions.</p>
                            
                            <div className="electrical-expertise">
                                <div className="expertise-card">
                                    <Zap size={32} className="expertise-icon" />
                                    <h3>Licensed Expertise</h3>
                                    <p>Our team includes California licensed electricians with extensive field experience and code knowledge</p>
                                </div>
                                <div className="expertise-card">
                                    <Shield size={32} className="expertise-icon" />
                                    <h3>Code Compliance</h3>
                                    <p>Thorough NEC and California electrical code compliance verification with load calculations</p>
                                </div>
                                <div className="expertise-card">
                                    <Lightbulb size={32} className="expertise-icon" />
                                    <h3>Modern Technology</h3>
                                    <p>Smart building integration, LED lighting design, and energy-efficient solutions</p>
                                </div>
                            </div>
                        </section>

                        {/* Electrical Systems */}
                        <section className="electrical-systems">
                            <h2>Complete Electrical System Coverage</h2>
                            <div className="systems-breakdown">
                                <div className="system-category power">
                                    <div className="category-header">
                                        <Zap size={32} />
                                        <h3>Power Distribution Systems</h3>
                                    </div>
                                    <div className="category-content">
                                        <div className="system-group">
                                            <h4>Main Distribution</h4>
                                            <ul>
                                                <li>Main electrical panels</li>
                                                <li>Distribution panels</li>
                                                <li>Switchboards</li>
                                                <li>Transformers</li>
                                                <li>Meter centers</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Branch Circuits</h4>
                                            <ul>
                                                <li>Receptacle circuits</li>
                                                <li>Dedicated equipment circuits</li>
                                                <li>HVAC electrical connections</li>
                                                <li>Kitchen appliance circuits</li>
                                                <li>Bathroom GFCI circuits</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Feeders & Conduits</h4>
                                            <ul>
                                                <li>Main service feeders</li>
                                                <li>Panel feeders</li>
                                                <li>Conduit systems</li>
                                                <li>Cable tray systems</li>
                                                <li>Underground electrical</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="system-category lighting">
                                    <div className="category-header">
                                        <Lightbulb size={32} />
                                        <h3>Lighting & Controls</h3>
                                    </div>
                                    <div className="category-content">
                                        <div className="system-group">
                                            <h4>Interior Lighting</h4>
                                            <ul>
                                                <li>LED recessed lighting</li>
                                                <li>Linear LED fixtures</li>
                                                <li>Pendant lighting</li>
                                                <li>Track lighting systems</li>
                                                <li>Decorative fixtures</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Exterior Lighting</h4>
                                            <ul>
                                                <li>Building facade lighting</li>
                                                <li>Parking lot lighting</li>
                                                <li>Landscape lighting</li>
                                                <li>Security lighting</li>
                                                <li>Emergency egress lighting</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Smart Controls</h4>
                                            <ul>
                                                <li>Occupancy sensors</li>
                                                <li>Daylight harvesting</li>
                                                <li>Dimming controls</li>
                                                <li>Wireless lighting controls</li>
                                                <li>Building automation integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="system-category safety">
                                    <div className="category-header">
                                        <Shield size={32} />
                                        <h3>Safety & Security Systems</h3>
                                    </div>
                                    <div className="category-content">
                                        <div className="system-group">
                                            <h4>Fire Alarm Systems</h4>
                                            <ul>
                                                <li>Fire alarm control panels</li>
                                                <li>Smoke detectors</li>
                                                <li>Heat detectors</li>
                                                <li>Manual pull stations</li>
                                                <li>Notification devices</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Security Systems</h4>
                                            <ul>
                                                <li>Security cameras</li>
                                                <li>Access control systems</li>
                                                <li>Intrusion detection</li>
                                                <li>Card readers</li>
                                                <li>Intercom systems</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Emergency Systems</h4>
                                            <ul>
                                                <li>Emergency generators</li>
                                                <li>UPS systems</li>
                                                <li>Transfer switches</li>
                                                <li>Emergency lighting</li>
                                                <li>Exit signs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="system-category technology">
                                    <div className="category-header">
                                        <Wifi size={32} />
                                        <h3>Technology & Communications</h3>
                                    </div>
                                    <div className="category-content">
                                        <div className="system-group">
                                            <h4>Data & Communications</h4>
                                            <ul>
                                                <li>Cat6/Cat6A cabling</li>
                                                <li>Fiber optic systems</li>
                                                <li>Network equipment rooms</li>
                                                <li>Wireless access points</li>
                                                <li>Telephone systems</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Audio/Visual Systems</h4>
                                            <ul>
                                                <li>Sound systems</li>
                                                <li>Video displays</li>
                                                <li>Conference room AV</li>
                                                <li>Digital signage</li>
                                                <li>Control systems</li>
                                            </ul>
                                        </div>
                                        <div className="system-group">
                                            <h4>Smart Building</h4>
                                            <ul>
                                                <li>Building automation wiring</li>
                                                <li>IoT device infrastructure</li>
                                                <li>Smart HVAC controls</li>
                                                <li>Energy monitoring</li>
                                                <li>Integrated building systems</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Estimating Methodology */}
                        <section className="estimating-methodology">
                            <h2>Our Electrical Estimating Methodology</h2>
                            <p>Electrical estimating requires precise device counts, accurate wire measurements, and thorough understanding of NEC code requirements. We use specialized electrical estimating software to trace circuits, calculate loads, and ensure code compliance.</p>
                            
                            <div className="methodology-steps">
                                <div className="method-step">
                                    <div className="step-badge">1</div>
                                    <div className="step-info">
                                        <h4>Plan Analysis & Load Calculations</h4>
                                        <p>Detailed review of electrical drawings with comprehensive load calculations and panel sizing verification</p>
                                    </div>
                                </div>
                                <div className="method-step">
                                    <div className="step-badge">2</div>
                                    <div className="step-info">
                                        <h4>Device Counting & Circuit Tracing</h4>
                                        <p>Precise counting of all electrical devices and accurate measurement of wire runs using specialized software</p>
                                    </div>
                                </div>
                                <div className="method-step">
                                    <div className="step-badge">3</div>
                                    <div className="step-info">
                                        <h4>Code Compliance Review</h4>
                                        <p>Thorough NEC and local code compliance verification with proper grounding and bonding calculations</p>
                                    </div>
                                </div>
                                <div className="method-step">
                                    <div className="step-badge">4</div>
                                    <div className="step-info">
                                        <h4>Pricing & Labor Analysis</h4>
                                        <p>Application of current material pricing and labor rates with productivity factors and installation methods</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="case-study">
                            <h2>Electrical Success Story</h2>
                            <div className="case-study-card">
                                <div className="case-header">
                                    <Award size={40} />
                                    <div className="case-details">
                                        <h3>Retail Shopping Center</h3>
                                        <p>Sacramento, California</p>
                                        <div className="case-stats">
                                            <span className="stat">80,000 sq ft</span>
                                            <span className="stat">$650,000 Contract</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="case-content">
                                    <p>Estimated electrical systems for 80,000 sq ft shopping center with complex lighting controls, security systems, and tenant power distribution. The project included energy-efficient LED lighting throughout, advanced security systems, and flexible tenant electrical infrastructure.</p>
                                    
                                    <div className="project-highlights">
                                        <h4>Project Complexity:</h4>
                                        <div className="highlights-grid">
                                            <div className="highlight-item">
                                                <Lightbulb size={20} />
                                                <span>1,200+ LED fixtures with smart controls</span>
                                            </div>
                                            <div className="highlight-item">
                                                <Shield size={20} />
                                                <span>Comprehensive security & fire alarm systems</span>
                                            </div>
                                            <div className="highlight-item">
                                                <Zap size={20} />
                                                <span>Flexible tenant electrical distribution</span>
                                            </div>
                                            <div className="highlight-item">
                                                <Battery size={20} />
                                                <span>Emergency power & UPS systems</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="case-results">
                                        <div className="result-box">
                                            <span className="result-value">$650,000</span>
                                            <span className="result-desc">Contract Won</span>
                                        </div>
                                        <div className="result-box">
                                            <span className="result-value">22%</span>
                                            <span className="result-desc">Profit Margin</span>
                                        </div>
                                        <div className="result-box">
                                            <span className="result-value">Zero</span>
                                            <span className="result-desc">Change Orders</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Energy Efficiency */}
                        <section className="energy-efficiency">
                            <h2>Energy Efficiency & Rebates</h2>
                            <p>We help identify energy-efficient electrical solutions and available utility rebates to maximize your project's value and sustainability.</p>
                            
                            <div className="efficiency-grid">
                                <div className="efficiency-item">
                                    <div className="efficiency-icon">💡</div>
                                    <h4>LED Lighting Upgrades</h4>
                                    <p>High-efficiency LED lighting with utility rebates up to $50 per fixture</p>
                                </div>
                                <div className="efficiency-item">
                                    <div className="efficiency-icon">🔌</div>
                                    <h4>Smart Controls</h4>
                                    <p>Occupancy sensors and daylight harvesting for additional energy savings</p>
                                </div>
                                <div className="efficiency-item">
                                    <div className="efficiency-icon">⚡</div>
                                    <h4>Power Quality</h4>
                                    <p>Power factor correction and harmonic mitigation for efficient operation</p>
                                </div>
                                <div className="efficiency-item">
                                    <div className="efficiency-icon">🔋</div>
                                    <h4>Energy Storage</h4>
                                    <p>Battery storage systems and EV charging infrastructure</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="electrical-sidebar">
                        <div className="pricing-card">
                            <h3>Electrical Pricing</h3>
                            <div className="price-display">
                                <span className="price">Starting at $200</span>
                                <span className="price-note">per project</span>
                            </div>
                            
                            <div className="pricing-tiers">
                                <div className="tier-item">
                                    <div className="tier-info">
                                        <strong>Residential</strong>
                                        <span>Up to 3,000 sq ft</span>
                                    </div>
                                    <span className="tier-price">$200</span>
                                </div>
                                <div className="tier-item">
                                    <div className="tier-info">
                                        <strong>Small Commercial</strong>
                                        <span>Up to 10,000 sq ft</span>
                                    </div>
                                    <span className="tier-price">$350</span>
                                </div>
                                <div className="tier-item">
                                    <div className="tier-info">
                                        <strong>Large Commercial</strong>
                                        <span>10,000+ sq ft</span>
                                    </div>
                                    <span className="tier-price">$500+</span>
                                </div>
                            </div>
                            
                            <Link to="/contact" className="btn btn-primary full-width">Get Quote</Link>
                        </div>

                        <div className="services-card">
                            <h3>What's Included</h3>
                            <ul className="services-list">
                                <li><Check size={16} /> Precise device counts</li>
                                <li><Check size={16} /> Wire run measurements</li>
                                <li><Check size={16} /> Load calculations</li>
                                <li><Check size={16} /> Panel schedules</li>
                                <li><Check size={16} /> Code compliance review</li>
                                <li><Check size={16} /> Energy efficiency analysis</li>
                                <li><Check size={16} /> Rebate identification</li>
                                <li><Check size={16} /> Detailed Excel reports</li>
                            </ul>
                        </div>

                        <div className="upload-card">
                            <Upload size={40} className="upload-icon" />
                            <h3>Upload Electrical Plans</h3>
                            <p>Get your electrical estimate started with detailed drawings and specifications.</p>
                            <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                        </div>

                        <div className="credentials-card">
                            <h3>Professional Credentials</h3>
                            <div className="credentials-list">
                                <div className="credential-item">
                                    <Zap size={16} />
                                    <span>California Licensed Electricians</span>
                                </div>
                                <div className="credential-item">
                                    <Shield size={16} />
                                    <span>NEC Code Certified</span>
                                </div>
                                <div className="credential-item">
                                    <Lightbulb size={16} />
                                    <span>LED Lighting Specialists</span>
                                </div>
                                <div className="credential-item">
                                    <Battery size={16} />
                                    <span>Energy Storage Certified</span>
                                </div>
                            </div>
                        </div>

                        <div className="software-card">
                            <h3>Estimating Software</h3>
                            <div className="software-list">
                                <div className="software-item">ConEst</div>
                                <div className="software-item">McCormick</div>
                                <div className="software-item">Accubid</div>
                                <div className="software-item">PlanSwift</div>
                                <div className="software-item">Bluebeam</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ElectricalEstimating;