import React from 'react';

const ContactForm = () => {
    const language = sessionStorage.getItem('language');

    let headerText, paragraphText;

    switch (language) {
        case 'ar':
            headerText = "اتصل بنا!";
            paragraphText = "هل لاحظت شيئًا خاطئًا أو تريد إضافة شيء؟ لا تتردد في ملء النموذج أدناه.";
            break;
        case 'fr':
            headerText = "Contactez-nous!";
            paragraphText = "Remarquez quelque chose de faux ou souhaitez ajouter quelque chose? N'hésitez pas à remplir le formulaire ci-dessous.";
            break;
        default:
            headerText = "Contact Us!";
            paragraphText = "Notice something wrong or want to add something? Feel free to fill out the form below.";
            break;
    }

    let namePlaceholder, emailPlaceholder, subjectPlaceholder, messagePlaceholder, sendButtonText, resetButtonText, textAlign;

    switch (language) {
        case 'ar':
            namePlaceholder = "الاسم";
            emailPlaceholder = "البريد الإلكتروني";
            subjectPlaceholder = "الموضوع";
            messagePlaceholder = "اكتب رسالتك هنا...";
            sendButtonText = "➤ إرسال";
            resetButtonText = "إعادة تعيين";
            textAlign = "text-right";
            break;
        case 'fr':
            namePlaceholder = "Nom";
            emailPlaceholder = "Email";
            subjectPlaceholder = "Sujet";
            messagePlaceholder = "Tapez votre message ici...";
            sendButtonText = "Envoyer ➤";
            resetButtonText = "Réinitialiser";
            textAlign = "text-left"; 
            break;
        default:
            namePlaceholder = "Name";
            emailPlaceholder = "Email";
            subjectPlaceholder = "Subject";
            messagePlaceholder = "Type your message here...";
            sendButtonText = "Send ➤";
            resetButtonText = "Reset";
            textAlign = "text-left"; 
            break;
    }
    return (
        <div className="min-h-screen bg-transparent py-6 flex flex-col justify-center sm:py-12 mt-14">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-green-500 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6 flex flex-col items-center">
                        <svg fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000" transform="matrix(1, 0, 0, -1, 0, 0)" width="50px" height="50px">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M21,21H3L12,3Z"></path>
                            </g>
                        </svg>
                        <h1 className="text-3xl text-black">{headerText}</h1>
                        <p className="text-gray-600">
                            {paragraphText}
                        </p>
                    </div>
                    <form action="https://formspree.io/f/myyrgeod" method="post">
                        <input className={`shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline ${textAlign}`} type="text" placeholder={namePlaceholder} name="name" />
                        <input className={`shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline ${textAlign}`} type="email" placeholder={emailPlaceholder} name="email" />
                        <input className={`shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline ${textAlign}`} type="text" placeholder={subjectPlaceholder} name="_subject" />
                        <textarea className={`shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline ${textAlign}`} placeholder={messagePlaceholder} name="message" style={{ height: '121px' }}></textarea>
                        <div className="flex justify-between">
                            <input className="shadow bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value={sendButtonText} />
                            <input className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset" value={resetButtonText} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
