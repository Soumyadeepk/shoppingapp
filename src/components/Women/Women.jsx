import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WomenNav from "./WomenNav";
import WomenTshirt from "./WomenTshirt";
import Footer from "../Footer/Footer";
import WomenDress from "./WomenDress";
import WomenTrouser from "./WomenTrouser";
const Women = () => {
  const style = {
    marginTop: "50px",
  };
  return (
    <div className="men">
      <Router>
       
        <Switch>
         
        </Switch>
      </Router>
      <div style={style}>
        <Footer />
      </div>
    </div>
  );
};

export default Women;
