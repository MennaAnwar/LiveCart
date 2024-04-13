import { FC } from "react";
import "../Shop.css";

const Path: FC = () => {
  return (
    <nav className="breadcrumb-nav">
      <div className="Path">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/react/porto/demo37/">
              <i className="bx bx-home"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Shop</li>
        </ol>
      </div>
    </nav>
  );
};

export default Path;
