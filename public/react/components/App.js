// App.js

import React, { useEffect, useState } from 'react';
import PagesList from './PagesList';
import Page from './Page';
import api from '../api';

export const App = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [tags, setTags] = useState('');

  const fetchPages = async () => {
    try {
      const pagesData = await api.fetchPages();
      setPages(pagesData);
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title,
        content,
        name: authorName,
        email: authorEmail,
        tags: tags.trim() ? tags : undefined,
      };

      // Assuming api.fetchPages handles POST requests
      await api.fetchPages(payload);

      // Reset form fields
      setTitle('');
      setContent('');
      setAuthorName('');
      setAuthorEmail('');
      setTags('');

      // Refetch pages to include the new one
      fetchPages();
    } catch (error) {
      console.error('Error adding page:', error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>

      {/* Add Page Form */}
      <form onSubmit={handleSubmit}>
        <h3>Add New Page</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Author Email"
          value={authorEmail}
          onChange={(e) => setAuthorEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (space separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Add Page</button>
      </form>

      {selectedPage ? (
        <Page page={selectedPage} onBack={() => setSelectedPage(null)} />
      ) : (
        <PagesList pages={pages} onSelectPage={setSelectedPage} />
      )}
    </div>
  );
};

export default App;
