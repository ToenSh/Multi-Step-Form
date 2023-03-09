import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";

export default function Plan() {
  return (
    <>
      <h1 className="card-header">Select your plan</h1>
      <p className="card-description">
        You have the option of monthly or yearly billing
      </p>
      <div className="plans">
        <button className="plans-option">
          <img
            src={arcadeIcon}
            alt="arcade-icon"
            className="plans-option__icon"
          />
          Arcade
          <span className="plans-option__price">$9/mo</span>
        </button>
        <button className="plans-option">
          <img
            src={advancedIcon}
            alt="advanced-icon"
            className="plans-option__icon"
          />
          Advanced
          <span className="plans-option__price">$12/mo</span>
        </button>
        <button className="plans-option">
          <img src={proIcon} alt="pro-icon" className="plans-option__icon" />
          Pro
          <span className="plans-option__price">$15/mo</span>
        </button>
      </div>
      <div className="billing">
        <span className="active">Monthly</span>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="switch"></label>
        <span>Yearly</span>
      </div>
    </>
  );
}
