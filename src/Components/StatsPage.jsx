import React from 'react';
import EducationStackedBarChart from "./EducationDestruction";
import MedicalWorkersPieChart from "./MedicalWorkersKilled";
import DeathChart from "./DeathChart";
import DeathComparison from './DeathComparison';
import DestroyedInfra from './DestroyedInfra';
import FatalityTimeChart from './FatalityTimeChart';
import ReligiousMonuments from './ReligiousMonuments';
import StaffFatalities from './StaffFatalities';

const StatPage = () => {
    const language = sessionStorage.getItem('language');

    let incompleteDataText, responseHeaderText, responseSubheaderText, responseParagraphText;
    let deathsText, notFoundText, displacedText;
    let deathsValue = 46500, notFoundValue = 10000, displacedValue = 1900000;

    switch (language) {
        case 'ar':
            incompleteDataText = "هذه البيانات غير مكتملة.";
            responseHeaderText = "إحصائيات الأضرار والوفيات";
            responseSubheaderText = ""; 
            responseParagraphText = "تعرض هذه الصفحة الرسوم البيانية والإحصائيات المتعلقة بالأضرار والوفيات في قطاع غزة.";
            deathsText = "الوفيات";
            notFoundText = "مفقود";
            displacedText = "المشردين";
            break;
        case 'fr':
            incompleteDataText = "Ces données sont incomplètes.";
            responseHeaderText = "Statistiques des dommages et des décès";
            responseSubheaderText = ""; 
            responseParagraphText = "Cette page présente des graphiques et des statistiques sur les dommages et les décès dans la bande de Gaza.";
            deathsText = "Décès";
            notFoundText = "Non trouvé";
            displacedText = "Déplacés";
            break;
        default:
            incompleteDataText = "This data is incomplete.";
            responseHeaderText = "Damage and Fatalities Statistics";
            responseSubheaderText = ""; 
            responseParagraphText = "This page displays charts and statistics related to the damage and fatalities in the Gaza Strip.";
            deathsText = "Deaths";
            notFoundText = "Not Found";
            displacedText = "Displaced";
            break;
    }

    return (
        <div className="w-full">
            <section className="custom-section text-center pt-12">
                <div className="custom-container mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div className="custom-content flex flex-col space-y-4 space-y-reverse">
                        <h1 className="custom-paragraph order-last text-lg">{responseParagraphText}</h1>
                        <h2 className="custom-header text-5xl font-bold sm:text-6xl">{responseHeaderText}</h2>
                        <h3 className="custom-subheader text-lg">{responseSubheaderText}</h3>
                    </div>
                    <p className="custom-text mx-auto mt-6 max-w-xl text-base/relaxed">{incompleteDataText}</p>
                </div>
            </section>

            <div className="w-full px-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-6 md:grid-rows-9 gap-4">
                <div className="w-full flex justify-center items-center md:col-span-3 md:row-span-3 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <DeathComparison />
    </div>
</div>
<div className="w-full flex justify-center items-center md:col-span-3 md:row-span-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <MedicalWorkersPieChart />
    </div>
</div>
<div className="w-full flex justify-center items-center md:col-span-3 md:row-span-3 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <DestroyedInfra />
    </div>
</div>
<div className="w-full flex justify-center items-center md:col-span-2 md:row-span-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <DeathChart />
    </div>
</div>
<div className="w-full md:col-span-1 md:row-span-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="text-center w-full">
        <h1 className="text-2xl font-bold">{deathsText}</h1>
        <p className="text-6xl font-bold">{deathsValue}</p>
        <h1 className="text-2xl font-bold mt-6">{notFoundText}</h1>
        <p className="text-6xl font-bold">{notFoundValue}</p>
        <h1 className="text-2xl font-bold mt-6">{displacedText}</h1>
        <p className="text-6xl font-bold">{displacedValue}</p>
    </div>
</div>
<div className="w-full flex justify-center items-center md:col-span-6 md:row-span-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <FatalityTimeChart />
    </div>
</div>
<div className="w-full flex justify-center items-center md:col-span-4 md:row-span-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <ReligiousMonuments />
    </div>
</div>
<div className="w-full flex justify-center items-center md:col-span-2 md:row-span-2 bg-white shadow-lg rounded-lg border border-gray-200 p-4">
    <div className="w-full flex justify-center items-center">
        <StaffFatalities />
    </div>
</div> 
                </div>
            </div>
        </div>
    );
};

export default StatPage;