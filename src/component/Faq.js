import React, { useState } from 'react'

const Faq = () => {
     const [active, setActive] = useState(1);

  const toggleFaq = (num) => {
    setActive(active === num ? null : num);
  };
    return (
      <section className="faq-section py-5">
  <p className="subheading text-center text-warning mb-2">FAQ’s</p>
  <h2 className="text-center fw-bold mb-4">
    We want to help you <br />with all your doubts
  </h2>

  <div className="container">
    <div className="accordion custom-accordion" id="faqAccordion">
      {[1, 2, 3, 4, 5].map(num => (
        <div className="accordion-item" key={num}>
          <h2 className="accordion-header" id={`heading${num}`}>
            <button className={`accordion-button ${num !== 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${num}`}>
              {`This is ${num === 3 ? 'a very long' : 'a'} frequently asked question${num > 1 ? '?' : ''}`}
            </button>
          </h2>
          <div id={`collapse${num}`} className={`accordion-collapse collapse ${num === 1 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              {`Answer ${num}`}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    )
}

export default Faq