import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | construction Takeoff & Estimating</title>
                <meta name="description" content="View our full range of construction estimating services including commercial, residential, industrial, and MEP takeoffs." />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop")' }}>
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Professional estimating solutions for every trade and project size.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <img
                                src={service.image}
                                alt={service.title}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    marginBottom: '20px',
                                    borderRadius: '4px'
                                }}
                            />
                            <h3>{service.title}</h3>
                            <p style={{ flexGrow: 1 }}>{service.shortDesc}</p>
                            <Link to={`/services/${service.id}`} className="service-link">
                                View Details <ArrowRight size={16} style={{ display: 'inline', marginLeft: '5px' }} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
