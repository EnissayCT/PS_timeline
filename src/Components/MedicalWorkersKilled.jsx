import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const medicalWorkersDataEn = [
  { name: "Doctors", value: 165 },
  { name: "Nurses", value: 260 },
  { name: "Health Associates", value: 184 },
  { name: "Pharmacists", value: 76 },
  { name: "Management & Support Staff", value: 300 },
];

const medicalWorkersDataFr = [
  { name: "Médecins", value: 165 },
  { name: "Infirmières", value: 260 },
  { name: "Associés de santé", value: 184 },
  { name: "Pharmaciens", value: 76 },
  { name: "Personnel de gestion et de soutien", value: 300 },
];

const medicalWorkersDataAr = [
  { name: "الأطباء", value: 165 },
  { name: "الممرضات", value: 260 },
  { name: "مساعدي الصحة", value: 184 },
  { name: "الصيادلة", value: 76 },
  { name: "إدارة وموظفي الدعم", value: 300 },
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