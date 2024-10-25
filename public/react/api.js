let apiURL

if (process.env.NODE_ENV === 'development') {
  apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'
} else {
  apiURL = '/api'
}


const fetchPages = async (pageData) => {
  if (pageData) {
    // POST request to create a new page
    const response = await fetch(`${apiURL}/wiki`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pageData),
    });

    if (!response.ok) {
      throw new Error('Failed to create new page');
    }
    return response.json(); // return the newly created page
  } else {
    // GET request to fetch pages
    const response = await fetch(`${apiURL}/wiki`);
    if (!response.ok) {
      throw new Error('Failed to fetch pages');
    }
    return response.json();
  }
};


 const fetchPageById = async (id) => {
  const response = await fetch (`${apiURL}/wiki/${id}`);
  if (!response.ok){
    throw new Error('Failed to fetch page with this id ${id}')
  }
  const page = await response.json();
  return page;
}

export default {
  apiURL,
  fetchPages,
  fetchPageById,
};
