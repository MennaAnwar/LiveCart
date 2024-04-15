import { FC, useContext } from "react";
import "../Shop.css";
import Context from "../../../../Context";
import { Link } from "react-router-dom";

const Path: FC = () => {
  const { path } = useContext(Context);
  return (
    <nav className="breadcrumb-nav">
      <div className="Path">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bx bx-home"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="/shop">Shop</Link>
          </li>
          {path &&
            path.split("/").map((path: string, index: number) => (
              <li key={`path-` + index} className="breadcrumb-item active">
                {path}
              </li>
            ))}
        </ol>
      </div>
    </nav>
  );
};

export default Path;
