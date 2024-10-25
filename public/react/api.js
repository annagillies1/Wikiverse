let apiURL

if (process.env.NODE_ENV === 'development') {
  apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'
} else {
  apiURL = '/api'
}


 const fetchPages = async () => {
  const response = await fetch(`${apiURL}/wiki`);
  if (!response.ok){
    throw new Error ('failed to fetch pages')
  }
  const pages = await response.json()
  return pages;
}


 const fetchPageById = async (id) => {
  const response = await fetch (`${apiURL}/pages/${id}`);
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
