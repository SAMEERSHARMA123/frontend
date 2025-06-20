import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState(120); 
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

    const otpData = location?.state?.form?.registerUser;
     
  const otpValue = otpData?.otp;
  const otpExpiry = otpData?.otpExpiryTime;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      alert("Please enter all 6 digits of the OTP");
      return;
    }

    const currentTime = Date.now();
    if (currentTime > otpExpiry || timeLeft === 0) {
      alert("OTP has expired. Please request a new one.");
      return;
    }

    if (enteredOtp === otpValue.toString()) {
      alert("Your OTP is successfully matched");
      navigate('/');
    } else {
      alert("Your OTP is not matched");
    }
  };

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-2xl shadow-md text-center w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify OTP</h2>
        <p className="text-sm text-gray-600 mb-2">
          Enter the 6-digit code sent to your number
        </p>
        <p className="text-red-500 font-medium mb-4">
          OTP expires in: {formatTime()}
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={timeLeft === 0}
            />
          ))}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={timeLeft === 0}
          className={`w-full font-semibold py-2 rounded-lg transition ${
            timeLeft === 0
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OtpInput;
