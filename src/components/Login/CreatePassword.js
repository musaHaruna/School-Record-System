import React, { useState } from "react";
import { HeroOne, KeyIcon, Logo } from "../images";
import "../../assets/css/otp.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const CreatePassword = ({ prevStep, nextStep }) => {
  const [otp1, setOtp1] = useState(new Array(6).fill(""));
  const [otp2, setOtp2] = useState(new Array(6).fill(""));
  const [borderColor, setBorderColor] = useState("#c5c6cc");
  const [isModal, setIsModal] = useState(false);
  // eslint-disable-next-line
  const [submitBtn, setSubmitBtn] = useState("btn-blue");

  const closeModal = () => {
    setIsModal(false);
  };

  const handleChange1 = (e, index) => {
    if (isNaN(e.target.value)) return false;
    const updatedOTP1 = [...otp1];
    updatedOTP1[index] = e.target.value;
    setOtp1(updatedOTP1);
    setBorderColor("#c5c6cc");

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleChange2 = (e, index) => {
    if (isNaN(e.target.value)) return false;
    const updatedOTP2 = [...otp2];
    updatedOTP2[index] = e.target.value;
    setOtp2(updatedOTP2);
    setBorderColor("#c5c6cc");

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  let areOTPMatching = otp1.join("") === otp2.join("");
  let hasInputValues =
    otp1.some((value) => value.trim() !== "") &&
    otp2.some((value) => value.trim() !== "");
  const handleSubmit = () => {
    setBorderColor(areOTPMatching ? "#27ae60" : "#eb5757");

    if (!hasInputValues) {
      alert("Fields cannot be empty");
      setBorderColor("#c5c6cc");
      setIsModal(false);
      setSubmitBtn("btn-blue");
      return;
    }
    setIsModal(true);
    setSubmitBtn("btn-green");
  };

  return (
    <article className="register-form-flex">
      <section className="register-content">
        <div className="logo-sm create-passcode">
          <Logo />
        </div>

        <div className="register-desc">
          <div className="icon-reg">
            <KeyIcon />
          </div>
          <div>
            <h3>Create Passcode</h3>
            <p>Create a 6-digit PIN</p>
          </div>
        </div>
        <div>
          {isModal &&
            (areOTPMatching ? (
              <div className="passcode-modal">
                <div>
                  <AiFillCheckCircle className="icon" />
                </div>
                <div>
                  <h5>Successfully created</h5>
                  <p>Your passcode has successfully been created</p>
                </div>
                <RxCross2 onClick={closeModal} />
              </div>
            ) : (
              <div className="passcode-modal error">
                <div>
                  <AiFillCheckCircle className="icon" />
                </div>
                <div>
                  <h6>Passcode not match</h6>
                  <p>Passcode Error, code kindly input again</p>
                </div>
                <RxCross2 onClick={closeModal} />
              </div>
            ))}
          <div>
            <h6>New Pin</h6>
            <div className="otp-area">
              {otp1.map((data, i) => {
                return (
                  <input
                    key={i}
                    type="password"
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleChange1(e, i)}
                    style={{ borderColor }}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h6>Confirm Pin</h6>
            <div className="otp-area">
              {otp2.map((data, i) => {
                return (
                  <input
                    key={i}
                    type="password"
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleChange2(e, i)}
                    style={{ borderColor }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="register-navigate">
          <button className="btn-blue-border" onClick={prevStep}>
            <i className="fa-solid fa-chevron-left"></i>
            Previous
          </button>

          <button
            className={
              borderColor === "#27ae60"
                ? submitBtn
                : borderColor === "#eb5757"
                  ? "btn-red"
                  : "btn-blue"
            }
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </section>
      <section className="register-hero">
        <HeroOne />
      </section>
    </article>
  );
};

export default CreatePassword;
