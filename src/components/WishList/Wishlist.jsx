import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";

import { removeItem, addItem, removeList } from "../../redux/actions/actions";
import "./wishlist.css";

class Wishlist extends Component {
  handleRemove = (id) => {
    this.props.removeList(id);
  };
  handleClick = (id) => {
    this.props.addItem(id);
    this.props.removeList(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      <div>
        <p className="cartTitle">WISHLIST</p>
        <ul className="wishlist">
          {this.props.items.map((item) => {
            return (
              <li key={item.id}>
                <div className="wishitems">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="wishimage"
                  />

                  <div className="wishdesc">
                    <p> {item.title}</p>
                    <p>Rs {item.price}</p>
                  </div>
                  <div
                    href=""
                    className="button"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                    className="wishadd"
                  >
                    Cart
                  </div>
                  <div
                    onClick={() => {
                      this.handleRemove(item.id);
                    }}
                    className="wishremove"
                  >
                    <i class="fas fa-times fa-lg"></i>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    ) : (
      <p className="emptycart">
        WISHLIST IS EMPTY &nbsp; :(
      </p>
    );
    return (
      <div>
        <div className="cart">{addedItems}</div>

        <div className="wishfooter" >
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeList: (id) => {
      dispatch(removeList(id));
    },
    addItem: (id) => {
      dispatch(addItem(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
