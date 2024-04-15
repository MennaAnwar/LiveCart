import { FC } from "react";

interface Product {
  title: string;
  price: number;
  rating: number;
  brand: string;
  description: string;
  category: string;
}
interface ItemsProps {
  product: Product;
}

const ProductDetails: FC<ItemsProps> = ({ product }) => {
  return (
    <>
      <h1 className="product-title">{product.title}</h1>
      <div className="ratings-container">
        <div className="product-ratings">
          <span className="ratings"></span>
          <span className="tooltiptext tooltip-top">{product.rating}</span>
        </div>
        <a className="rating-link" href="#">
          ( There are no reviews yet. )
        </a>
      </div>
      <hr className="short-divider" />
      <div className="price-box">
        <span className="new-price">${product.price}</span>
      </div>
      <div className="product-desc">
        <p>{product.description}</p>
      </div>
      <ul className="single-info-list">
        <li>
          CATEGORY: <strong>{product.category}</strong>
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
              /* value="1" */
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
    </>
  );
};

export default ProductDetails;
