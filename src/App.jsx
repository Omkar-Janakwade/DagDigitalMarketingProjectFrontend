import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import WebApp from '../src/Components/Web-app/WebApp';
import DigitalMarketing from '../src/Components/Dig-mark/DigMark';
import Career from '../src/Components/Career/Career';
import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';
import Interior from './Components/InteriorDes.jsx/Interior';
import RealEstate from './Components/Real-state/RealEstate';

const App = () => {
  return (
    <div className="app w-100 p-0 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/page/home" />} />
        <Route path="/page/home" element={<Home />} />
        <Route path="/page/career" element={<Career />} />
        <Route path="/page/webapp" element={<WebApp />} />
        <Route path="/page/digmark" element={<DigitalMarketing />} />
        <Route path='/page/interior' element={<Interior/>}/>
        <Route path='/page/realestate' element={<RealEstate/>}/>
        {/* <Route path='/page/webapp' element={<WebApp/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
