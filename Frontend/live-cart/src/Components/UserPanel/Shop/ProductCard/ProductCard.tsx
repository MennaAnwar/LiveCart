import { FC } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  img: string;
}

const ProductCard: FC<Product> = ({ img, brand, price, title, id }) => {
  return (
    <div className="p-2 col-6 col-sm-4 col-lg-3 mb-2" id={`product-` + id}>
      <Link className="product-card" to={`/shop/product/${id}`}>
        <img src={img} className="product-img" alt="Product image" />
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{brand}</h6>
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="card-text mb-0 font-weight-bold">${price}</p>
            </div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
