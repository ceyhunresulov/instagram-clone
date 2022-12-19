import React from "react";
import { useState, useEffect } from "react";

function LoginImg() {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    setInterval(() => {
      if (index === 4) setIndex(1);
      else setIndex(index + 1);
      return () => clearInterval();
    }, 5000);
  }, [index]);
  return (
    <div className="h-[581px] w-[380px] bg-login-pattern bg-center bg-top relative">
      <img
        src={require(`../../images/inst1.png`)}
        alt=""
        className={`transition-all ease-linear duration-1000 h-[538px] w-[250px] absolute right-4 bottom-3 ${
          index === 1 ? "visible opacity-1" : "invisible opacity-0"
        }`}
      />

      <img
        src={require(`../../images/inst2.png`)}
        alt=""
        className={`transition-all ease-linear duration-1000 h-[538px] w-[250px] absolute right-4 bottom-3 ${
          index === 2 ? "visible opacity-1" : "invisible opacity-0"
        }`}
      />

      <img
        src={require(`../../images/inst3.png`)}
        alt=""
        className={`transition-all ease-linear duration-1000 h-[538px] w-[250px] absolute right-4 bottom-3 ${
          index === 3 ? "visible opacity-1" : "invisible opacity-0"
        }`}
      />

      <img
        src={require(`../../images/inst4.png`)}
        alt=""
        className={`transition-all ease-linear duration-1000 h-[538px] w-[250px] absolute right-4 bottom-3  ${
          index === 4 ? "visible opacity-1" : "invisible opacity-0"
        }`}
      />
    </div>
  );
}

export default LoginImg;
