import { NavLink } from "react-router-dom";
import "./loginnav.css";
const LoginNav = () => {
  return (
    <div>
      <ul className="linkul">
        <li>
          <NavLink to="/login" className="linkitem" activeClassName="linkitemactive" >LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="linkitem" activeClassName="linkitemactive">SIGNUP</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LoginNav;
