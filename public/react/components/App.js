import React, { useEffect, useState } from 'react';
import  PagesList  from './PagesList';
import Page from './Page.js';
import api from '../api.js';



export const App = () => {
  const [pages, setPages] = useState([])
  const [selectedPage, setSelectedPage] = useState(null)



  useEffect(() => {
    const getPages = async () =>{
      try {
      const pagesData = await api.fetchPages();
      setPages(pagesData); 
    } catch (error){ 
      console.error('error fetching pages: ', error)
    }
    };

    getPages();
  }, []);

  return (
    <div>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {selectedPage ? ( 
        <Page page={selectedPage} onBack={() => setSelectedPage(null)} />
      ) : (
        <PagesList pages={pages} onSelectPage={setSelectedPage} />
      )}
    </div>
  );
};
export default App;
