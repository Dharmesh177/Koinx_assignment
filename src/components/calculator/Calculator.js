import React, { useState, useEffect } from "react";
import "./Calculator.styles.css";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { countries } from "../../utils/countries.utils";
import { financialYears } from "../../utils/financial-year.utils";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { ReactComponent as SelectDown } from "../../assets/select-down.svg";
import { incomeRange } from "../../utils/incomes.utils";
import { taxRates } from "../../utils/tax-rates.utils";
import { taxRatesInPercent } from "../../utils/tax-rates.utils";
import { countryCurrency } from "../../utils/country-currency";

function Calculator() {
  const [year, setyear] = useState("2023-24");
  const [country, setcountry] = useState("INDIA");
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [expences, setexpences] = useState(0);
  const [taxPercentage, settaxPercentage] = useState(0);
  const [customIncomeRange, setCustomIncomeRange] = useState(incomeRange);
  const [annualIncome, setannualIncome] = useState(null);
  const [temp, settemp] = useState(0);
  const [capitalGain, setcapitalGain] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [finaltax, setfinaltax] = useState(0);
  const [tt, settt] = useState(0);

  useEffect(() => {
    console.log(buyPrice + "  " + sellPrice + " " + expences);
    calculateCapitalGain();
    if(isLong === true){
      settt(capitalGain - discount);
    }else{
      settt(capitalGain);
    }
    
  }, [buyPrice, sellPrice, expences, tt]);

  useEffect(() => {
    console.log(annualIncome);
    settemp(taxRates[annualIncome]);
    console.log(temp);
    settaxPercentage(taxRatesInPercent[annualIncome]);
    console.log("tt is" + tt);
    setfinaltax(tt * taxPercentage);
    console.log("dds  " + taxPercentage + " " + finaltax);
  }, [annualIncome, finaltax, taxPercentage]);

  const handleYearChange = (e) => {
    setyear(e.target.value);
  };

  const handleCountryChange = (e) => {
    setcountry(e.target.value);
  };

  const handleBuyPriceChange = (e) => {
    setBuyPrice(e.target.value);
  };

  const handleSellPriceChange = (e) => {
    // e.preventDefault();
    setSellPrice(e.target.value);
  };

  const calculateCapitalGain = (e) => {
    let cg = Math.max(0, sellPrice - buyPrice - expences);
    setcapitalGain(cg);
    setdiscount(cg / 2);
  };

  const calculateDiscount = (e) => {
    setdiscount(capitalGain / 2);
  };

  const calculateTax = () => {};

  const handleExpencesChange = (e) => {
    setexpences(e.target.value);
  };

  const [isShort, setisShort] = useState(false);
  const [isLong, setisLong] = useState(false);

  const handleChangeTerm = (e) => {
    // if(isShort === true){
    //   setisShort(true);
    //   setisLong(false);
    //   // e.target.classList.add('show-checkbox');
    // }else if(isLong === true){
    //   setisLong(true);
    //   setisShort(false);
    //   // e.target.classList.add('show-checkbox');
    // }else{
    //   setisLong(false);
    //   setisShort(false);
    // }
    setisLong(false);
    isShort === false ? setisShort(true) : setisShort(false);
  };

  const handleChangeTermLong = (e) => {
    setisShort(false);
    isLong === false ? setisLong(true) : setisLong(false);
  };
  const handleAnnualIncome = (e) => {
    setannualIncome(e.target.value);
  };

  return (
    <div>
      <div className="tax_calculator_main">
        <div className="tax_Calculator_content">
          <div className="tax_calculator_heading">
            <span>Free Crypto Tax Calculator Australia</span>
          </div>
        </div>
        <div className="tax-calculator-body-inputs">
          <div className="year_country">
            <div className="select-year">
              <label>Financial Year</label>
              <SelectDown className="select-down-1" />
              <select
                id="financialYear"
                className="select-tag-1"
                value={year}
                onChange={handleYearChange}
              >
                {financialYears.map(({ id, y }) => {
                  return (
                    <option key={id} value={`${y}`}>
                      {y}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="select-country">
              <label>Country</label>
              <SelectDown className="select-down-2" />
              <select
                id="country"
                className="select-tag-2"
                value={country}
                onChange={handleCountryChange}
              >
                {countries.map(({ id, nn, logo }) => {
                  return (
                    <option key={id} value={`${nn}`}>
                      {nn}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="hr-divider"></div>

          <div className="crypto-prices">
            <div className="buy-price input-prefix-fix">
              <label className="buy-label">
                Enter purchase price of Crypto
              </label>
              <span className="dollar">
                <AttachMoneyIcon />
              </span>
              <input
                type="text"
                value={buyPrice}
                onChange={handleBuyPriceChange}
                className="general-input buy-price-input-field .input-padding-fix"
              />
            </div>

            <div className="sell-price input-prefix-fix">
              <label className="sell-label">Enter Sale price of Crypto</label>
              <span className="dollar">
                <AttachMoneyIcon />
              </span>
              <input
                type="text"
                value={sellPrice}
                onChange={handleSellPriceChange}
                className="general-input sell-price-input-field .input-padding-fix"
              />
            </div>
          </div>

          <div className="income-option crypto-prices">
            <div className="sell-price input-prefix-fix">
              <label className="sell-label2">Enter your Expenses</label>
              <span className="dollar">
                <AttachMoneyIcon />
              </span>
              <input
                type="text"
                value={expences}
                onChange={handleExpencesChange}
                className="general-input sell-price-input-field .input-padding-fix"
              />
            </div>

            <div className="inv-log-second-row-right">
              <label className="inv-log-label">Investment Type</label>
              <div className="inv-log-duration">
                <div className="short-term">
                  <div
                    onClick={handleChangeTerm}
                    className={`short-term-top ${
                      isShort === true ? "selected-investment" : ""
                    }`}
                  >
                    <div className="short-term-top-left">Short Term</div>
                    <div
                      className={`short-term-top-right ${
                        isShort === true ? "show-checkbox" : ""
                      }`}
                    >
                      <Checked className="svg-checked" />
                    </div>
                  </div>
                  <div className="short-term-bottom">&lt; 12 months</div>
                </div>
                <div className="long-term">
                  <div
                    onClick={handleChangeTermLong}
                    className={`long-term-top ${
                      isLong === true ? "selected-investment" : ""
                    }`}
                  >
                    <div className="long-term-top-left">Long Term</div>
                    <div
                      className={`long-term-top-right ${
                        isLong === true ? "show-checkbox" : ""
                      }`}
                    >
                      <Checked className="svg-checked" />
                    </div>
                  </div>
                  <div className="long-term-bottom">&gt; 12 months</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inv-log-third-row">
              <div className="inv-log-third-row-left">
                <label className="inv-log-label">
                  Select Your Annual Income
                </label>
                <SelectDown className="select-down-3" />
                <select
                  className="inv-log-input select-tag-3"
                  id="annualIncome"
                  onChange={handleAnnualIncome}
                  value={annualIncome}
                >
                  {customIncomeRange.map(({ id, range }) => {
                    return (
                      <option key={id} value={`${id}`}>
                        {range}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="inv-log-third-row-right">
                <div className="tax-rate-label">Tax Rate</div>
                <div className="tax-rate">{temp}</div>
              </div>
            </div>

            {isShort === true ? (
              ""
            ) : (
              <div className="crypto-prices">
                <div className="buy-price input-prefix-fix">
                  <label className="buy-label2">Capital Gains Amount</label>
                  <span className="dollar">
                    <AttachMoneyIcon />
                  </span>
                  <input
                    type="text"
                    value={capitalGain}
                    // onChange={}
                    className="general-input buy-price-input-field .input-padding-fix"
                  />
                </div>

                <div className="sell-price input-prefix-fix">
                  <label className="sell-label2">
                    Discount for long term Gain
                  </label>
                  <span className="dollar">
                    <AttachMoneyIcon />
                  </span>
                  <input
                    type="text"
                    value={discount}
                    // onChange={handleSellPriceChange}
                    className="general-input sell-price-input-field .input-padding-fix"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="tax-to-pay-container" style={isShort === true ? { marginTop: "38px" } : {marginTop: "18px"}}>
            <div className="tax-t-p-left">
              <div className="tax-t-p-left-top">
                Net Capital gains tax amount
              </div>

              <div className="tax-t-p-left-bottom">
                <AttachMoneyIcon style={{ margin: "2px" }} />
                {tt}
              </div>
            </div>
            <div className="tax-t-p-right">
              <div className="tax-t-p-right-top">The tax you need to pay*</div>
              <div className="tax-t-p-right-bottom">
                <AttachMoneyIcon className="dollar2" />
                {finaltax}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
