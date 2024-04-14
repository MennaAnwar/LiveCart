import { FC } from "react";
import PrdoctSwiper from "./ProductSwiper";
import "./ViewProduct.css";

const ViewProduct: FC = () => {
  return (
    <div className="container skeleton-body skel-shop-products loaded">
      <div className="product-single-container product-single-default">
        <div className="row">
          <div className="product-single-gallery col-lg-5 col-md-6">
            <PrdoctSwiper />
          </div>
          <div className="product-single-details col-lg-7 col-md-6">
            <h1 className="product-title">Sports Watch</h1>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings"></span>
                <span className="tooltiptext tooltip-top">0.00</span>
              </div>
              <a className="rating-link" href="#">
                ( There are no reviews yet. )
              </a>
            </div>
            <hr className="short-divider" />
            <div className="price-box">
              <span className="new-price">$259.00</span>
            </div>
            <div className="product-desc">
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
            </div>
            <ul className="single-info-list">
              <li>
                CATEGORY: <strong>T-shirts</strong>
              </li>
            </ul>
            <div className="product-action">
              <div className="product-single-qty">
                <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                  <span className="input-group-btn input-group-prepend">
                    <button
                      className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                      type="button"
                    >
                      -
                    </button>
                  </span>
                  <input
                    className="horizontal-quantity form-control"
                    type="number"
                    min="1"
                    max="56"
                    value="1"
                  />
                  <span className="input-group-btn input-group-append">
                    <button
                      className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                      type="button"
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
              <button className="btn btn-dark add-cart shopping-cart mr-2 ">
                <i className="bx bx-cart mx-2"></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
