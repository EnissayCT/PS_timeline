import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center p-4  w-full mt-8">
            <div className="flex items-center">
                <span></span>
            </div>
            <div className="text-center">
                <p>Sources: AlJazeera, Lancet, Haaretz, National Library of Israel, The Jerusalem Post, United Nations</p>
                <p>This is just personal work and not affiliated with any organization. All information is for educational purposes only.</p>
            </div>
            <div className="flex items-center">
                <span role="img" aria-label="Palestinian Flag" className="ml-2">YC</span>
            </div>
        </footer>
    );
};

export default Footer;