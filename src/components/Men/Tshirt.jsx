import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, addList } from "../../redux/actions/actions.js";
import "./menstyle.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MenNav from "./MenNav";
import Footer from "../Footer/Footer.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tshirt = (props) => {
  const handleList = (id) => {
    props.addList(id);
    toast.success("Item added to Wishlist");
  };

  let itemList = props.items.map((item) => {
    return (
      <div className="prodcard" key={item.id}>
        <Link to={`/men/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
        <div className="carddata">
          <p className="title">{item.title}</p>
        </div>

        <div className="desc">
          <p className="price">Rs {item.price}</p>
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div
            href=""
            className="button"
            onClick={() => {
              handleList(item.id);
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
      <MenNav />
      <div className="tshirt">{itemList}</div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items.slice(0, 9),
    cartList: state.addList,
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

export default connect(mapStateToProps, mapDispatchToProps)(Tshirt);
