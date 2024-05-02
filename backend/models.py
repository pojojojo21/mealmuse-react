from typing import List, Optional

from pydantic import BaseModel, Field
from pydantic.functional_validators import BeforeValidator
from typing_extensions import Annotated
from enum import Enum

PyObjectId = Annotated[str, BeforeValidator(str)]

class Dish(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    name: str = Field(...)
    points: int = Field(...)
    status: bool = Field(...)
    cuisine: str = Field(...)
    ingredients: List[str] = Field(...)

class DishesCollection(BaseModel):
    dishes: List[Dish]

class UpdateDish(BaseModel):
    points: Optional[int] = None
    status: Optional[bool] = None
    cuisine: Optional[str] = None
    ingredients: Optional[List[str]] = None
 
# class Task(BaseModel):
#     id: Optional[PyObjectId] = Field(alias="_id", default=None)
#     name: str = Field(...)
#     status: bool = Field(...)
#     type: str = Field(...) # Dish, Cuisine, Ingredient

class User(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    name: str = Field(...)
    points: int = Field(...)
    favDish: str = Field(...)
    favCui: str = Field(...)
    weekDish: str = Field(...)
    weekCui: str = Field(...)
    weekIng: str = Field(...)