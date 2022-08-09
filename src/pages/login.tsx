import React, { useState } from "react";
import { firebase, auth } from "@/helpers/firebaseConfig";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState<any>();

  const signin = () => {
    if (phoneNumber === "") return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });

    auth
      .signInWithPhoneNumber(phoneNumber, verify)
      .then((result) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const ValidateOtp = () => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then(() => {
        setStep("VERIFY_SUCCESS");
      })
      .catch(() => {
        alert("Incorrect code");
      });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <div>
        {step === "INPUT_PHONE_NUMBER" && (
          <div>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="phone number"
            />
            <br />
            <br />
            <div id="recaptcha-container"></div>
            <button onClick={signin}>Send OTP</button>
          </div>
        )}

        {step === "VERIFY_OTP" && (
          <div>
            <input
              type="text"
              placeholder={"Enter your OTP"}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={ValidateOtp}>Verify</button>
          </div>
        )}

        {step === "VERIFY_SUCCESS" && <h3>Verify success</h3>}

        {step === "VERIFY_FAIL" && <h3>Verify Fail</h3>}
      </div>
    </div>
  );
};

export default Login;
