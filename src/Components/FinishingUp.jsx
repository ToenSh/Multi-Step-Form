import { Link } from "react-router-dom";
import Plan from "./Plan";

export default function FinishingUp() {
  return (
    <>
      <h1 className="card-header">Finishing up</h1>
      <p className="card-description">
        Double-check everything looks OK before confirming
      </p>

      <div className="summary">
        <div className="plan">
          <h4 className="plan-header">Arcade (Monthly)</h4>
          <Link to="/select-plan" element={<Plan />}>
            Change
          </Link>
          <span className="plan-price">$9/mo</span>
        </div>
        <div className="summary-addons">
          <p>Online service</p>
          <span>+1/mo</span>
        </div>
        <div className="summary-addons">
          <p>Larger storage</p>
          <span>+2/mo</span>
        </div>
        <div className="summary-total">
          <p>Total (per month)</p>
          <span>+12/mo</span>
        </div>
      </div>
    </>
  );
}
