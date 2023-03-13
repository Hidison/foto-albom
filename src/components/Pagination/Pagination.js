import React, { useEffect, useState } from "react";
import { getTotalPages } from "../../utils/utils";
import PaginationStyles from "./Pagination.module.css";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../services/Pagination";

const Pagination = ({ totalPage }) => {
  const dispatch = useDispatch();
  const pagesArray = getTotalPages(totalPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setPageNumber(page));
  }, [dispatch, page]);

  return (
    <div className={PaginationStyles.buttons_container}>
      {pagesArray.map((p) => (
        <button
          onClick={() => setPage(p)}
          key={p}
          className={
            p !== page
              ? PaginationStyles.buttons
              : `${PaginationStyles.buttons} ${PaginationStyles.buttons_disabled}`
          }
          disabled={p === page ? true : false}
          style={{ marginLeft: "2px" }}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
