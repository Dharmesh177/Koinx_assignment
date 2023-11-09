import React from 'react'
import Calculator from '../calculator/Calculator'
import "./Landing_Page.styles.css";
import Card from "../card/card"
import FaqComp from '../faq/FaqComp';
function Landing_Page() {
  return (
    <div className="landing-page-container">
    <div className="landing-page-left">
      <Calculator/>
      <FaqComp/>
    </div>
    <div>
    <Card/>
    </div>
  </div>
  )
}

export default Landing_Page