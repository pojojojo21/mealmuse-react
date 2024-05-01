// import fetchClient from '@renderer/lib/fetch-client';


// Example POST request using fetch
// Calling fetchClient.POST()
// const authToken = await getAuthToken();

export async function addDish() {
  var url = 'http://localhost:8000';

  var assetName = "Risotto"
  const response = await getDishes(assetName);
  const dishes = response.dishes
  if (dishes.length > 0) {
    console.error('Error:', "Asset with that name already exists in DB");
    return;
  }

  const requestBody = {
    "name": assetName,
    "points": 15,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Arborio rice", "Broth", "White wine", "Cheese"]
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

export async function getDishes(search = null, type = null) {
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
    // console.log(responseData);
    return responseData; // Assuming you want to return the data
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to handle it outside this function
  }
}

export async function updateDishStatus(assetName) {
  var url = 'http://localhost:8000/dishes/';

  const response = await getDishes(assetName);
  const dishes = response.dishes;
  if (dishes.length === 0) {
    console.error('Error:', "Asset with that name does not exist in DB");
    return;
  }

  var currentDish = dishes[0];

  currentDish.status = !currentDish.status;



}

// addDish();
// getDishes('Itali');
