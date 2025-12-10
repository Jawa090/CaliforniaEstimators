import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { locationsData } from '../data/locations';
import { CheckCircle, ArrowRight } from 'lucide-react';

const LocationDetail = () => {
    const { cityId } = useParams();
    const city = locationsData.find(l => l.slug === cityId);

    if (!city) {
        return <Navigate to="/locations" replace />;
    }

    return (
        <>
            <Helmet>
                <title>Construction Estimating Services in {city.name} | UK Estimators</title>
                <meta name="description" content={`Professional construction estimating and takeoff services in ${city.name}. Reliable cost estimates for contractors in ${city.name}.`} />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: `url(${city.image})` }}>
                <div className="container">
                    <h1>Estimating Services in {city.name}</h1>
                    <p className="lead">High-accuracy material takeoffs for {city.name} contractors.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>

                    <div className="city-content">
                        <h2>{city.name} Construction Industry Overview</h2>
                        <p>{city.intro} {city.industry}</p>
                        <p>
                            Contractors in {city.name} face unique challenges, from specific building codes to local labor rates.
                            Our team understands the {city.name} market and delivers estimates that reflect true local costs.
                        </p>

                        <h3>Our Estimating Services for {city.name}</h3>
                        <div className="services-list-city">
                            <div className="service-item-city">
                                <h4><CheckCircle size={16} color="var(--primary-blue)" /> Residential Estimating</h4>
                                <p>Perfect for home builders in {city.name}'s growing suburbs.</p>
                            </div>
                            <div className="service-item-city">
                                <h4><CheckCircle size={16} color="var(--primary-blue)" /> Commercial Takeoffs</h4>
                                <p>For office, retail, and mixed-use projects in {city.name}.</p>
                            </div>
                        </div>

                        <h3>Why {city.name} Contractors Trust Us</h3>
                        <p>
                            We have successfully estimated over 100 projects in the {city.name} area.
                            Our detailed reports help you negotiate better with subcontractors and win more profitable work.
                        </p>

                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '20px' }}>Get a Free {city.name} Quote</Link>
                    </div>

                    <div className="city-sidebar">
                        <div className="sidebar-box" style={{ background: '#F4F6F9', padding: '30px', borderRadius: '8px' }}>
                            <h4>Areas We Serve Near {city.name}</h4>
                            <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                                <li>Downtown {city.name}</li>
                                <li>North {city.name}</li>
                                <li>South {city.name}</li>
                                <li>Surrounding County Area</li>
                            </ul>
                        </div>

                        <div className="sidebar-box" style={{ marginTop: '30px', border: '1px solid #ddd', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
                            <h4>Ready to Start?</h4>
                            <p>Upload your plans today.</p>
                            <Link to="/contact" className="btn btn-warning">Upload Plans</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LocationDetail;
