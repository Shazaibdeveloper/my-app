import React, { useState } from 'react';
import FaqData from '../Data/FaqData';

const Faq = () => {
  const [faqs, setFaqs] = useState(FaqData);

  return (
    <div className="faqcontainer mx-auto my-5">
      <h1 className='justify-content-center'>FAQ</h1>
      {faqs.map((faq, index) => (
        <div className="question" key={index}>
          <details>
            <summary className="drop">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 40 41">
                <path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/>
              </svg>
              {faq.title}
            </summary>
            <p>{faq.description}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Faq;
