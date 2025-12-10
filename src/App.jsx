import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// Page imports
import Home from './pages/Home';
import Services from './pages/Services';
import Samples from './pages/Samples';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Reviews from './pages/Reviews';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
// Service Pages
import ConstructionTakeoff from './pages/ConstructionTakeoff';
import CommercialEstimating from './pages/CommercialEstimating';
import ResidentialEstimating from './pages/ResidentialEstimating';
import IndustrialEstimating from './pages/IndustrialEstimating';
import MEPEstimating from './pages/MEPEstimating';
import ElectricalEstimating from './pages/ElectricalEstimating';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        {/* Individual Service Pages */}
        <Route path="services/construction-takeoff" element={<ConstructionTakeoff />} />
        <Route path="services/commercial" element={<CommercialEstimating />} />
        <Route path="services/residential" element={<ResidentialEstimating />} />
        <Route path="services/industrial" element={<IndustrialEstimating />} />
        <Route path="services/mep" element={<MEPEstimating />} />
        <Route path="services/electrical" element={<ElectricalEstimating />} />
        <Route path="samples" element={<Samples />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="locations" element={<Locations />} />
        <Route path="locations/:cityId" element={<LocationDetail />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
