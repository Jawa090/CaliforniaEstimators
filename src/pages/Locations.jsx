import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { locationsData } from '../data/locations';
import { MapPin } from 'lucide-react';
import './Locations.css';

const Locations = () => {
    return (
        <>
            <Helmet>
                <title>Construction Estimating Service Locations | California Estimators</title>
                <meta name="description" content="We utilize our team of expert estimators to serve contractors across California." />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop")' }}>
                <div className="container">
                    <h1>Service Locations</h1>
                    <p>Serving contractors, developers, and architects across major cities.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="locations-grid">
                    {locationsData.map((city) => (
                        <Link to={`/locations/${city.slug}`} key={city.slug} className="location-card">
                            <div className="location-image" style={{ backgroundImage: `url(${city.image})` }}></div>
                            <div className="location-info">
                                <h3><MapPin size={18} className="pin-icon" /> {city.name}</h3>
                                <p>{city.intro.substring(0, 60)}...</p>
                                <span className="btn-text">View Services</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Locations;
