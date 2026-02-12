import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const dataEn = [
    { name: 'Gaza', Casualties: 72049 },
    { name: 'Israel', Casualties: 810 },
];

const dataFr = [
    { name: 'Gaza', Victimes: 72049 },
    { name: 'Israël', Victimes: 810 },
];

const dataAr = [
    { name: 'غزة', الضحايا: 72049 },
    { name: 'إسرائيل', الضحايا: 810 },
];

const DeathComparison = () => {
    const [lang, setLang] = useState('en');
    const [title, setTitle] = useState('Death Comparison');
    const [data, setData] = useState(dataEn);

    useEffect(() => {
        const language = sessionStorage.getItem('language');
        if (language) {
            setLang(language);
            switch (language) {
                case 'ar':
                    setTitle('مقارنة الوفيات');
                    setData(dataAr);
                    break;
                case 'fr':
                    setTitle('Comparaison des décès');
                    setData(dataFr);
                    break;
                default:
                    setTitle('Death Comparison');
                    setData(dataEn);
                    break;
            }
        }
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '24px' }}>{title}</h2>
            <ResponsiveContainer height={400} width={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barCategoryGap="80%"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" minTickGap={20} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={lang === 'ar' ? 'الضحايا' : lang === 'fr' ? 'Victimes' : 'Casualties'} fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DeathComparison;