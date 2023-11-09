import React from 'react'
import { faqQuestions } from "../../utils/faq-questions";
import "./faq.styles.css";

function FaqComp() {
  return (
    <div>
    <div className='faq-container'>
    <div className='faq-main'>
    <header>Frequently Asked Questions</header>
        <div className="que">
          {faqQuestions.map(({ id, question, ans } ) => {
            return (
              <div key={id} className="que-main">
                <p className="faq-que">{`${id}. ${question}`}</p>
                <p className="faq-ans">{ans}</p>
                <div className="separate"></div>
              </div>
            );
          })}
        </div>
    </div>
    </div>
    </div>
  )
}

export default FaqComp