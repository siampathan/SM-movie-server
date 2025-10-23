import {
  PaginationContainer,
  PaginationButton,
  PageIndicator,
} from "../assets/style/style";

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
    <PaginationContainer>
      <PaginationButton onClick={goFirst} disabled={currentPage === 1}>
        {"<"}
      </PaginationButton>
      <PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
        -
      </PaginationButton>

      <PageIndicator>
        Page {currentPage} of {totalPages}
      </PageIndicator>

      <PaginationButton
        onClick={handleNext}
        disabled={currentPage >= totalPages}
      >
        +
      </PaginationButton>
      <PaginationButton onClick={goLast} disabled={currentPage === totalPages}>
        {">"}
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
