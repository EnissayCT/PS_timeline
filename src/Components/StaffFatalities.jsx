import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const dataEn = [
    { name: 'Medical Workers', value: 1055 },
    { name: 'Civil defence', value: 97 },
    { name: 'Journalists', value: 205 },
    { name: 'Police men', value: 706 } 
];

const dataFr = [
    { name: 'Travailleurs médicaux', value: 1055 },
    { name: 'Défense civile', value: 97 },
    { name: 'Journalistes', value: 205 },
    { name: 'Policiers', value: 706 } 
];

const dataAr = [
    { name: 'العاملين في المجال الطبي', value: 1055 },
    { name: 'الدفاع المدني', value: 97 },
    { name: 'الصحفيين', value: 205 },
    { name: 'رجال الشرطة', value: 706 } 
];

const COLORS = ['#800080', '#8A2BE2', '#9370DB', '#BA55D3'];


const StaffFatalities = () => {
    const [lang, setLang] = useState('en');
    const [title, setTitle] = useState('Staff Fatalities');
    const [data, setData] = useState(dataEn);

    useEffect(() => {
        const language = sessionStorage.getItem('language') || 'en';
        setLang(language);

        switch (language) {
            case 'fr':
                setData(dataFr);
                setTitle('Victimes parmi le personnel');
                break;
            case 'ar':
                setData(dataAr);
                setTitle('وفيات الموظفين');
                break;
            default:
                setData(dataEn);
                setTitle('Staff Fatalities');
                break;
        }
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{title}</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default StaffFatalities;