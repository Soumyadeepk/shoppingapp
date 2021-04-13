import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, addList } from "../../redux/actions/actions.js";
import MenNav from "./MenNav.jsx";
import "./menstyle.css";
import { Link } from "react-router-dom";

class Trouser extends Component {
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
          <Link to={`/men/${item.id}`}>
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
        <MenNav /> <div className="tshirt">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items.slice(18, 27),
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

export default connect(mapStateToProps, mapDispatchToProps)(Trouser);
