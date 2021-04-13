import React, { Component } from "react";
import { connect } from "react-redux";
import fire from "../Login/Fire";
import Footer from "../Footer/Footer";
import StripeCheckout from "react-stripe-checkout";
import { NavLink } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../redux/actions/actions";
import "./cart.css";
import Login from "../Login/Login";
import SignIn from "../Login/SignIn";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //  window.location.href = "http://localhost:3000";
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    let addedItems = this.props.items.length ? (
      <div>
        <p className="cartTitle">YOUR BAG</p>
        <ul className="cartul">
          {this.props.items.map((item) => {
            return (
              <li key={item.id}>
                <div className="cartlist">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="cartimage"
                  />

                  <div className="itemdesc">
                    <p className="cartitemtitle">Polo Shirt Slim Fit </p>
                    <p>Rs {item.price}</p>
                    <br />
                    <div className="quantity">
                      <p>Quantity</p>
                      <div>
                        <p>
                          <span
                            className="addsubitem"
                            onClick={() => {
                              this.handleSubtractQuantity(item.id);
                            }}
                          >
                            -
                          </span>
                          <span className="itemqua"> {item.quantity}</span>

                          <span
                            className="addsubitem"
                            onClick={() => {
                              this.handleAddQuantity(item.id);
                            }}
                          >
                            +
                          </span>
                        </p>
                      </div>
                      <br />
                    </div>
                    <button
                      className="cartbtn"
                      onClick={() => {
                        this.handleRemove(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="cartTotal">
          <div className="totalvalue">
            <p>Total </p>
            <p> Rs {this.props.total}</p>
          </div>
          <StripeCheckout stripeKey="pk_test_51Hfm1JDbnebJu2VS2pg52z6EW4ECnHdahMeDYDvnQKVO1tovt0Yd3dxQioG62XeTmD0UrgXo7emgWGGrnrb6MEKS00TUUo3IIf">
            <button className="checkout">CHECKOUT</button>
          </StripeCheckout>
          
          <p className="totaltext">We accept debit cards.</p>
        </div>
      </div>
    ) : (
      <p className="emptycart">CART IS EMPTY &nbsp; :(</p>
    );
    return (
      <div>
        <div className="cart">
          {this.state.user ? <ul>{addedItems}</ul> : <Login />}
        </div>
        <div className="cartfooter">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
