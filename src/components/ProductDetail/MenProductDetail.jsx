import { connect } from "react-redux";
import { addItem } from "../../redux/actions/actions.js";
import "./mendetail.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MenProductDetail = (props) => {
  const product = props.items.find((p) => p.id == props.match.params.id);
  const handleClick = (id) => {
    props.addItem(id);
    toast.success("Item added to Cart");
  };
  return (
    <div className="menproductdetail">
      <img src={product.image} alt="" className="productimage" />
      <div className="productdetail">
        <div className="producttitle">{product.title}</div>
        <div className="productprice">Rs {product.price}</div>
        <button
          className="productdetailbtn"
          onClick={() => {
            handleClick(product.id);
          }}
        >
          Add to Cart
        </button>
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenProductDetail);
