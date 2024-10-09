import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(144)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            {" "}
            ${product.old_price}{" "}
          </div>
          <div className="productdisplay-right-prices-new">
            {" "}
            ${product.new_price}{" "}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A white jacket is a versatile and stylish wardrobe piece that adds a
          touch of elegance to any outfit. It exudes a clean, fresh look, making
          it ideal for both casual and formal occasions. Whether tailored or
          relaxed, a white jacket pairs well with a variety of colors and
          textures, making it easy to dress up or down. Its bright, neutral tone
          makes it a great choice for layering, allowing other elements of an
          outfit to stand out while maintaining a polished appearance. Perfect
          for warm or cool weather, it’s a timeless fashion staple.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category : </span>Women , T-shirt , Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
