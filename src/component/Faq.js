import React, { useState } from 'react'
import '../style/Faq.css'
const faqItem = [
  { question: "This is a frequently asked question?", answer: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa." },
  { question: "This is a frequently asked question?", answer: "Answer-1" },
  { question: "This is a very long frequently asked question about our services with more than one line?", answer: "Answer-1" },
  { question: "This is a frequently asked question?", answer: "Answer-1" },
  { question: "This is a question?", answer: "Answer-1" },
  { question: "This is a question?", answer: "Answer-1" },
]
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
     <section className="faq-section py-5">
      <div className="faqboxbody">
        <div className="pointone"><div className="point"></div></div>
        <div className="faqmain">
          <p className="subheading text-center  mb-2">FAQ’s</p>
          <h2 className="text-center  mb-4">
            We want to help you <br />with all your doubts
          </h2>

          <div className="container">
            <div className="accordion custom-accordion" id="faqAccordion">
              {faqItem.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                      onClick={() => toggleFaq(index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         <div className="pointone2"><div className="point2"></div>
         </div>
      </div >

    </section >



    )
}

export default Faq