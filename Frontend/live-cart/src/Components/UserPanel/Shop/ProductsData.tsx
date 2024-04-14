import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

export const ProductsData = async (): Promise<ProductsResponse> => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?select=title,price,brand,images"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
