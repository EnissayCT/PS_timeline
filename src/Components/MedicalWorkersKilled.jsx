import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Updated healthcare worker casualties (February 2026)
// Source: WHO, Gaza Health Ministry
const medicalWorkersDataEn = [
  { name: "Doctors", value: 335 },
  { name: "Nurses", value: 455 },
  { name: "Health Associates", value: 250 },
  { name: "Pharmacists", value: 103 },
  { name: "Management & Support Staff", value: 157 },
];

const medicalWorkersDataFr = [
  { name: "Médecins", value: 335 },
  { name: "Infirmières", value: 455 },
  { name: "Associés de santé", value: 250 },
  { name: "Pharmaciens", value: 103 },
  { name: "Personnel de gestion et de soutien", value: 157 },
];

const medicalWorkersDataAr = [
  { name: "الأطباء", value: 335 },
  { name: "الممرضات", value: 455 },
  { name: "مساعدي الصحة", value: 250 },
  { name: "الصيادلة", value: 103 },
  { name: "إدارة وموظفي الدعم", value: 157 },
];

const COLORS = ["#800080", "#8A2BE2", "#9370DB", "#BA55D3", "#DDA0DD"];

const translations = {
  en: 'Medical Workers Killed',
  fr: 'Travailleurs médicaux Tués',
  ar: 'عمال الصحة المقتولين',
};

const MedicalWorkersPieChart = () => {
  const [title, setTitle] = useState(translations.en);
  const [data, setData] = useState(medicalWorkersDataEn);

  useEffect(() => {
    const language = sessionStorage.getItem('language') || 'en';
    setTitle(translations[language]);

    switch (language) {
      case 'fr':
        setData(medicalWorkersDataFr);
        break;
      case 'ar':
        setData(medicalWorkersDataAr);
        break;
      default:
        setData(medicalWorkersDataEn);
        break;
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{title}</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          label
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MedicalWorkersPieChart;