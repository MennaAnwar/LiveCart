import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard/ProductCard";

interface ItemsProps {
  currentItems: number[];
}

const Items: FC<ItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((item) => (
        <ProductCard />
      ))}
    </>
  );
};

interface ProductsProps {
  itemsPerPage: number;
}

const Products: FC<ProductsProps> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // Example items array

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="col-lg-9 main-content ">
      <div className="row skeleton-body skel-shop-products d-flex justify-content-center flex-wrap">
        <Items currentItems={currentItems} />
        <ReactPaginate
          previousLabel="←"
          nextLabel="→"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName="pagination"
          activeClassName="active"
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Products;
