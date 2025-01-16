import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import history_en from "./Ressources/History_en.json";
import history_ar from "./Ressources/History_ar.json";
import history_fr from "./Ressources/History_fr.json";

import atrocities_en from "./Ressources/Atrocities_en.json";
import atrocities_ar from "./Ressources/Atrocities_ar.json";
import atrocities_fr from "./Ressources/Atrocities_fr.json";

import fatalitiesData from "./Ressources/Fatalities.json";

import Disinformations_en from "./Ressources/Disinformations_en.json";
import Disinformations_ar from "./Ressources/Disinformations_ar.json";
import Disinformations_fr from "./Ressources/Disinformations_fr.json";

import TimelineComponent from "./Components/Timeline";
import FatalitiesComponent from "./Components/Fatalities";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTopBehavior";
import ContactForm from "./Components/ContactUs";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import QA from "./Components/Disinformations";
import StatPage from "./Components/StatsPage";
import Footer from "./Components/Footer";

function App() {
  const language = sessionStorage.getItem('language');
  const historyData = language === 'ar' ? history_ar : (language === 'fr' ? history_fr : history_en);
  const atrocitiesData = language === 'ar' ? atrocities_ar : (language === 'fr' ? atrocities_fr : atrocities_en);
  const DisinformationsData = language === 'ar' ? Disinformations_ar : (language === 'fr' ? Disinformations_fr : Disinformations_en);
  let headerText, paragraphText;
  let headerText1, paragraphText1;

  switch (language) {
        case 'ar':
            headerText1 = "مجازر إسرائيل عبر السنوات";
            paragraphText1 = "تعرف على سلسلة المجازر والجرائم البشعة التي ارتكبتها إسرائيل على مر السنين. هنا، نستنكر بقوة الظلم والقتل الجماعي، وندعو إلى تحقيق العدالة ورفض الصمت المريب.";
            break;
        case 'fr':
            headerText1 = "Massacres commis par Israël à travers les années";
            paragraphText1 = "Découvrez la série de massacres et de crimes horribles perpétrés par Israël au fil des ans. Ici, nous condamnons fermement l'injustice et le meurtre de masse, et appelons à la justice et au rejet du silence complice.";
            break;
        default:
            headerText1 = "Massacres Committed by Israel Throughout the Years";
            paragraphText1 = "Learn about the series of massacres and heinous crimes committed by Israel over the years. Here, we strongly condemn injustice and mass murder, and call for justice and rejection of complicit silence.";
            break;
    }

  switch (language) {
        case 'ar':
            headerText = "رحلة عبر الزمان";
            paragraphText = "استكشف أحداث الماضي واستنبط الدروس منها. لنخوض سويًا في رحلة تأملية لاكتشاف الجذور وفهم الحاضر.";
            break;
        case 'fr':
            headerText = "Un Voyage à Travers le Temps";
            paragraphText = "Explorez les événements passés et tirez-en des leçons. Partons ensemble pour un voyage introspectif pour découvrir les racines et comprendre le présent.";
            break;
        default:
            headerText = "A Journey Through Time";
            paragraphText = "Explore past events, and derive lessons from them. Let's embark together on a contemplative journey to discover roots and understand the present.";
            break;
    }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={
          <>
          <section className="text-center pt-12 ">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold mb-2">{headerText}</h1>
                        <p className="mx-auto max-w-xl text-base">{paragraphText}</p>
                    </div>
                </div>
          </section>
          <TimelineComponent data={historyData} />
          </>} />
      <Route path="/Atrocities" element={<>
          <section className="text-center pt-12 ">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold mb-2">{headerText1}</h1>
                        <p className="mx-auto max-w-xl text-base">{paragraphText1}</p>
                    </div>
                </div>
          </section>
          <TimelineComponent data={atrocitiesData} /></>} />
      <Route path="/stats" element={<StatPage/>} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/dtoll" element={<FatalitiesComponent data={fatalitiesData} />} />
      <Route path="/disinformations" element={<QA data={DisinformationsData}/>} />

      {/* <Route path="*" element={}/> */}
      </Routes>
      <ScrollToTopButton />
      <Footer />
      
    </Router>
  );
}

export default App;
