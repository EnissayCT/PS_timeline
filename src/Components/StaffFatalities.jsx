import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Updated figures as of February 2026
// Sources: WHO, CPJ, Gaza Health Ministry, OCHA
const dataEn = [
    { name: 'Medical Workers', value: 1300 }, // Over 1300 healthcare workers killed
    { name: 'Civil Defence', value: 130 }, 
    { name: 'Journalists', value: 230 }, // CPJ: 230+ journalists killed
    { name: 'UN Staff (UNRWA)', value: 260 } // Highest UN staff death toll in any conflict
];

const dataFr = [
    { name: 'Travailleurs médicaux', value: 1300 },
    { name: 'Défense civile', value: 130 },
    { name: 'Journalistes', value: 230 },
    { name: 'Personnel ONU (UNRWA)', value: 260 } 
];

const dataAr = [
    { name: 'العاملين في المجال الطبي', value: 1300 },
    { name: 'الدفاع المدني', value: 130 },
    { name: 'الصحفيين', value: 230 },
    { name: 'موظفي الأمم المتحدة (أونروا)', value: 260 } 
];

const COLORS = ['#800080', '#8A2BE2', '#9370DB', '#BA55D3'];


const StaffFatalities = () => {
    const [title, setTitle] = useState('Staff Fatalities');
    const [data, setData] = useState(dataEn);

    useEffect(() => {
        const language = sessionStorage.getItem('language') || 'en';

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