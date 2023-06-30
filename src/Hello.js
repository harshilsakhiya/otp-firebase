import React, { useState } from "react";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Hello = () => {
  const [otpShow, setOtpShow] = useState(false);
  const [otp, setOtp] = useState();

  const sendOtp = () => {
    if (!window.recaprecaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
            console.log("prepared phone auth process", response);
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  const onSignUp = () => {
    console.log("sdfjsdkjfhsdjk");
    sendOtp();
    const appVerifier = window.recaptchaVerifier;
    // eslint-disable-next-line no-useless-concat
    const phone = "+" + "919725150190";

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        console.log("confirmationResult", confirmationResult);
        window.confirmationResult = confirmationResult;
        setOtpShow(true);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const verifyOtp = () => {
    window.confirmationResult
      .confirm(otp)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log(err);
        window.reload()
      });
  };
  return (
    <div>
      Hello ! Niten
      <div id="recaptcha-container"></div>
      {!otpShow && (
        <div>
          <button onClick={() => onSignUp()}>send otp</button>
        </div>
      )}
      {otpShow && (
        <div>
          <input type="number" onChange={(e) => setOtp(e.target.value)} />
          <br></br>
          <button onClick={() => verifyOtp()}>verify Otp</button>
        </div>
      )}
    </div>
  );
};

export default Hello;
