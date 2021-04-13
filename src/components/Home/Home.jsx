import img1 from "./images/banner1.jpg";
import "./home.css";
import Footer from "../Footer/Footer";
import img2 from "./images/men1.jpg";
import img3 from "./images/women1.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  });
  const menitems = props.items.map((item) => {
    return (
      <Link to={`/men/${item.id}`}>
        <img src={item.image} alt="" className="menimage" />
      </Link>
    );
  });

  const womenitems = props.womenitems.map((item) => {
    return (
      <Link to={`/women/${item.id}`}>
        <img src={item.image} alt="" className="menimage" />
      </Link>
    );
  });
  return (
    <div className="home">
      <div className="carousel">
        <img src={img1} alt="" className="image1" />
        <div className="carouseldesc">
          <div className="carouseltext" data-aos="fade-up">
            Shop on Trendy Women's Collections.
          </div>
          <div className="carouselsmalltext" data-aos="fade-up">
            A moment of trending Style.
          </div>
          <Link to="/womentshirt">
            {" "}
            <button className="carouselbutton" data-aos="fade-right">
              Check Here
            </button>
          </Link>
        </div>
      </div>

      <div className="menpicks">
        <p className="mentitle">Men Picks</p>
        <div className="mengrid">{menitems}</div>
      </div>

      <div className="menpicks">
        <p className="womentitle">Women Picks</p>
        <div className="mengrid">{womenitems}</div>
      </div>

      <div className="categorygrid">
        <Link to="/men">
          <div className="category">
            <div className="categorytext">Men Shirts</div>
            <img src={img2} alt="" className="categoryimg" />
          </div>
        </Link>
        <Link to="/womentshirt">
          <div className="category">
            <div className="categorytext">Women Dresses</div>
            <img src={img3} alt="" className="categoryimg" />
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items.slice(0, 3),
    womenitems: state.items.slice(27, 30),
  };
};

export default connect(mapStateToProps)(Home);
