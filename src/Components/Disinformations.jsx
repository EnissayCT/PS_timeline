import React from 'react';

const QA = ({ data }) => {
    const language = sessionStorage.getItem('language');

    let headerText, subheaderText, paragraphText;

    switch (language) {
      case 'ar':
          headerText = "هل هذا حقيقي حقا؟";
          subheaderText = "كشف الأخبار المضللة";
          paragraphText = "هنا، نتحقق من المعلومات المشوهة ونفندها بالحقائق. هل أنت مستعد لتحليل الأخبار والتأكد من صحتها؟";
          break;
      case 'fr':
          headerText = "Est-ce Vraiment Vrai ?";
          subheaderText = "Démystifier la Désinformation";
          paragraphText = "Ici, nous vérifions les informations déformées et les démontons avec les faits. Êtes-vous prêt à analyser les nouvelles et à vous assurer de leur véracité ?";
          break;
      default:
          headerText = "Is That Really True?";
          subheaderText = "Unraveling Misinformation";
          paragraphText = "Here, we fact-check distorted information and debunk it with the truth. Are you ready to analyze the news and ensure its accuracy?";
          break;
    }
  return (
    <>
        <section className="text-center pt-12">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-4xl font-bold mb-2">{headerText}</h1>
                    <h2 className="text-lg dark:text-white light:text-black mb-4">{subheaderText}</h2>
                    <p className="mx-auto max-w-xl text-base">{paragraphText}</p>
                </div>
            </div>
        </section>
      {data.map((item, index) => (
        <div key={index}>
          <div className='pr-[15%] pl-[15%] mt-2 mb-6' id='convo-bubble'>
                <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="https://i.guim.co.uk/img/media/48d1ad425772067a7bd10aa6a21a1f7b3253541c/0_165_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=20531a317fc37fbfc00fda0290fc6731" />
                    </div>
                </div>
                <div className="chat-header p-2 !light:!text-black dark:text-white"> Israel 
                </div>
                <div className="chat-bubble bg-white  shadow-xl border-2 text-black">{item.Q}</div>
                </div>
                <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AA4BTXOSS7KZK66G5CMVJYUIXQ.JPG&w=1440&impolicy=high_res" />
                    </div>
                </div>
                <div className="chat-header p-2"> Palestine
                </div>
                <div className="chat-bubble bg-white shadow-xl border-2 text-black">{item.A}</div>
                </div>
           </div>
        </div>
      ))}
    </>
  );
};

export default QA;
