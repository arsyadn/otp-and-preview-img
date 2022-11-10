import React, { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const OtpCode = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [checkerOtp, setCheckerOtp] = useState(new Array(5).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((val, idx) => (idx === index ? element.value : val))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleCheckerChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setCheckerOtp(
      [...checkerOtp].map((val, idx) => (idx === index ? element.value : val))
    );
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOnClick = () => {
    if (otp.join("").length < 5 || checkerOtp.join("").length < 5) {
      setOtp([...otp.map(() => "")]);
      setCheckerOtp([...checkerOtp.map(() => "")]);
      return alert("Please enter the entire OTP");
    } else if (otp.toString() === checkerOtp.toString()) {
      setOtp([...otp.map(() => "")]);
      setCheckerOtp([...checkerOtp.map(() => "")]);
      setTimeout(() => {
        navigate("/upload");
      }, 1500);
      return alert(`Your OTP is ${otp}`);
    } else {
      setOtp([...otp.map(() => "")]);
      setCheckerOtp([...checkerOtp.map(() => "")]);
      return alert("Your OTP isn't correct");
    }
  };

  return (
    <div className="pt-6 flex flex-col items-center">
      <p>CREATE PIN</p>
      <div>
        <p className="mt-20">Silahkan masukkan pin anda</p>
        {otp?.map((data, index) => {
          return (
            <Input
              maxLength="1"
              name="otp"
              className="mt-3 border-2 border-red-600 w-10 h-10 ml-4 pl-4 pb-2"
              key={index}
              value={data === "" ? null : data.toString().replace(data, ".")}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <p>Silahkan masukkan ulang pin anda</p>
        {checkerOtp?.map((data, index) => {
          return (
            <Input
              maxLength="1"
              name="otp"
              className="mt-3 border-2 border-red-600 w-10 h-10 ml-4 pl-4 pb-2"
              key={index}
              value={data === "" ? null : data.toString().replace(data, ".")}
              onChange={(e) => handleCheckerChange(e.target, index)}
            />
          );
        })}
      </div>
      <Button
        type="primary"
        className="bg-black text-white text-xs px-6 py-1 mt-14"
        onClick={handleOnClick}
      >
        Submit PIN
      </Button>
    </div>
  );
};

export default OtpCode;
