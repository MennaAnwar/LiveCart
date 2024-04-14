import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard/ProductCard";
import { ProductsData } from "./ProductsData";

interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  images: string[];
}

interface ItemsProps {
  currentItems: Product[];
}

const Items: FC<ItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((item) => (
        <ProductCard
          img={item.images[0]}
          brand={item.brand}
          title={item.title}
          id={item.id}
          price={item.price}
        />
      ))}
    </>
  );
};

interface ProductsProps {
  itemsPerPage: number;
}

const Products: FC<ProductsProps> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    ProductsData().then((data: any) => {
      setProducts(data.products);
      console.log(data.products);
      console.log(data.total);
      setPageCount(Math.ceil(data.total / itemsPerPage));
    });
  }, [itemsPerPage]);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
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
