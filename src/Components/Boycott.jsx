import React, { useState, useEffect } from 'react';

const Boycott = ({ data }) => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [language, setLanguage] = useState('en');
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const lang = sessionStorage.getItem('language') || 'en';
        setLanguage(lang);
    }, []);

    const translations = {
        en: {
            title: "Companies to Boycott",
            subtitle: "Take action by avoiding these companies complicit in the occupation",
            learnMore: "Learn More",
            whyBoycott: "Why Boycott?",
            alternatives: "Alternatives",
            sources: "Sources",
            close: "Close",
            all: "All",
            high: "High",
            medium: "Medium",
            severityLabel: "Support Level"
        },
        fr: {
            title: "Entreprises à Boycotter",
            subtitle: "Agissez en évitant ces entreprises complices de l'occupation",
            learnMore: "En Savoir Plus",
            whyBoycott: "Pourquoi Boycotter?",
            alternatives: "Alternatives",
            sources: "Sources",
            close: "Fermer",
            all: "Tous",
            high: "Élevé",
            medium: "Moyen",
            severityLabel: "Niveau de soutien"
        },
        ar: {
            title: "شركات للمقاطعة",
            subtitle: "اتخذ إجراءً بتجنب هذه الشركات المتواطئة في الاحتلال",
            learnMore: "اقرأ المزيد",
            whyBoycott: "لماذا المقاطعة؟",
            alternatives: "البدائل",
            sources: "المصادر",
            close: "إغلاق",
            all: "الكل",
            high: "عالي",
            medium: "متوسط",
            severityLabel: "مستوى الدعم"
        }
    };

    const t = translations[language] || translations.en;
    
    // Get sectors from data
    const sectors = data.sectors?.[language] || data.sectors?.en || {};
    const companies = data.companies || data;

    // Get severity badge color and text
    const getSeverityBadge = (severity) => {
        const colors = {
            high: 'bg-red-500 text-white',
            medium: 'bg-orange-400 text-white',
            low: 'bg-yellow-400 text-black'
        };
        const labels = {
            high: t.high,
            medium: t.medium
        };
        return {
            color: colors[severity] || colors.medium,
            label: labels[severity] || severity
        };
    };

    // Filter companies
    const filteredCompanies = activeFilter === 'all' 
        ? companies 
        : companies.filter(c => c.severity === activeFilter);

    // Group filtered companies by sector
    const filteredGroupedCompanies = filteredCompanies.reduce((acc, company) => {
        const sector = company.sector || 'other';
        if (!acc[sector]) {
            acc[sector] = [];
        }
        acc[sector].push(company);
        return acc;
    }, {});

    const openModal = (company) => {
        setSelectedCompany(company);
        document.getElementById('company_modal').showModal();
    };

    const closeModal = () => {
        document.getElementById('company_modal').close();
        setSelectedCompany(null);
    };

    // Sector icons
    const sectorIcons = {
        food: '🍔',
        finance: '🏦',
        retail: '🛒',
        tech: '💻',
        consumer: '🧴'
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
                <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">{t.subtitle}</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-8">
                <div className="tabs tabs-boxed bg-base-200 p-1">
                    <button 
                        className={`tab ${activeFilter === 'all' ? 'tab-active bg-primary text-primary-content' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        {t.all}
                    </button>
                    <button 
                        className={`tab ${activeFilter === 'high' ? 'tab-active bg-red-500 text-white' : ''}`}
                        onClick={() => setActiveFilter('high')}
                    >
                        🔴 {t.high}
                    </button>
                    <button 
                        className={`tab ${activeFilter === 'medium' ? 'tab-active bg-orange-400 text-white' : ''}`}
                        onClick={() => setActiveFilter('medium')}
                    >
                        🟠 {t.medium}
                    </button>
                </div>
            </div>

            {/* Companies grouped by sector */}
            <div className="max-w-7xl mx-auto space-y-12">
                {Object.entries(filteredGroupedCompanies).map(([sector, sectorCompanies]) => (
                    <div key={sector} className="space-y-6">
                        {/* Sector Header */}
                        <div className="flex items-center gap-3 border-b-2 border-base-300 pb-3">
                            <span className="text-3xl">{sectorIcons[sector] || '📦'}</span>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {sectors[sector] || sector.charAt(0).toUpperCase() + sector.slice(1)}
                            </h2>
                            <span className="badge badge-neutral">{sectorCompanies.length}</span>
                        </div>

                        {/* Sector Companies Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sectorCompanies.map((company) => {
                                const severity = getSeverityBadge(company.severity);
                                return (
                                    <div 
                                        key={company.id} 
                                        className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 relative"
                                    >
                                        {/* Severity Badge */}
                                        <div className={`absolute top-3 ${language === 'ar' ? 'left-3' : 'right-3'} z-10`}>
                                            <span className={`badge ${severity.color} badge-sm font-semibold`}>
                                                {severity.label}
                                            </span>
                                        </div>
                                        
                                        <figure className="px-6 pt-8">
                                            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full p-3 shadow-md">
                                                <img 
                                                    src={company.logo} 
                                                    alt={company.name} 
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `<span class="text-2xl font-bold text-gray-500">${company.name.charAt(0)}</span>`;
                                                    }}
                                                />
                                            </div>
                                        </figure>
                                        <div className="card-body items-center text-center pt-4">
                                            <h2 className="card-title text-lg font-bold">{company.name}</h2>
                                            <p className="text-sm opacity-70 line-clamp-2">{company.shortReason}</p>
                                            <div className="card-actions mt-3">
                                                <button 
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => openModal(company)}
                                                >
                                                    {t.learnMore}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <dialog id="company_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-2xl" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    {selectedCompany && (
                        <>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-3 shadow-md">
                                    <img 
                                        src={selectedCompany.logo} 
                                        alt={selectedCompany.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl">{selectedCompany.name}</h3>
                                    <span className={`badge ${getSeverityBadge(selectedCompany.severity).color} mt-1`}>
                                        {t.severityLabel}: {getSeverityBadge(selectedCompany.severity).label}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-lg text-primary mb-2">{t.whyBoycott}</h4>
                                    <p className="text-base-content/80 leading-relaxed">
                                        {selectedCompany.fullDescription}
                                    </p>
                                </div>

                                <div className="divider"></div>

                                <div>
                                    <h4 className="font-semibold text-lg text-success mb-2">{t.alternatives}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCompany.alternatives.map((alt, index) => (
                                            <span key={index} className="badge badge-success badge-lg">
                                                {alt}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <div>
                                    <h4 className="font-semibold text-lg text-info mb-2">{t.sources}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCompany.sources.map((source, index) => (
                                            typeof source === 'object' ? (
                                                <a 
                                                    key={index} 
                                                    href={source.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="badge badge-info badge-outline hover:badge-info hover:text-white transition-colors cursor-pointer"
                                                >
                                                    {source.name} ↗
                                                </a>
                                            ) : (
                                                <span key={index} className="badge badge-info badge-outline">
                                                    {source}
                                                </span>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    <div className="modal-action">
                        <button className="btn" onClick={closeModal}>{t.close}</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Boycott;
