import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Samples = () => {
    return (
        <>
            <Helmet>
                <title>Estimation Samples | California Estimators</title>
                <meta name="description" content="View sample construction takeoff reports and cost estimates." />
            </Helmet>

            <div className="page-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop")' }}>
                <div className="container">
                    <h1>Work Samples</h1>
                    <p>See the quality and detail of our estimation reports before you buy.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="section-header text-center">
                    <h2>Download Sample Reports</h2>
                    <p>Our reports are delivered in Excel format, color-coded and easy to edit.</p>
                </div>

                <div className="samples-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>

                    {/* Sample Item 1 */}
                    <div className="sample-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            height: '200px',
                            background: '#f4f4f4',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            flexDirection: 'column'
                        }}>
                            <FileText size={48} />
                            <span>Commercial Sample</span>
                        </div>
                        <h3>Commercial Office Building</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Full CSI division estimate including MEP and finishes.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            <Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                    </div>

                    {/* Sample Item 2 */}
                    <div className="sample-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            height: '200px',
                            background: '#f4f4f4',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            flexDirection: 'column'
                        }}>
                            <FileText size={48} />
                            <span>Residential Sample</span>
                        </div>
                        <h3>Single Family Home</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Lumber takeoff, concrete, drywall and roofing.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            <Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                    </div>

                    {/* Sample Item 3 */}
                    <div className="sample-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            height: '200px',
                            background: '#f4f4f4',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            flexDirection: 'column'
                        }}>
                            <FileText size={48} />
                            <span>MEP Sample</span>
                        </div>
                        <h3>HVAC & Plumbing</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Detailed ductwork and piping takeoff.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            <Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                    </div>

                    {/* Sample Item 4 - Concrete */}
                    <div className="sample-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            height: '200px',
                            background: '#f4f4f4',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            flexDirection: 'column'
                        }}>
                            <FileText size={48} />
                            <span>Concrete Sample</span>
                        </div>
                        <h3>Concrete Foundation</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Footings, slab on grade, and rebar schedules.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            <Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                    </div>

                    {/* Sample Item 5 - Drywall */}
                    <div className="sample-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            height: '200px',
                            background: '#f4f4f4',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            flexDirection: 'column'
                        }}>
                            <FileText size={48} />
                            <span>Drywall Sample</span>
                        </div>
                        <h3>Drywall & Metal Studs</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Partition types, linear footages, and square footages.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            <Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                    </div>

                    {/* Sample Item 6 - Electrical */}
                    <div className="sample-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            height: '200px',
                            background: '#f4f4f4',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#aaa',
                            flexDirection: 'column'
                        }}>
                            <FileText size={48} />
                            <span>Electrical Sample</span>
                        </div>
                        <h3>Commercial Electrical</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Lighting, power, and low voltage systems count.</p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            <Download size={16} style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: '#FAFAFA', borderRadius: '8px' }}>
                    <h3>Need a specific trade sample?</h3>
                    <p style={{ marginBottom: '20px' }}>Contact us and we will send you a relevant sample for your specific trade.</p>
                    <Link to="/contact" className="btn btn-primary">Request Custom Sample</Link>
                </div>
            </div>
        </>
    );
};

export default Samples;
