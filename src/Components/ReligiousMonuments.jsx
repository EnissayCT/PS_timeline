import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { shortName: 'A', longName: 'Alpha', value: 910 },
    { shortName: 'B', longName: 'Beta', value: 205 },
    { shortName: 'C', longName: 'Gamma', value: 320 },
    { shortName: 'D', longName: 'Delta', value: 28 },
    { shortName: 'E', longName: 'Epsilon', value: 3 },
];

const translations = {
    en: {
        A: 'Mosques',
        B: 'Mosques',
        C: 'Assault',
        D: 'Cemetery',
        E: 'Churches',
        Alpha: 'Mosque Completely Destroyed',
        Beta: 'Mosque Partially Destroyed',
        Gamma: 'Assault on Al-Aqsa Mosque',
        Delta: 'Cemetery Completely Destroyed',
        Epsilon: 'Churches Completely Destroyed',
    },
    fr: {
        A: 'Mosquées',
        B: 'Mosquées',
        C: 'Agression',
        D: 'Cimetière',
        E: 'Églises',
        Alpha: 'Mosquée complètement détruite',
        Beta: 'Mosquée partiellement détruite',
        Gamma: 'Agression contre la mosquée Al-Aqsa',
        Delta: 'Cimetière complètement détruit',
        Epsilon: 'Églises completement détruites',
    },
    ar: {
        A: 'مسجد',
        B: 'مسجد',
        C: 'اعتداء',
        D: 'مقبرة',
        E: 'كنائس ',
        Alpha: 'مسجد دمر كليا',
        Beta: 'مسجد دمر جزئيا',
        Gamma: 'اعتداء على المسجد الأقصى',
        Delta: 'مقبرة دمرت كليا',
        Epsilon: 'كنائس دمرت كليا',
    },
};

const getTranslatedData = (data, language) => {
    return data.map(item => ({
        ...item,
        shortName: translations[language][item.shortName] || item.shortName,
        longName: translations[language][item.longName] || item.longName,
    }));
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.longName} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const ReligiousMonuments = () => {
    const language = sessionStorage.getItem('language') || 'en';
    const translatedData = getTranslatedData(data, language);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={translatedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="shortName" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ReligiousMonuments;