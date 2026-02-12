import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { year: 2008, casualties: 3202 },
    { year: 2009, casualties: 7640 },
    { year: 2010, casualties: 1659 },
    { year: 2011, casualties: 2260 },
    { year: 2012, casualties: 4936 },
    { year: 2013, casualties: 4031 },
    { year: 2014, casualties: 19860 },
    { year: 2015, casualties: 14813 },
    { year: 2016, casualties: 3572 },
    { year: 2017, casualties: 8526 },
    { year: 2018, casualties: 1120 },
    { year: 2019, casualties: 15628 },
    { year: 2020, casualties: 2781 },
    { year: 2021, casualties: 540 },
    { year: 2022, casualties: 1200 },
    { year: 2023, casualties: 18500 },
    { year: 2024, casualties: 45000 },
    { year: 2025, casualties: 7500 },
    { year: 2026, casualties: 1049 }
];

const translations = {
    en: 'Number of casualties in Palestine per Year',
    fr: 'Nombre de victimes en Palestine par an',
    ar: 'عدد الضحايا في فلسطين لكل عام'
};

const FatalityTimeChart = () => {
    const [title, setTitle] = useState(translations.en);

    useEffect(() => {
        const language = sessionStorage.getItem('language') || 'en';
        setTitle(translations[language]);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
            <div className="w-full">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="casualties" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default FatalityTimeChart;