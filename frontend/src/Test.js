// import fetchClient from '@renderer/lib/fetch-client';


// Example POST request using fetch
// Calling fetchClient.POST()
// const authToken = await getAuthToken();

async function addDish() {
  var url = 'http://localhost:8000';

  const requestBody = {
    "name": "Pepperoni Pizza",
    "points": 15,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Pepperoni", "Tomato Sauce", "Cheese", "Pizza Dough"]
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(url + '/dishes/', requestOptions);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`Non-OK response with code ${response.status}: ${response.statusText}`);
    }

    const asset_id = responseData.id;
    const asset_name = responseData.name;
    console.log(asset_id);
    console.log(asset_name);
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getDishes(search = null, type = null) {
  var url = 'http://localhost:8000/dishes/';

  // Construct query parameters
  let queryParams = '';
  if (search || type) {
    queryParams += '?';
    if (search) queryParams += `search=${encodeURIComponent(search)}&`;
    if (type) queryParams += `type=${encodeURIComponent(type)}&`;
    queryParams = queryParams.slice(0, -1); // Remove trailing '&'
  }

  try {
    const response = await fetch(url + queryParams);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`Non-OK response with code ${response.status}: ${response.statusText}`);
    }

    // Handle response data if needed
    console.log(responseData);
    return responseData; // Assuming you want to return the data
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to handle it outside this function
  }
}

// addDish();
getDishes('Itali');
