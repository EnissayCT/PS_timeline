import React from 'react';

const FatalitiesComponent = (props) => {

    const language = sessionStorage.getItem('language');

    let incompleteDataText, responseHeaderText, responseSubheaderText, responseParagraphText;

    switch (language) {
        case 'ar':
            incompleteDataText = "هذه البيانات غير مكتملة.";
            responseHeaderText = "استجابة مناسبة؟";
            responseSubheaderText = ""; // No subheader for Arabic
            responseParagraphText = "الوفيات الإسرائيلية بجوار الفلسطينية. سأترك لك قرار أي جانب ينتمي إلى أي دولة.";
            break;
        case 'fr':
            incompleteDataText = "Ces données sont incomplètes.";
            responseHeaderText = "Une réponse proportionnée ?";
            responseSubheaderText = ""; // No subheader for French
            responseParagraphText = "Les victimes israéliennes à côté des victimes palestiniennes. Je vous laisse décider de quel côté appartient quel pays.";
            break;
        default:
            incompleteDataText = "This data is incomplete.";
            responseHeaderText = "A proportionate response?";
            responseSubheaderText = ""; // No subheader for default language
            responseParagraphText = "Israeli fatalities next to Palestinian ones. I'll let you decide which side belongs to which country.";
            break;
    }

    const renderListItem = (yearData) => {
        return Object.entries(yearData).map(([year, emojis]) => (
            
            <li key={year}>
                <hr />
                <div className="timeline-start timeline-box">
                    {Array.from({ length: emojis["👶"]["I"] }, (_, i) => (
                        <span key={`I_${i}`} role="img" aria-label="baby">💀</span>
                    ))}
                    <br />
                    {Array.from({ length: emojis["👩"]["I"] }, (_, i) => (
                        <span key={`I_${i}`} role="img" aria-label="woman">👩</span>
                    ))}
                    <br />
                    {Array.from({ length: emojis["👨"]["I"] }, (_, i) => (
                        <span key={`I_${i}`} role="img" aria-label="man">👨</span>
                    ))}
                </div>
                <div className="timeline-middle text-xl">
                    {year}
                </div>
                <div className="timeline-end timeline-box">
                    {Array.from({ length: emojis["👶"]["P"] }, (_, i) => (
                        <span key={`P_${i}`} role="img" aria-label="baby">💀</span>
                    ))}
                    <br />
                    {Array.from({ length: emojis["👩"]["P"] }, (_, i) => (
                        <span key={`P_${i}`} role="img" aria-label="woman">👩</span>
                    ))}
                    <br />
                    {Array.from({ length: emojis["👨"]["P"] }, (_, i) => (
                        <span key={`P_${i}`} role="img" aria-label="man">👨</span>
                    ))}
                </div>
                <hr />
            </li>
        ));
    };

    return (
        <>
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

        <ul className="timeline timeline-vertical mt-20">
            {renderListItem(props.data)}
        </ul>
        </>
    );
};

export default FatalitiesComponent;
