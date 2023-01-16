//This function returns a promise which when resolved returns the data fetched from the API.
const fetchData = async (url) => {
  //fetch data from the API using built-in fetch() function
  const response = await fetch(url);

  //the purpose of this if-statement is catch resolved responses
  //where the status code is non-2xx. Otherwise they will be treated as successful requests
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  //parse the response.body property with the json() method
  const data = await response.json();
  return data;
};

export default fetchData;
