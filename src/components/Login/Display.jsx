import React, { useEffect } from "react";
import fire from "./Fire";
import "./display.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Display = () => {
  const signOut = () => {
    fire.auth().signOut();
  };
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  });
  return (
    <div>
      <div className="displaytext">
        <p>Congrats ! You have successfully logged In. </p>
        <br />
        <button onClick={signOut} className="logout">
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Display;
