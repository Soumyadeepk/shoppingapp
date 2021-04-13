import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, addList } from "../../redux/actions/actions.js";
import "../Men/menstyle.css";
import { Link } from "react-router-dom";
import WomenNav from "./WomenNav";

class WomenTshirt extends Component {
  handleClick = (id) => {
    this.props.addItem(id);
  };
  handleList = (id) => {
    this.props.addList(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="prodcard" key={item.id}>
          <Link to={`/women/${item.id}`}>
            <img src={item.image} alt={item.title} />
          </Link>
          <div className="carddata">
            <p className="title">{item.title}</p>
            <p className="carddesc">{item.desc}</p>
          </div>

          <div className="desc">
            <p className="price">Rs {item.price}</p>

            <div
              href=""
              className="button"
              onClick={() => {
                this.handleList(item.id);
              }}
            >
              Wish
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <WomenNav />
        <div className="tshirt">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items.slice(27, 36),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
    },
    addList: (id) => {
      dispatch(addList(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WomenTshirt);
