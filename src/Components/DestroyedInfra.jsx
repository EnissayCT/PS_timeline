import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Hospitals', destroyed: 31, total: 36 },
    { name: 'Schools', destroyed: 405, total: 451 },
    { name: 'Houses', destroyed: 161600, total: 200000 },
    { name: 'Mosques', destroyed: 966, total: 1115 },
    { name: 'Sports Facilities', destroyed: 146, total: 300 },
];

const translations = {
    en: {
        Hospitals: 'Hospitals',
        Schools: 'Schools',
        Houses: 'Houses',
        Mosques: 'Mosques',
        'Sports Facilities': 'Sports Facilities',
        Destroyed: 'Destroyed',
        Remaining: 'Remaining',
        Percentage: 'Percentage',
    },
    fr: {
        Hospitals: 'Hôpitaux',
        Schools: 'Écoles',
        Houses: 'Maisons',
        Mosques: 'Mosquées',
        'Sports Facilities': 'Installations sportives',
        Destroyed: 'Détruit',
        Remaining: 'Restant',
        Percentage: 'Pourcentage',
    },
    ar: {
        Hospitals: 'المستشفيات',
        Schools: 'المدارس',
        Houses: 'المنازل',
        Mosques: 'المساجد',
        'Sports Facilities': 'المنشآت الرياضية',
        Destroyed: 'مدمر',
        Remaining: 'المتبقي',
        Percentage: 'النسبة المئوية',
    },
};

const DestroyedInfra = () => {
    const language = sessionStorage.getItem('language') || 'en'; // Default to 'en'

    // Calculate the percentage of destruction and remaining for each category
    const percentageData = data.map((item) => ({
        name: translations[language][item.name], // Translate name
        destroyedPercentage: ((item.destroyed / item.total) * 100).toFixed(2), // Percentage destroyed
        remainingPercentage: (100 - (item.destroyed / item.total) * 100).toFixed(2), // Percentage remaining
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={percentageData}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                    tickFormatter={(value) => `${value}%`} // Format Y-axis as percentages
                />
                <Tooltip
                    formatter={(value, name) => [`${value}%`, translations[language][name]]} // Show percentage in tooltip
                />
                <Legend />
                <Bar
                    dataKey="destroyedPercentage"
                    stackId="a"
                    fill="#8884d8"
                    name={translations[language].Destroyed}
                />
                <Bar
                    dataKey="remainingPercentage"
                    stackId="a"
                    fill="#82ca9d"
                    name={translations[language].Remaining}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DestroyedInfra;
