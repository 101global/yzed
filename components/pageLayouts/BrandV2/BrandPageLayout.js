import React, { useState } from 'react';

import BrandModelTop from './';
import { Pager } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';

const FullPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pages = ['Model', 'About', 'Contact'];
    const pageNumbers = [];

    for (let i = 0; i < pages.length; i++) {
      pageNumbers.push(
        <Pager.Item
          key={i}
          eventKey={i}
          onSelect={() => handlePageChange(i)}
          className={currentPage === i ? 'active item' : 'item'}>
          {pages[i]}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <>
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
        <div className='component first-component' style={{ background: 'green' }}>
          <BrandModelTop />
        </div>
        <div className='component second-component' style={{ background: 'yellow' }}>
          <h2>About</h2>
        </div>
        <div className='component third-component' style={{ background: 'red' }}>
          <h2>Contact</h2>
        </div>
      </ReactPageScroller>
      <Pager className='pagination-additional-class' bsSize='large'>
        {pagesNumbers}
      </Pager>
      <style jsx global>{`
        .component {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        li.active a {
          color: red;
        }
      `}</style>
    </>
  );
};

export default FullPage;
