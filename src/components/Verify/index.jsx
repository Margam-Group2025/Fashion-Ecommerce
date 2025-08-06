import React, { useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Verify() {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // Only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Submitted OTP:", enteredOtp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center"
      >
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-orange-500" />
        </div>
        <h2 className="text-xl font-semibold mb-2">OTP Verification</h2>
        <p className="text-gray-500 mb-6">Enter the 4-digit code sent to your Phone no</p>

        <div className="flex justify-between mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={otp[i]}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputsRef.current[i] = el)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
}
