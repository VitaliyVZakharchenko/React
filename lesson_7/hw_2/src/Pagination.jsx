import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage, }) => {
  let isPrevPageAvaliable = currentPage > 0;
  let isNextPageAvaliable = totalItems - itemsPerPage * (currentPage + 1) > 0;

  return (
    <div className="pagination">
      <button className="btn" disabled={!isPrevPageAvaliable} onClick={goPrev}>
        {isPrevPageAvaliable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" disabled={!isNextPageAvaliable} onClick={goNext}>
        {isNextPageAvaliable && "→"}
      </button>
    </div>
  );
};

export default Pagination;