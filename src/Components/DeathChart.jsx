import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const dataEn = [
    { name: 'Children', value: 20400 },
    { name: 'Women', value: 12000 },
    { name: 'Men', value: 14100 },
];

const dataFr = [
    { name: 'Enfants', value: 20400 },
    { name: 'Femmes', value: 12000 },
    { name: 'Hommes', value: 14100 },
];

const dataAr = [
    { name: 'الأطفال', value: 20400 },
    { name: 'النساء', value: 12000 },
    { name: 'الرجال', value: 14100 },
];

const COLORS = ['#C890A7', '#69247C', '#A19AD3'];

const DeathChart = () => {
    const language = sessionStorage.getItem('language');

    let title;
    let data;
    switch (language) {
        case 'ar':
            title = "الوفيات حسب الفئة الديموغرافية";
            data = dataAr;
            break;
        case 'fr':
            title = "Décès par catégorie démographique";
            data = dataFr;
            break;
        default:
            title = "Deaths by Demographic";
            data = dataEn;
            break;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{title}</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name}) => `${name}`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default DeathChart;