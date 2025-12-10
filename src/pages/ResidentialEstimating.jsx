import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Download, Upload, Home, Heart, DollarSign, Clock, Users, Star } from 'lucide-react';
import './ResidentialEstimating.css';

const ResidentialEstimating = () => {
    return (
        <>
            <Helmet>
                <title>Residential Estimating Services | California Estimators</title>
                <meta name="description" content="Professional residential estimating services for new homes, renovations, and ADUs. Builder-ready estimates with homeowner presentation formats." />
            </Helmet>

            {/* Hero Section */}
            <section className="residential-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Residential Estimating Services</h1>
                    <p className="hero-subtitle">Builder-ready estimates for new homes, renovations, and ADUs with homeowner presentation formats</p>
                    <div className="hero-features">
                        <div className="feature-badge">
                            <Home size={20} />
                            <span>All Home Types</span>
                        </div>
                        <div className="feature-badge">
                            <Clock size={20} />
                            <span>24-48 Hour Delivery</span>
                        </div>
                        <div className="feature-badge">
                            <DollarSign size={20} />
                            <span>Starting at $150</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container section-padding">
                <div className="residential-layout">
                    {/* Main Content */}
                    <div className="residential-main">
                        {/* Service Overview */}
                        <section className="service-overview">
                            <h2>Professional Residential Estimating</h2>
                            <p>We help home builders, remodelers, and architects with quick and accurate estimates that win projects and maintain healthy profit margins. Whether it's a single-family home, multi-unit development, ADU, or major renovation, we provide builder-ready estimates that integrate seamlessly with your workflow and client presentations.</p>
                            
                            <div className="residential-benefits">
                                <div className="benefit-card">
                                    <Heart size={32} className="benefit-icon" />
                                    <h3>Homeowner-Friendly</h3>
                                    <p>Professional presentation formats that help close deals with homeowners</p>
                                </div>
                                <div className="benefit-card">
                                    <Users size={32} className="benefit-icon" />
                                    <h3>Builder Integration</h3>
                                    <p>Compatible with BuilderTrend, CoConstruct, and other popular builder software</p>
                                </div>
                                <div className="benefit-card">
                                    <Star size={32} className="benefit-icon" />
                                    <h3>Profit Optimization</h3>
                                    <p>Detailed allowance schedules and change order templates to maximize profits</p>
                                </div>
                            </div>
                        </section>

                        {/* Project Types */}
                        <section className="project-types">
                            <h2>Residential Project Types We Serve</h2>
                            <div className="types-grid">
                                <div className="type-card">
                                    <div className="type-icon">
                                        <Home size={40} />
                                    </div>
                                    <h3>New Construction</h3>
                                    <p>Single-family homes, custom builds, and spec houses from foundation to finish</p>
                                    <ul>
                                        <li>Custom Homes</li>
                                        <li>Production Homes</li>
                                        <li>Luxury Estates</li>
                                        <li>Townhomes</li>
                                    </ul>
                                </div>
                                <div className="type-card">
                                    <div className="type-icon">
                                        <Home size={40} />
                                    </div>
                                    <h3>Renovations & Remodels</h3>
                                    <p>Kitchen, bathroom, and whole-house renovations with detailed scope analysis</p>
                                    <ul>
                                        <li>Kitchen Remodels</li>
                                        <li>Bathroom Renovations</li>
                                        <li>Whole House Remodels</li>
                                        <li>Room Additions</li>
                                    </ul>
                                </div>
                                <div className="type-card">
                                    <div className="type-icon">
                                        <Home size={40} />
                                    </div>
                                    <h3>ADUs & Extensions</h3>
                                    <p>Accessory dwelling units, garage conversions, and home extensions</p>
                                    <ul>
                                        <li>Detached ADUs</li>
                                        <li>Garage Conversions</li>
                                        <li>Basement Conversions</li>
                                        <li>Home Extensions</li>
                                    </ul>
                                </div>
                                <div className="type-card">
                                    <div className="type-icon">
                                        <Home size={40} />
                                    </div>
                                    <h3>Multi-Unit Residential</h3>
                                    <p>Duplexes, small apartment buildings, and residential developments</p>
                                    <ul>
                                        <li>Duplexes & Triplexes</li>
                                        <li>Small Apartment Buildings</li>
                                        <li>Residential Developments</li>
                                        <li>Senior Living</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Detailed Scope */}
                        <section className="detailed-scope">
                            <h2>Comprehensive Residential Scope</h2>
                            <p>Our residential estimates cover every aspect of home construction and renovation, organized for easy understanding by both builders and homeowners.</p>
                            
                            <div className="scope-categories">
                                <div className="scope-category">
                                    <h4>🏗️ Structural Systems</h4>
                                    <div className="scope-items">
                                        <span>Foundation & Footings</span>
                                        <span>Framing & Sheathing</span>
                                        <span>Roof Structure</span>
                                        <span>Structural Steel</span>
                                    </div>
                                </div>
                                <div className="scope-category">
                                    <h4>🏠 Exterior Elements</h4>
                                    <div className="scope-items">
                                        <span>Roofing Materials</span>
                                        <span>Siding & Cladding</span>
                                        <span>Windows & Doors</span>
                                        <span>Decks & Porches</span>
                                    </div>
                                </div>
                                <div className="scope-category">
                                    <h4>🎨 Interior Finishes</h4>
                                    <div className="scope-items">
                                        <span>Drywall & Paint</span>
                                        <span>Flooring & Tile</span>
                                        <span>Trim & Millwork</span>
                                        <span>Interior Doors</span>
                                    </div>
                                </div>
                                <div className="scope-category">
                                    <h4>🍳 Kitchen & Bath</h4>
                                    <div className="scope-items">
                                        <span>Cabinets & Countertops</span>
                                        <span>Appliances & Fixtures</span>
                                        <span>Plumbing Fixtures</span>
                                        <span>Tile & Backsplashes</span>
                                    </div>
                                </div>
                                <div className="scope-category">
                                    <h4>⚡ MEP Systems</h4>
                                    <div className="scope-items">
                                        <span>Electrical Systems</span>
                                        <span>Plumbing Systems</span>
                                        <span>HVAC Systems</span>
                                        <span>Smart Home Technology</span>
                                    </div>
                                </div>
                                <div className="scope-category">
                                    <h4>🌿 Site & Exterior</h4>
                                    <div className="scope-items">
                                        <span>Site Preparation</span>
                                        <span>Driveways & Walkways</span>
                                        <span>Landscaping</span>
                                        <span>Outdoor Living</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="case-study">
                            <h2>Featured Success Story</h2>
                            <div className="case-study-card">
                                <div className="case-study-header">
                                    <div className="case-badge">Success Story</div>
                                    <h3>Custom Home Project</h3>
                                    <p className="case-location">Marin County, California</p>
                                </div>
                                <div className="case-study-body">
                                    <div className="case-image">
                                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop" alt="Custom Home" />
                                    </div>
                                    <div className="case-content">
                                        <p>Provided detailed estimate for 3,500 sq ft custom home with high-end finishes, helping builder secure contract and maintain 18% profit margin through accurate pricing and detailed allowance schedules.</p>
                                        
                                        <div className="case-highlights">
                                            <div className="highlight">
                                                <span className="highlight-number">$850,000</span>
                                                <span className="highlight-label">Project Secured</span>
                                            </div>
                                            <div className="highlight">
                                                <span className="highlight-number">18%</span>
                                                <span className="highlight-label">Profit Margin</span>
                                            </div>
                                            <div className="highlight">
                                                <span className="highlight-number">Zero</span>
                                                <span className="highlight-label">Change Order Disputes</span>
                                            </div>
                                        </div>
                                        
                                        <div className="case-features">
                                            <h5>Project Features:</h5>
                                            <ul>
                                                <li>3,500 sq ft custom design</li>
                                                <li>High-end kitchen with custom cabinetry</li>
                                                <li>Master suite with luxury bathroom</li>
                                                <li>Smart home automation system</li>
                                                <li>Outdoor living spaces with pool</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Builder Tools */}
                        <section className="builder-tools">
                            <h2>Builder-Friendly Tools & Formats</h2>
                            <p>We provide estimates in formats that work seamlessly with your existing workflow and client presentation needs.</p>
                            
                            <div className="tools-grid">
                                <div className="tool-card">
                                    <h4>📊 Detailed Excel Spreadsheets</h4>
                                    <p>Comprehensive breakdowns with formulas, allowances, and easy-to-modify pricing</p>
                                </div>
                                <div className="tool-card">
                                    <h4>📋 Homeowner Proposals</h4>
                                    <p>Professional presentation formats that help close deals with clear scope and pricing</p>
                                </div>
                                <div className="tool-card">
                                    <h4>🔄 Change Order Templates</h4>
                                    <p>Pre-formatted templates for common changes and upgrades to maximize profits</p>
                                </div>
                                <div className="tool-card">
                                    <h4>💰 Allowance Schedules</h4>
                                    <p>Detailed allowance breakdowns for client selections and upgrade opportunities</p>
                                </div>
                                <div className="tool-card">
                                    <h4>🏗️ Subcontractor Packages</h4>
                                    <p>Organized scope packages for easy subcontractor bidding and comparison</p>
                                </div>
                                <div className="tool-card">
                                    <h4>📱 Software Integration</h4>
                                    <p>Compatible formats for BuilderTrend, CoConstruct, and other builder platforms</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="residential-sidebar">
                        <div className="pricing-card">
                            <h3>Residential Pricing</h3>
                            <div className="price-highlight">
                                <span className="price">Starting at $150</span>
                                <span className="price-note">per project</span>
                            </div>
                            
                            <div className="pricing-breakdown">
                                <div className="price-tier">
                                    <div className="tier-header">
                                        <strong>Small Projects</strong>
                                        <span className="tier-price">$150</span>
                                    </div>
                                    <ul>
                                        <li>Up to 1,500 sq ft</li>
                                        <li>Basic renovations</li>
                                        <li>ADU projects</li>
                                    </ul>
                                </div>
                                <div className="price-tier">
                                    <div className="tier-header">
                                        <strong>Medium Projects</strong>
                                        <span className="tier-price">$250</span>
                                    </div>
                                    <ul>
                                        <li>1,500-3,000 sq ft</li>
                                        <li>New construction</li>
                                        <li>Major renovations</li>
                                    </ul>
                                </div>
                                <div className="price-tier">
                                    <div className="tier-header">
                                        <strong>Large Projects</strong>
                                        <span className="tier-price">$350+</span>
                                    </div>
                                    <ul>
                                        <li>3,000+ sq ft</li>
                                        <li>Luxury homes</li>
                                        <li>Multi-unit projects</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <Link to="/contact" className="btn btn-primary full-width">Get Quote</Link>
                        </div>

                        <div className="deliverables-card">
                            <h3>What You'll Receive</h3>
                            <ul className="deliverables-list">
                                <li><Check size={16} /> Detailed Excel spreadsheet</li>
                                <li><Check size={16} /> Homeowner presentation format</li>
                                <li><Check size={16} /> Allowance schedules</li>
                                <li><Check size={16} /> Change order templates</li>
                                <li><Check size={16} /> Subcontractor packages</li>
                                <li><Check size={16} /> Permit cost estimates</li>
                                <li><Check size={16} /> Free revisions (2)</li>
                            </ul>
                        </div>

                        <div className="upload-card">
                            <Upload size={40} className="upload-icon" />
                            <h3>Start Your Project</h3>
                            <p>Upload your plans and get a residential estimate quote today.</p>
                            <Link to="/contact" className="btn btn-warning full-width">Upload Plans</Link>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-stars">★★★★★</div>
                            <p>"California Estimators helped us win 3 major residential projects last month. Their homeowner presentations are professional and the pricing is always accurate."</p>
                            <div className="testimonial-author">
                                <strong>Mike Johnson</strong>
                                <span>Custom Home Builder, Sacramento</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResidentialEstimating;