import React from "react";
import thankYouIcon from "../assets/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <>
      <div className="thank-you">
        <img src={thankYouIcon} alt="thank-you" className="thank-you-img" />
        <h1 className="thank-you-header">Thank you!</h1>
        <p className="thank-you-description">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </>
  );
}
