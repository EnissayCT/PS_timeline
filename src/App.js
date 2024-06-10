import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import history_en from "./Ressources/History_en.json";
import history_ar from "./Ressources/History_ar.json";

import atrocities_en from "./Ressources/Atrocities_en.json";
import atrocities_ar from "./Ressources/Atrocities_ar.json";

import fatalitiesData from "./Ressources/Fatalities.json";

import TimelineComponent from "./Components/Timeline";
import FatalitiesComponent from "./Components/Fatalities";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import ContactForm from "./Components/ContactUs";

function App() {
  const language = sessionStorage.getItem('language');
  const historyData = language === 'ar' ? history_ar : history_en;
  const atrocitiesData = language === 'ar' ? atrocities_ar : atrocities_en;

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={<TimelineComponent data={historyData} />} />
      <Route path="/Atrocities" element={<TimelineComponent data={atrocitiesData} />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/dtoll" element={<FatalitiesComponent data={fatalitiesData} />} />
      {/* <Route path="*" element={}/> */}
      </Routes>
    </Router>
  );
}

export default App;
