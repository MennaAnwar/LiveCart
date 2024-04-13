import { FC } from "react";
import ProductCard from "./ProductCard/ProductCard";

const Products: FC = () => {
  return (
    <div className="col-lg-9 main-content ">
      <div className="row skeleton-body skel-shop-products d-flex justify-content-center flex-wrap">
        <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />
        <ProductCard /> <ProductCard />
      </div>
    </div>
  );
};

export default Products;
