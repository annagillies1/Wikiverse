// Page.js
import React from 'react';

const Page = ({ page, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to Articles</button>
      <h2>{page.title}</h2>
      <p><strong>Author:</strong> {page.author?.name || 'Unknown Author'}</p>
      <p><strong>Content:</strong> {page.content}</p>
      <p><strong>Tags:</strong> {page.tags?.map(tag => tag.name).join(', ') || 'No Tags'}</p>
      <p><strong>Date:</strong> {new Date(page.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Page;
