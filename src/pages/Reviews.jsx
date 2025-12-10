import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const reviews = [
    { id: 1, name: "John Smith", role: "Builder, London", rating: 5, text: "Absolutely fantastic service. The accuracy of the steel takeoff was spot on and helped me win the tender." },
    { id: 2, name: "Sarah Davies", role: "Developer, Manchester", rating: 5, text: "Quick turnaround and very professional communication. Will definitely use again for our next housing development." },
    { id: 3, name: "Michael Chang", role: "Contractor, San Francisco", rating: 5, text: "Even though they are based in the UK/Global, they understood our California code requirements perfectly." },
    { id: 4, name: "Robert Jones", role: "Architect, Leeds", rating: 4, text: "Good detailed reports. A bit expensive but worth it for the peace of mind." },
    { id: 5, name: "Emily White", role: "Estimator, Bristol", rating: 5, text: "I outsource my overflow work to UK Estimators and they never disappoint. Seamless integration with my workflow." },
    { id: 6, name: "David Miller", role: "GC, Los Angeles", rating: 5, text: "Saved me 20 hours of work this week. The lumber list was precise to the stud." },
];

const Reviews = () => {
    return (
        <>
            <Helmet>
                <title>Client Reviews | UK Estimators</title>
                <meta name="description" content="See what our clients in the UK and USA have to say about our construction estimating services." />
            </Helmet>

            <div className="page-header" style={{ background: '#0A1E33', color: 'white', padding: '60px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1>Client Reviews</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '10px', color: '#FFD700' }}>
                        <Star fill="#FFD700" size={24} />
                        <Star fill="#FFD700" size={24} />
                        <Star fill="#FFD700" size={24} />
                        <Star fill="#FFD700" size={24} />
                        <Star fill="#FFD700" size={24} />
                    </div>
                    <p style={{ marginTop: '10px' }}>Rated 5.0/5.0 by 500+ Contractors</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {reviews.map(review => (
                        <div key={review.id} style={{ background: 'white', padding: '30px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', gap: '2px', marginBottom: '15px', color: '#FFD700' }}>
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="#FFD700" />)}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>"{review.text}"</p>
                            <div style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
                                <strong>{review.name}</strong>
                                <div style={{ fontSize: '0.85rem', color: '#666' }}>{review.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Reviews;
