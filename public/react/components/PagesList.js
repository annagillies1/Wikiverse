// PagesList.js
import React from 'react';

const PagesList = ({ pages, onSelectPage }) => {
  return (
    <div>
      <h2>Articles</h2>
      {pages.length > 0 ? (
        <ul>
          {pages.map((page) => (
            <li key={page.id} onClick={() => onSelectPage(page)}>
              {page.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
};

export default PagesList;
