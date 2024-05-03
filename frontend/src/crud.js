// import fetchClient from '@renderer/lib/fetch-client';


// Example POST request using fetch
// Calling fetchClient.POST()
// const authToken = await getAuthToken();
// var localURL = 'http://localhost:8000';
// var url = 'https://harmless-hookworm-immensely.ngrok-free.app';
var url = 'https://freely-sweeping-molly.ngrok-free.app';
// var url = '/api'
// var url = '';

// input: json dish format
export async function addDish(requestBody) {
  var dishName = requestBody.name;

  const response = await getDishes(dishName);
  const dishes = response.dishes;

  if (dishes.length > 0) {
    console.error('Error:', "Dish with that name already exists in DB");
    return;
  }

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

    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getDishes(search = null, type = null) {

  // Construct query parameters
  let queryParams = '';
  if (search || type) {
    queryParams += '?';
    if (search) queryParams += `search=${encodeURIComponent(search)}&`;
    if (type) queryParams += `type=${encodeURIComponent(type)}&`;
    queryParams = queryParams.slice(0, -1); // Remove trailing '&'
  }

  try {
    console.log(url + '/dishes/' + queryParams);
    const response = await fetch(url + '/dishes/' + queryParams, {
      method: 'GET',
      headers: { "ngrok-skip-browser-warning": "69420" },
    });
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

export async function getDishByName(dish) {
  const response = await getDishes(dish);
  const dishes = response.dishes;
  if (dishes.length === 0) {
    console.error('Error:', "Dish with that name does not exist in DB");
    return;
  }
  return dishes[0];
}

export async function getDishStatusByName(dish) {
  const response = await getDishes(dish);
  const dishes = response.dishes;
  if (dishes.length === 0) {
    console.error('Error:', "Dish with that name does not exist in DB");
    return;
  }
  return dishes[0].status;
}

export async function updateDishStatus(dish) {

  var currentDish = await getDishByName(dish);

  const requestBody = {
    "id": currentDish.id,
    "name": currentDish.name,
    "points": currentDish.points,
    "status": !currentDish.status,
    "cuisine": currentDish.cuisine,
    "ingredients": currentDish.ingredients
  };

  try {

    const updateResponse = await fetch(url + '/dishes/' + currentDish.name, {
      method: 'PUT', // or 'POST' if your backend requires POST for updates
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      },
      body: JSON.stringify(requestBody)
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to update dish status');
    }

  } catch (error) {
    console.error('Error updating dish status:', error.message);
  }

}

// addDish();
// getDishes('Itali');
// updateDishStatus('Ramen');

const cuisineList = ['American', 'Japanese', 'Mexican',
  'Korean', 'Greek', 'French', 'Spanish', 'Russian',
  'Italian', 'Swiss'
];

const ingredientList = ['Apples', 'Apple Sauce', 'Arborio Rice',
  'Assorted Fillings', 'Assorted Toppings', 'Avocado',
  'Bacon', 'Bechamel Sauce', 'Beef', 'Bell Pepper', 'Bread',
  'Bread Crumbs', 'Broth', 'Burger Bun', 'Cabbage', 'Carrot',
  'Charcuterie', 'Cheese', 'Chicken', 'Chips', 'Chorizo',
  'Cinnamon', 'Cream', 'Dijon Mustard', 'Dill', 'Duck',
  'Egg', 'Eggplant', 'Escargot', 'Feta Cheese', 'Fish',
  'Flour', 'Green Peas', 'Ground Beef', 'Ground Meat',
  'Gruyère Cheese', 'Ham', 'Honey', 'Hummus', 'Italian Cheeses',
  'Jalapeño', 'Lamb', 'Leek', 'Lime Juice', 'Marinated Beef', 'Mayonnaise',
  'Meat', 'Milk', 'Miso Paste', 'Mushroom', 'Mussels',
  'Noodles', 'Nori', 'Nuts', 'Onion', 'Parmesan Cheese',
  'Pasta', 'Pecorino Romano Cheese', 'Pepper', 'Pepperoni',
  'Phyllo Dough', 'Pickle', 'Pie Crust', 'Pizza Dough',
  'Potato', 'Raclette Cheese', 'Radish', 'Ramen Noodles',
  'Red Wine', 'Rice', 'Sauce', 'Sausage', 'Sauteed Vegetables',
  'Scallion', 'Sesame', 'Shallot', 'Shrimp', 'Sour Cream',
  'Spinach', 'Steak', 'Sugar', 'Swiss Cheeses', 'Taco Shell',
  'Thyme', 'Tofu', 'Tomato', 'Tomato Sauce', 'Tortillas',
  'Tzatziki', 'White Wine', 'Yeast'

];

const dishNameList = ['Pepperoni Pizza', 'Cheeseburger',
  'Mac and Cheese', 'Grilled Cheese', 'Apple Pie', 'Ramen',
  'Sushi', 'Miso Soup', 'Ground Beef Tacos', 'Guacamole',
  'Quesadilla', 'Nachos', 'Kimchi', 'Bibimbap', 'Japchae',
  'Pastitsio', 'Baklava', 'Moussaka', 'Spanakopita',
  'Gyros', 'Steak Tartare', 'Coq au Vin', 'Escargots',
  'Confit de Canard', 'Paella', 'Croquetas', 'Patatas Bravas',
  'Beef Stroganoff', 'Pelmeni', 'Blini', 'Lasagna', 'Risotto',
  'Cacio e Pepe', 'Gnocchi', 'Ravioli', 'Bolognese',
  'Cheese Fondue', 'Raclette', 'Alplermagronen', 'Papet Vaudois'
];

const dishList = [
  {
    "name": "Pepperoni Pizza",
    "points": 20,
    "status": false,
    "cuisine": "American",
    "ingredients": ["Pepperoni", "Tomato Sauce", "Cheese", "Pizza Dough"]
  },
  {
    "name": "Cheeseburger",
    "points": 20,
    "status": false,
    "cuisine": "American",
    "ingredients": ["Ground Beef", "Cheese", "Burger Bun", "Assorted Toppings"]
  },
  {
    "name": "Mac and Cheese",
    "points": 10,
    "status": false,
    "cuisine": "American",
    "ingredients": ["Pasta", "Cheese"]
  },
  {
    "name": "Grilled Cheese",
    "points": 10,
    "status": false,
    "cuisine": "American",
    "ingredients": ["Bread", "Cheese"]
  },
  {
    "name": "Apple Pie",
    "points": 10,
    "status": false,
    "cuisine": "American",
    "ingredients": ["Pie Crust", "Apples"]
  },
  {
    "name": "Ramen",
    "points": 15,
    "status": false,
    "cuisine": "Japanese",
    "ingredients": ["Ramen Noodles", "Broth", "Assorted Toppings"]
  },
  {
    "name": "Sushi",
    "points": 20,
    "status": false,
    "cuisine": "Japanese",
    "ingredients": ["Rice", "Nori", "Fish", "Assorted Fillings"]
  },
  {
    "name": "Miso Soup",
    "points": 10,
    "status": false,
    "cuisine": "Japanese",
    "ingredients": ["Miso Paste", "Tofu"]
  },
  {
    "name": "Ground Beef Tacos",
    "points": 20,
    "status": false,
    "cuisine": "Mexican",
    "ingredients": ["Ground Beef", "Cheese", "Taco Shell", "Assorted Toppings"]
  },
  {
    "name": "Guacamole",
    "points": 25,
    "status": false,
    "cuisine": "Mexican",
    "ingredients": ["Avocado", "Onion", "Tomato", "Jalapeño", "Lime Juice"]
  },
  {
    "name": "Quesadilla",
    "points": 10,
    "status": false,
    "cuisine": "Mexican",
    "ingredients": ["Tortillas", "Cheese"]
  },
  {
    "name": "Nachos",
    "points": 20,
    "status": false,
    "cuisine": "Mexican",
    "ingredients": ["Chips", "Cheese", "Sauce", "Assorted Toppings"]
  },
  {
    "name": "Kimchi",
    "points": 20,
    "status": false,
    "cuisine": "Korean",
    "ingredients": ["Cabbage", "Radish", "Scallion", "Carrot"]
  },
  {
    "name": "Bibimbap",
    "points": 20,
    "status": false,
    "cuisine": "Korean",
    "ingredients": ["Rice", "Sauteed Vegetables", "Marinated Beef", "Sauce"]
  },
  {
    "name": "Japchae",
    "points": 25,
    "status": false,
    "cuisine": "Korean",
    "ingredients": ["Sesame", "Carrot", "Onion", "Noodles", "Mushroom"]
  },
  {
    "name": "Pastitsio",
    "points": 20,
    "status": false,
    "cuisine": "Greek",
    "ingredients": ["Pasta", "Meat", "Bechamel Sauce", "Feta Cheese"]
  },
  {
    "name": "Baklava",
    "points": 20,
    "status": false,
    "cuisine": "Greek",
    "ingredients": ["Phyllo Dough", "Nuts", "Cinnamon", "Honey"]
  },
  {
    "name": "Moussaka",
    "points": 15,
    "status": false,
    "cuisine": "Greek",
    "ingredients": ["Lamb", "Eggplant", "Bechamel Sauce"]
  },
  {
    "name": "Spanakopita",
    "points": 25,
    "status": false,
    "cuisine": "Greek",
    "ingredients": ["Spinach", "Feta Cheese", "Onion", "Dill", "Phyllo Dough"]
  },
  {
    "name": "Gyros",
    "points": 30,
    "status": false,
    "cuisine": "Greek",
    "ingredients": ["Onion", "Lamb", "Beef", "Hummus", "Tzatziki", "Feta Cheese"]
  },
  {
    "name": "Steak Tartare",
    "points": 15,
    "status": false,
    "cuisine": "French",
    "ingredients": ["Steak", "Shallot", "Egg"]
  },
  {
    "name": "Coq au Vin",
    "points": 40,
    "status": false,
    "cuisine": "French",
    "ingredients": ["Chicken", "Bacon", "Red Wine",
      "Onion", "Carrot", "Mushroom", "Tomato", "Flour"]
  },
  {
    "name": "Escargots",
    "points": 15,
    "status": false,
    "cuisine": "French",
    "ingredients": ["Escargot", "White Wine", "Shallot"]
  },
  {
    "name": "Confit de Canard",
    "points": 15,
    "status": false,
    "cuisine": "French",
    "ingredients": ["Duck", "Shallot", "Thyme"]
  },
  {
    "name": "Paella",
    "points": 50,
    "status": false,
    "cuisine": "Spanish",
    "ingredients": ["Rice", "Chicken", "Shrimp", "Mussels",
      "Chorizo", "Green Peas", "Tomato", "Onion", "Bell Pepper",
      "Broth"]
  },
  {
    "name": "Croquetas",
    "points": 20,
    "status": false,
    "cuisine": "Spanish",
    "ingredients": ["Ham", "Onion", "Bread Crumbs", "Egg"]
  },
  {
    "name": "Patatas Bravas",
    "points": 25,
    "status": false,
    "cuisine": "Spanish",
    "ingredients": ["Potato", "Tomato", "Onion",
      "White Wine", "Mayonnaise"]
  },
  {
    "name": "Beef Stroganoff",
    "points": 35,
    "status": false,
    "cuisine": "Russian",
    "ingredients": ["Beef", "Mushroom", "Onion",
      "Sour Cream", "Broth", "Flour", "Dijon Mustard"]
  },
  {
    "name": "Pelmeni",
    "points": 25,
    "status": false,
    "cuisine": "Russian",
    "ingredients": ["Ground Meat", "Onion", "Egg",
      "Sour Cream", "Flour"]
  },
  {
    "name": "Blini",
    "points": 25,
    "status": false,
    "cuisine": "Russian",
    "ingredients": ["Flour", "Milk", "Egg",
      "Sugar", "Yeast"]
  },
  {
    "name": "Lasagna",
    "points": 20,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Pasta", "Ground Beef", "Tomato Sauce", "Italian Cheeses"]
  },
  {
    "name": "Risotto",
    "points": 20,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Arborio Rice", "Broth", "White Wine", "Parmesan Cheese"]
  },
  {
    "name": "Cacio e Pepe",
    "points": 20,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Pasta", "Pecorino Romano Cheese", "Parmesan Cheese", "Pepper"]
  },
  {
    "name": "Gnocchi",
    "points": 15,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Potato", "Flour", "Egg"]
  },
  {
    "name": "Ravioli",
    "points": 15,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Flour", "Egg", "Assorted Fillings"]
  },
  {
    "name": "Bolognese",
    "points": 50,
    "status": false,
    "cuisine": "Italian",
    "ingredients": ["Ground Beef", "Bacon", "Red Wine", "Broth",
      'Carrot', "Onion", "Pasta", "Parmesan Cheese", "Milk", "Tomato Sauce"]
  },
  {
    "name": "Cheese Fondue",
    "points": 35,
    "status": false,
    "cuisine": "Swiss",
    "ingredients": ["Gruyère Cheese", "Swiss Cheeses", "White Wine", "Potato",
      "Bread", "Pickle", "Onion"]
  },
  {
    "name": "Raclette",
    "points": 25,
    "status": false,
    "cuisine": "Swiss",
    "ingredients": ["Raclette Cheese", "Potato", "Pickle",
      "Onion", "Charcuterie"]
  },
  {
    "name": "Alplermagronen",
    "points": 35,
    "status": false,
    "cuisine": "Swiss",
    "ingredients": ["Potato", "Pasta", "Cream", "Cheese",
      "Onion", "Bacon", "Apple Sauce"]
  },
  {
    "name": "Papet Vaudois",
    "points": 25,
    "status": false,
    "cuisine": "Swiss",
    "ingredients": ["Leek", "Potato", "Sausage", "White Wine", "Cream"]
  }
];

function populateDishCollection() {
  dishList.forEach(dish => {
    addDish(dish);
  });
}

async function deleteDishById(dish_id) {
  try {
    const updateResponse = await fetch(url + '/dishes/' + dish_id, {
      method: 'DELETE',
      headers: {
        'ngrok-skip-browser-warning': '69420'
      }
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to delete dish');
    }

  } catch (error) {
    console.error('Error deleting dish:', error.message);
  }
}

async function deleteAllDishes() {
  const response = await getDishes();
  const dishes = response.dishes

  dishes.forEach(dish => {
    deleteDishById(dish.id);
  });
}

export function getRandomDish() {
  const randomIndex = Math.floor(Math.random() * dishNameList.length);

  return dishNameList[randomIndex];
}

export function getRandomCuisine() {
  const randomIndex = Math.floor(Math.random() * cuisineList.length);

  return cuisineList[randomIndex];
}

export function getRandomIngredient() {
  const randomIndex = Math.floor(Math.random() * ingredientList.length);

  return ingredientList[randomIndex];
}

export function getDishesList() {
  return dishNameList;
}

if (localStorage.getItem('dishWS') == null) {
  localStorage.setItem('dishWS', 'Ground Beef Tacos');
}

if (localStorage.getItem('cuisineWS') == null) {
  localStorage.setItem('cuisineWS', 'Italian');
}

if (localStorage.getItem('ingredientWS') == null) {
  localStorage.setItem('ingredientWS', 'Rice');
}

export function returnWS(generateNew) {
  if (generateNew) {
    const dishWS = getRandomDish();
    localStorage.setItem('dishWS', dishWS);

    const cuisineWS = getRandomCuisine();
    localStorage.setItem('cuisineWS', cuisineWS);

    const ingredientWS = getRandomIngredient();
    localStorage.setItem('ingredientWS', ingredientWS);
  }

  const response = {
    'dish': localStorage.getItem('dishWS'),
    'cuisine': localStorage.getItem('cuisineWS'),
    'ingredient': localStorage.getItem('ingredientWS')
  }

  return response;
}
// deleteAllDishes();

// populateDishCollection();