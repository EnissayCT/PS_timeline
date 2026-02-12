import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Updated data based on UN OCHA and Gaza Government reports (February 2026)
// Sources: Al Jazeera, UN OCHA, WHO
const data = [
    { name: 'Hospitals', destroyed: 34, total: 36 }, // Almost all hospitals non-functional
    { name: 'Schools', destroyed: 420, total: 451 }, // 93% of school buildings damaged
    { name: 'Houses', destroyed: 200000, total: 200000 }, // Almost all homes damaged or destroyed
    { name: 'Mosques', destroyed: 1115, total: 1115 }, // All mosques damaged or destroyed
    { name: 'Roads', destroyed: 750, total: 1000 }, // 75% of road networks
    { name: 'Cropland', destroyed: 800, total: 1000 }, // 80% of cropland destroyed
];

const translations = {
    en: {
        Hospitals: 'Hospitals',
        Schools: 'Schools',
        Houses: 'Houses',
        Mosques: 'Mosques',
        Roads: 'Roads',
        Cropland: 'Cropland',
        Destroyed: 'Destroyed',
        Remaining: 'Remaining',
        Percentage: 'Percentage',
    },
    fr: {
        Hospitals: 'Hôpitaux',
        Schools: 'Écoles',
        Houses: 'Maisons',
        Mosques: 'Mosquées',
        Roads: 'Routes',
        Cropland: 'Terres agricoles',
        Destroyed: 'Détruit',
        Remaining: 'Restant',
        Percentage: 'Pourcentage',
    },
    ar: {
        Hospitals: 'المستشفيات',
        Schools: 'المدارس',
        Houses: 'المنازل',
        Mosques: 'المساجد',
        Roads: 'الطرق',
        Cropland: 'الأراضي الزراعية',
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
