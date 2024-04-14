import { FC } from "react";
import "./Shop.css";
import Path from "./Path/path";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products";

const Shop: FC = () => {
  return (
    <main className="main">
      <Path />
      <div className="mx-4">
        <div className="row">
          <Products itemsPerPage={12} />
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Shop;
