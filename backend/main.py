from typing import List, Literal
from fastapi import FastAPI, Body, HTTPException, status
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
# from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from models import Dish, DishesCollection, UpdateDish, Search
import certifi
from bson import ObjectId

app = FastAPI(
   title="MealMuse Backend API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update this with your frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Connect to MongoDB 
uri = 'mongodb+srv://jofisch:RuB95D4yRnQ6puM6@cluster0.iuy0qon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

# Create a new client and connect to the server
client = MongoClient(uri, tlsCAFile=certifi.where())

# client = AsyncIOMotorClient('mongodb+srv://jofisch:RuB95D4yRnQ6puM6@cluster0.iuy0qon.mongodb.net/')
db = client["Backend"]
collection = db["Tasks"]

@app.post(
    "/dishes/",
    response_description="Add new dish",
    response_model=Dish,
    status_code=status.HTTP_201_CREATED,
    response_model_by_alias=False,
)
async def create_dish(dish: Dish):
  # await collection.insert_one(dish.dict())
  # return {"message": "Dish added successfully"}
  new_dish = collection.insert_one(
        dish.model_dump(by_alias=True, exclude=["id"])
    )
  created_dish = collection.find_one(
      {"_id": new_dish.inserted_id}
  )
  return created_dish

@app.get(
      "/dishes/{id}",
      response_description="Get a single dish by id",
      response_model=Dish,
      response_model_by_alias=False,
)
async def get_itembyId(id: str):
    if (
        dish := collection.find_one({"_id": ObjectId(id)})
    ) is not None:
        return dish
    
    raise HTTPException(status_code=404, detail=f"Dish {id} not found")

@app.get(
    "/dishes/",
    summary="Get a list of dishes",
    description="""Used for fetching a list of dishes stored in the database.

Allows searching by arbitrary strings, ingredients or cuisines.""",
    response_description="List all dishes",
    response_model=DishesCollection,
    response_model_by_alias=False,
)
def get_assets(
    search: str | None = None,
    type: Search | None = None
):
    query = {}
    if search:
      query = {
          "$or": [
              {"name": {"$regex": "^" + search, "$options": "i"}},
              {"cuisine": {"$regex": "^" + search, "$options": "i"}},
              {"ingredient": {"$regex": "^" + search, "$options": "i"}}
          ]
      }

    dishes = []
    cursor = collection.find(query)
    for dish in cursor:
      dishes.append(dish)
    return DishesCollection(dishes=dishes)

# @app.put(
#       "/dishes/{dish_id}",
#       response_description="Update a single dish by id",
#       response_model=Dish,
#       response_model_by_alias=False,
# )
# async def update_item(dish_id: str, dish: UpdateDish):
#     collection.replace_one({"_id": dish_id}, dish.dict())
#     return {"message": "Dish updated successfully"}

@app.delete("/dishes/{dish_id}")
def delete_item(dish_id: str):
    collection.delete_one({"_id": ObjectId(dish_id)})
    return {"message": "Dish deleted successfully"}
