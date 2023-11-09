import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import cardImage from "../../assets/card-image.png";

import "./card.styles.css";

const card = () => {
  return (
    <div className="website-card-container">
      <div className="card-header">
        <div className="card-header-heading">
          Get Started with KoinX for FREE
        </div>
        <div className="card-header-content">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <div className="card-image-container">
        <img src={cardImage} />
      </div>
      <button>
        <div>
          <span>Get Started for FREE</span>
          <ArrowRight />
        </div>
      </button>
    </div>
  );
};

export default card;
