import React from 'react';

const FatalitiesComponent = (props) => {


    const renderListItem = (yearData) => {
        return Object.entries(yearData).map(([year, emojis]) => (
            
            <li key={year}>
                <hr />
                <div className="timeline-start timeline-box">
                    {Array.from({ length: emojis["👶"]["I"] }, (_, i) => (
                        <span key={`I_${i}`} role="img" aria-label="baby">👶</span>
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
                        <span key={`P_${i}`} role="img" aria-label="baby">👶</span>
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
        <ul className="timeline timeline-vertical mt-20">
            {renderListItem(props.data)}
        </ul>
    );
};

export default FatalitiesComponent;
