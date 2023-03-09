export default function Personal() {
  return (
    <>
      <h1 className="card-header">Personal info</h1>
      <p className="card-description">
        Please provide your name, email address, and phone number.
      </p>
      <form className="personal-form">
        <div className="personal-form__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="personal-form__input">
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            placeholder="e.g.  stephenking@lorem.com"
          />
        </div>
        <div className="personal-form__input">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
}
