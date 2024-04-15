import { FC, useContext } from "react";
import "../Shop.css";
import Context from "../../../../Context";

const Path: FC = () => {
  const { path } = useContext(Context);
  return (
    <nav className="breadcrumb-nav">
      <div className="Path">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <i className="bx bx-home"></i>
          </li>
          <li className="breadcrumb-item active">Shop</li>
          {path.split("/").map((path: string, index: number) => (
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
