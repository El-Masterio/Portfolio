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
            key={index}
            className="app__navigation-dot"
            onClick={() => setCurrentPage(page)}
            style={currentPage === page ? { backgroundColor: '#313BAC' } : {}}
          ></a>
        ))}
    </div>
  );
};

export default Pagination;
