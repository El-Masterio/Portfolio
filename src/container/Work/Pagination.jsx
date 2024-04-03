import React from 'react';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="app__pagination">
      {pages?.length > 1 &&
        pages?.map((page, index) => (
          <a
            href
            key={index}
            className="app__navigation-dot"
            onClick={() => setCurrentPage(page)}
            style={currentPage === page ? { backgroundColor: '#313BAC' } : {}}
            aria-label="Pagination Dot"
          />
        ))}
    </div>
  );
};

export default Pagination;
