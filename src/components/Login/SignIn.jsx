import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import LoginNav from "./LoginNav";
import SignUp from "./SignUp";

const SignIn = () => {
  return (
    <div>
      <Router>
        <LoginNav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default SignIn;
