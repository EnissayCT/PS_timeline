import React, { useMemo } from 'react';

const EmojiList = React.memo(({ count, emoji }) => {
    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <span key={`${emoji}_${i}`} role="img" aria-label={emoji}>{emoji}</span>
            ))}
        </>
    );
});

const renderListItem = (yearData) => {
    return Object.entries(yearData).map(([year, emojis]) => (
        <li key={year}>
            <hr />
            <div className="timeline-start timeline-box">
                <EmojiList count={emojis["👶"]["I"]} emoji="💀" />
                <br />
                <EmojiList count={emojis["👩"]["I"]} emoji="👩" />
                <br />
                <EmojiList count={emojis["👨"]["I"]} emoji="👨" />
            </div>
            <div className="timeline-middle text-xl">
                {year}
            </div>
            <div className="timeline-end timeline-box">
                <EmojiList count={emojis["👶"]["P"]} emoji="💀" />
                <br />
                <EmojiList count={emojis["👩"]["P"]} emoji="👩" />
                <br />
                <EmojiList count={emojis["👨"]["P"]} emoji="👨" />
            </div>
            <hr />
        </li>
    ));
};

const FatalitiesComponent = (props) => {

    const language = sessionStorage.getItem('language');

    let incompleteDataText, responseHeaderText, responseSubheaderText, responseParagraphText;

    switch (language) {
        case 'ar':
            incompleteDataText = "هذه البيانات غير مكتملة.";
            responseHeaderText = "استجابة مناسبة؟";
            responseSubheaderText = "كل 💀 يمثل 10 أرواح"; // Updated subheader for Arabic
            responseParagraphText = "الوفيات الإسرائيلية بجوار الفلسطينية. سأترك لك قرار أي جانب ينتمي إلى أي دولة.";
            break;
        case 'fr':
            incompleteDataText = "Ces données sont incomplètes.";
            responseHeaderText = "Une réponse proportionnée ?";
            responseSubheaderText = "chaque 💀 représente 10 vies"; // Updated subheader for French
            responseParagraphText = "Les victimes israéliennes à côté des victimes palestiniennes. Je vous laisse décider de quel côté appartient quel pays.";
            break;
        default:
            incompleteDataText = "This data is incomplete.";
            responseHeaderText = "A proportionate response?";
            responseSubheaderText = "each 💀 represents 10 lives"; // Updated subheader for default language
            responseParagraphText = "Israeli fatalities next to Palestinian ones. I'll let you decide which side belongs to which country.";
            break;
    }

    const memoizedListItems = useMemo(() => renderListItem(props.data), [props.data]);

    return (
        <>
        <section className="custom-section text-center pt-12">
    <div className="custom-container mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
        <div className="custom-content flex flex-col space-y-4 space-y-reverse">
            <h1 className="custom-paragraph order-last text-lg">{responseParagraphText}</h1>
            <h2 className="custom-header text-5xl font-bold sm:text-6xl">{responseHeaderText}</h2>
            <h1 className="text-4xl font-extrabold">{responseSubheaderText}</h1>
            </div>
        <p className="custom-text mx-auto mt-6 max-w-xl text-base/relaxed">{incompleteDataText}</p>
    </div>
</section>

        <ul className="timeline timeline-vertical mt-20">
            {memoizedListItems}
        </ul>
        </>
    );
};

export default FatalitiesComponent;
