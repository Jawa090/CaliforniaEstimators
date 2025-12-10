import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        California<span className="logo-accent-light">Estimators</span>
                    </Link>
                    <p className="footer-desc">
                        Professional construction takeoff and estimating services for contractors, builders, and architects in California and across the USA. Accurate, reliable, and builder-ready.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><Link to="/services/construction-takeoff">Construction Takeoff</Link></li>
                        <li><Link to="/services/commercial">Commercial Estimating</Link></li>
                        <li><Link to="/services/residential">Residential Estimating</Link></li>
                        <li><Link to="/services/industrial">Industrial Estimating</Link></li>
                        <li><Link to="/services/mep">MEP Estimating</Link></li>
                        <li><Link to="/services/electrical">Electrical Estimating</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/samples">Samples</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/locations">Service Areas</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <MapPin size={18} className="icon" />
                            <span>123 Wilshire Blvd, Los Angeles, CA 90017</span>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <span>(323) 555-0101</span>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <span>estimates@californiaestimators.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} California Estimators. All Rights Reserved.</p>
                    <div className="bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
