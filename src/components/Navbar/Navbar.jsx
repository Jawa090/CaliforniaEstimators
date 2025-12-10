import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="navbar-container">
            {/* Top Bar for Contact Info */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <Phone size={16} />
                        <span>(323) 555-0101</span>
                    </div>
                    <div className="auth-links">
                        <Link to="/contact">Request a Quote</Link>
                    </div>
                </div>
            </div>

            <nav className="main-nav">
                <div className="container nav-content">
                    <Link to="/" className="logo">
                        California<span className="logo-accent">Estimators</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
                        <div className="dropdown">
                            <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                                Services <ChevronDown size={14} style={{ marginLeft: '4px' }} />
                            </NavLink>
                            <div className="dropdown-content">
                                <Link to="/services/construction-takeoff">Construction Takeoff</Link>
                                <Link to="/services/commercial">Commercial Estimating</Link>
                                <Link to="/services/residential">Residential Estimating</Link>
                                <Link to="/services/industrial">Industrial Estimating</Link>
                                <Link to="/services/mep">MEP Estimating</Link>
                                <Link to="/services/electrical">Electrical Estimating</Link>
                            </div>
                        </div>
                        <NavLink to="/samples" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Samples</NavLink>
                        <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Pricing</NavLink>
                        <NavLink to="/locations" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Locations</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About Us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink>
                    </div>

                    <div className="header-cta">
                        <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="mobile-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                        <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
                        <NavLink to="/samples" onClick={toggleMenu}>Samples</NavLink>
                        <NavLink to="/pricing" onClick={toggleMenu}>Pricing</NavLink>
                        <NavLink to="/locations" onClick={toggleMenu}>Locations</NavLink>
                        <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
                        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                        <Link to="/contact" className="btn btn-primary" onClick={toggleMenu}>Get Free Quote</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
