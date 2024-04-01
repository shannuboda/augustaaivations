import React, { useState } from 'react';

const CardComponent = ({ cardsPerPage, cardData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  // Calculate the index range for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render current page cards */}
      {currentCards.map((card, index) => (
        <div key={index}>
          {/* Render card content here */}
          <p>{card.title}</p>
          <p>{card.description}</p>
        </div>
      ))}

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button key={page} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CardComponent