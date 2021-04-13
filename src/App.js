import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Women from "./components/Women/Women";
import Navbar from "./components/Navbar/Navbar";
import CheckLog from "./components/Login/CheckLog";
import Wishlist from "./components/WishList/Wishlist";
import Check from "./components/Cart/Check";
import MenProductDetail from "./components/ProductDetail/MenProductDetail";
import Tshirt from "./components/Men/Tshirt";
import Shirt from "./components/Men/Shirt";
import Trouser from "./components/Men/Trouser";
import WomenTshirt from "./components/Women/WomenTshirt";
import WomenDress from "./components/Women/WomenDress";
import WomenTrouser from "./components/Women/WomenTrouser";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <div className="shopping">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/women" exact component={Women} />
            <Route path="/wishlist" exact component={Wishlist} />
            <Route path="/checkout" exact component={Check} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={CheckLog} />
            <Route path="/men" exact component={Tshirt} />
            <Route path="/shirt" exact component={Shirt} />
            <Route path="/trouser" exact component={Trouser} />
            <Route path="/womentshirt" exact component={WomenTshirt} />
            <Route path="/womendress" exact component={WomenDress} />
            <Route path="/womentrouser" exact component={WomenTrouser} />
            <Route path="/men/:id" component={MenProductDetail} />
            <Route path="/women/:id" component={MenProductDetail} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
