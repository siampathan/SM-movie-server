interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goFirst = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };

  const goLast = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={goFirst}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <button
        className="pagination-button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        -
      </button>

      <span className="page-indicator">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
      >
        +
      </button>
      <button
        className="pagination-button"
        onClick={goLast}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
