import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Download, Upload, Zap, Droplets, Wind, Shield, Settings, Award } from 'lucide-react';
import './MEPEstimating.css';

const MEPEstimating = () => {
    return (
        <>
            <Helmet>
                <title>MEP Estimating Services | California Estimators</title>
                <meta name="description" content="Professional MEP estimating services by licensed professionals. Mechanical, Electrical, and Plumbing systems with BIM coordination and code compliance." />
            </Helmet>

            {/* Hero Section */}
            <section className="mep-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>MEP Estimating Services</h1>
                    <p className="hero-subtitle">Licensed professionals providing detailed MEP estimates with BIM coordination and code compliance</p>
                    <div className="hero-systems">
                        <div className="system-badge">
                            <Zap size={24} />
                            <span>Electrical</span>
                        </div>
                        <div className="system-badge">
                            <Droplets size={24} />
                            <span>Plumbing</span>
                        </div>
                        <div className="system-badge">
                            <Wind size={24} />
                            <span>HVAC</span>
                        </div>
                        <div className="system-badge">
                            <Shield size={24} />
                            <span>Fire Protection</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div className="mep-layout">
                    {/* Main Content */}
                    <div className="mep-main">
                        {/* Service Overview */}
                        <section className="service-overview">
                            <h2>Licensed MEP Professionals</h2>
                            <p>Our MEP estimators are licensed professionals with specialized expertise in mechanical, electrical, and plumbing systems. We provide detailed quantity takeoffs and cost estimates for complex building systems, ensuring your MEP bids are competitive, accurate, and profitable. Our team includes licensed electricians, plumbers, and HVAC technicians who understand real-world installation challenges.</p>
                            
                            <div className="mep-advantages">
                                <div className="advantage-card">
                                    <Settings size={32} className="advantage-icon" />
                                    <h3>Licensed Expertise</h3>
                                    <p>Our team includes licensed electricians, plumbers, and HVAC professionals with field experience</p>
                                </div>
                                <div className="advantage-card">
                                    <Shield size={32} className="advantage-icon" />
                                    <h3>Code Compliance</h3>
                                    <p>Thorough knowledge of NEC, UPC, UMC, and local code requirements for accurate estimates</p>
                                </div>
                                <div className="advantage-card">
                                    <Zap size={32} className="advantage-icon" />
                                    <h3>BIM Integration</h3>
                                    <p>Advanced BIM coordination and clash detection to prevent costly field conflicts</p>
                                </div>
                            </div>
                        </section>

                        {/* MEP Systems */}
                        <section className="mep-systems">
                            <h2>Comprehensive MEP System Coverage</h2>
                            <div className="systems-grid">
                                <div className="system-card electrical">
                                    <div className="system-header">
                                        <Zap size={40} />
                                        <h3>Electrical Systems</h3>
                                    </div>
                                    <div className="system-content">
                                        <h4>Power Distribution</h4>
                                        <ul>
                                            <li>Main electrical panels</li>
                                            <li>Distribution panels</li>
                                            <li>Feeders & branch circuits</li>
                                            <li>Transformers & switchgear</li>
                                        </ul>
                                        
                                        <h4>Lighting Systems</h4>
                                        <ul>
                                            <li>LED lighting fixtures</li>
                                            <li>Emergency lighting</li>
                                            <li>Lighting controls</li>
                                            <li>Daylight sensors</li>
                                        </ul>
                                        
                                        <h4>Specialty Systems</h4>
                                        <ul>
                                            <li>Fire alarm systems</li>
                                            <li>Security systems</li>
                                            <li>Data & communications</li>
                                            <li>Audio/visual systems</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="system-card plumbing">
                                    <div className="system-header">
                                        <Droplets size={40} />
                                        <h3>Plumbing Systems</h3>
                                    </div>
                                    <div className="system-content">
                                        <h4>Water Systems</h4>
                                        <ul>
                                            <li>Domestic water piping</li>
                                            <li>Hot water systems</li>
                                            <li>Water heaters & boilers</li>
                                            <li>Pumps & pressure tanks</li>
                                        </ul>
                                        
                                        <h4>Waste Systems</h4>
                                        <ul>
                                            <li>Sanitary waste piping</li>
                                            <li>Storm drainage systems</li>
                                            <li>Vent piping systems</li>
                                            <li>Grease interceptors</li>
                                        </ul>
                                        
                                        <h4>Fixtures & Equipment</h4>
                                        <ul>
                                            <li>Plumbing fixtures</li>
                                            <li>Faucets & valves</li>
                                            <li>Water closets & urinals</li>
                                            <li>Specialty equipment</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="system-card hvac">
                                    <div className="system-header">
                                        <Wind size={40} />
                                        <h3>HVAC Systems</h3>
                                    </div>
                                    <div className="system-content">
                                        <h4>Air Distribution</h4>
                                        <ul>
                                            <li>Ductwork systems</li>
                                            <li>Air handling units</li>
                                            <li>Diffusers & grilles</li>
                                            <li>Dampers & controls</li>
                                        </ul>
                                        
                                        <h4>Equipment</h4>
                                        <ul>
                                            <li>Rooftop units</li>
                                            <li>Split systems</li>
                                            <li>Chillers & boilers</li>
                                            <li>Heat pumps</li>
                                        </ul>
                                        
                                        <h4>Controls & Automation</h4>
                                        <ul>
                                            <li>Building automation</li>
                                            <li>Thermostats</li>
                                            <li>Variable frequency drives</li>
                                            <li>Energy management</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="system-card fire-protection">
                                    <div className="system-header">
                                        <Shield size={40} />
                                        <h3>Fire Protection</h3>
                                    </div>
                                    <div className="system-content">
                                        <h4>Sprinkler Systems</h4>
                                        <ul>
                                            <li>Wet sprinkler systems</li>
                                            <li>Dry sprinkler systems</li>
                                            <li>Deluge systems</li>
                                            <li>Pre-action systems</li>
                                        </ul>
                                        
                                        <h4>Detection Systems</h4>
                                        <ul>
                                            <li>Smoke detectors</li>
                                            <li>Heat detectors</li>
                                            <li>Fire alarm panels</li>
                                            <li>Notification devices</li>
                                        </ul>
                                        
                                        <h4>Suppression Systems</h4>
                                        <ul>
                                            <li>Clean agent systems</li>
                                            <li>CO2 suppression</li>
                                            <li>Foam systems</li>
                                            <li>Kitchen hood systems</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Estimating Process */}
                        <section className="estimating-process">
                            <h2>Our MEP Estimating Process</h2>
                            <div className="process-flow">
                                <div className="process-step">
                                    <div className="step-icon">
                                        <span>1</span>
                                    </div>
                                    <div className="step-content">
                                        <h4>Plan Analysis</h4>
                                        <p>Detailed review of MEP drawings, specifications, and coordination requirements</p>
                                    </div>
                                </div>
                                <div className="process-arrow">→</div>
                                <div className="process-step">
                                    <div className="step-icon">
                                        <span>2</span>
                                    </div>
                                    <div className="step-content">
                                        <h4>System Takeoff</h4>
                                        <p>Precise measurement of all MEP components using specialized software</p>
                                    </div>
                                </div>
                                <div className="process-arrow">→</div>
                                <div className="process-step">
                                    <div className="step-icon">
                                        <span>3</span>
                                    </div>
                                    <div className="step-content">
                                        <h4>Code Review</h4>
                                        <p>Verification of code compliance and coordination requirements</p>
                                    </div>
                                </div>
                                <div className="process-arrow">→</div>
                                <div className="process-step">
                                    <div className="step-icon">
                                        <span>4</span>
                                    </div>
                                    <div className="step-content">
                                        <h4>Cost Analysis</h4>
                                        <p>Application of current pricing and labor rates with productivity factors</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="case-study">
                            <h2>MEP Success Story</h2>
                            <div className="case-study-card">
                                <div className="case-header">
                                    <Award size={32} />
                                    <div className="case-info">
                                        <h3>Medical Office Building</h3>
                                        <p>Orange County, California</p>
                                        <span className="case-value">$1.8M MEP Contract</span>
                                    </div>
                                </div>
                                
                                <div className="case-body">
                                    <div className="case-description">
                                        <p>Estimated complex MEP systems for 50,000 sq ft medical facility including medical gas systems, specialized HVAC with infection control, emergency power systems, and advanced fire protection. The project required coordination with medical equipment and strict code compliance.</p>
                                    </div>
                                    
                                    <div className="case-systems">
                                        <h4>Complex Systems Included:</h4>
                                        <div className="systems-list">
                                            <div className="system-item">
                                                <Droplets size={20} />
                                                <span>Medical Gas Systems (O2, Vacuum, Compressed Air)</span>
                                            </div>
                                            <div className="system-item">
                                                <Wind size={20} />
                                                <span>Specialized HVAC with Infection Control</span>
                                            </div>
                                            <div className="system-item">
                                                <Zap size={20} />
                                                <span>Emergency Power & UPS Systems</span>
                                            </div>
                                            <div className="system-item">
                                                <Shield size={20} />
                                                <span>Advanced Fire Protection & Alarms</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="case-results">
                                        <div className="result-metric">
                                            <span className="metric-value">$1.8M</span>
                                            <span className="metric-label">Contract Secured</span>
                                        </div>
                                        <div className="result-metric">
                                            <span className="metric-value">15%</span>
                                            <span className="metric-label">Profit Margin</span>
                                        </div>
                                        <div className="result-metric">
                                            <span className="metric-value">Zero</span>
                                            <span className="metric-label">Code Issues</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Energy Efficiency */}
                        <section className="energy-efficiency">
                            <h2>Energy Efficiency & Sustainability</h2>
                            <p>We help identify energy-efficient solutions and available rebates to optimize your MEP systems for performance and cost savings.</p>
                            
                            <div className="efficiency-features">
                                <div className="efficiency-card">
                                    <h4>🌟 Energy Code Compliance</h4>
                                    <p>California Title 24 compliance analysis and energy modeling support</p>
                                </div>
                                <div className="efficiency-card">
                                    <h4>💡 LED Lighting Design</h4>
                                    <p>High-efficiency LED lighting with smart controls and daylight harvesting</p>
                                </div>
                                <div className="efficiency-card">
                                    <h4>❄️ High-Efficiency HVAC</h4>
                                    <p>Variable refrigerant flow systems and energy recovery ventilation</p>
                                </div>
                                <div className="efficiency-card">
                                    <h4>💰 Utility Rebates</h4>
                                    <p>Identification and calculation of available utility rebates and incentives</p>
                                </div>
                                <div className="efficiency-card">
                                    <h4>🔋 Renewable Energy</h4>
                                    <p>Solar PV systems, battery storage, and EV charging infrastructure</p>
                                </div>
                                <div className="efficiency-card">
                                    <h4>📊 Building Automation</h4>
                                    <p>Smart building controls and energy management systems</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="mep-sidebar">
                        <div className="pricing-card">
                            <h3>MEP Pricing</h3>
                            <div className="price-display">
                                <span className="price">Starting at $250</span>
                                <span className="price-note">per trade</span>
                            </div>
                            
                            <div className="trade-pricing">
                                <div className="trade-item">
                                    <span className="trade-name">Electrical Only</span>
                                    <span className="trade-price">$250</span>
                                </div>
                                <div className="trade-item">
                                    <span className="trade-name">Plumbing Only</span>
                                    <span className="trade-price">$250</span>
                                </div>
                                <div className="trade-item">
                                    <span className="trade-name">HVAC Only</span>
                                    <span className="trade-price">$300</span>
                                </div>
                                <div className="trade-item">
                                    <span className="trade-name">All MEP Trades</span>
                                    <span className="trade-price">$650</span>
                                </div>
                            </div>
                            
                            <Link to="/contact" className="btn btn-primary full-width">Get Quote</Link>
                        </div>

                        <div className="deliverables-card">
                            <h3>MEP Deliverables</h3>
                            <ul className="deliverables-list">
                                <li><Check size={16} /> Detailed quantity takeoffs</li>
                                <li><Check size={16} /> Material & labor pricing</li>
                                <li><Check size={16} /> Code compliance review</li>
                                <li><Check size={16} /> Coordination notes</li>
                                <li><Check size={16} /> Energy analysis</li>
                                <li><Check size={16} /> Rebate identification</li>
                                <li><Check size={16} /> Excel & PDF reports</li>
                            </ul>
                        </div>

                        <div className="upload-card">
                            <Upload size={40} className="upload-icon" />
                            <h3>Upload MEP Plans</h3>
                            <p>Get your MEP estimate started with detailed drawings and specifications.</p>
                            <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                        </div>

                        <div className="licenses-card">
                            <h3>Professional Licenses</h3>
                            <div className="license-list">
                                <div className="license-item">
                                    <Zap size={16} />
                                    <span>Licensed Electricians</span>
                                </div>
                                <div className="license-item">
                                    <Droplets size={16} />
                                    <span>Licensed Plumbers</span>
                                </div>
                                <div className="license-item">
                                    <Wind size={16} />
                                    <span>HVAC Technicians</span>
                                </div>
                                <div className="license-item">
                                    <Shield size={16} />
                                    <span>Fire Protection Engineers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MEPEstimating;