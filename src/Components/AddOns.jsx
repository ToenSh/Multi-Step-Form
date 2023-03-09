export default function AddOns() {
  return (
    <>
      <h1 className="card-header">Pick add-ons</h1>
      <p className="card-description">
        Add-ons help enhance your gaming experience
      </p>
      <form className="addOns">
        <div className="addOns-option">
          <input type="checkbox" id="checkbox" />
          <div className="addOns-option__desc">
            Online service
            <span>Access to multiplayer games</span>
          </div>
          <span className="addOns-option__price">+10/yr</span>
        </div>
        <div className="addOns-option">
          <input type="checkbox" id="checkbox" />
          <div className="addOns-option__desc">
            Larger storage
            <span>Extra 1TB of cloud save</span>
          </div>
          <span className="addOns-option__price">+20/yr</span>
        </div>
        <div className="addOns-option">
          <input type="checkbox" id="checkbox" />
          <div className="addOns-option__desc">
            Customizable profile
            <span>Custom theme on your profile</span>
          </div>
          <span className="addOns-option__price">+20/yr</span>
        </div>
      </form>
    </>
  );
}
