import { FC } from "react";
import "./Shop.css";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products";

const Shop: FC = () => {
  return (
    <>
      <Products itemsPerPage={12} />
      <Sidebar />
    </>
  );
};

export default Shop;
