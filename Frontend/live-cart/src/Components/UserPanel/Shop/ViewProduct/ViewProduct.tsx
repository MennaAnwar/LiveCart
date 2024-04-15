import { FC, useContext, useEffect, useState } from "react";
import ProductSwiper from "./ProductSwiper";
import "./ViewProduct.css";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import Context from "../../../../Context";
import Loader from "../../Loader/Loader";

interface Product {
  images: string[];
  id: number;
  title: string;
  price: number;
  brand: string;
  description: string;
  rating: number;
  category: string;
}

const ViewProduct: FC = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const { setPath, isLoading, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        setProductDetails(response.data);
        setPath(response.data.category + "/" + response.data.title);
        setLoading(false);
        return response.data;
      })
      .catch(function (error) {
        console.error("Failed to fetch data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container skeleton-body skel-shop-products loaded">
      <div className="product-single-container product-single-default">
        <div className="row">
          <div className="product-single-gallery col-lg-5 col-md-6">
            {productDetails && <ProductSwiper imgs={productDetails.images} />}
          </div>
          <div className="product-single-details col-lg-7 col-md-6">
            {productDetails && <ProductDetails product={productDetails} />}
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default ViewProduct;
