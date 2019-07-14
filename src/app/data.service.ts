import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  meals = [
    {Name: 'Chapati', Desc:'Circular', Calories:400},
    {Name: 'Andazi', Desc:'Triangula', Calories:700},
    {Name: 'Pilau', Desc:'Rice', Calories:500},
    {Name: 'Chips', Desc:'Potatoes', Calories:348}
  ];


  addMeal(){
    return "Meal Added Successfuly";
  }
  GetMeals(){
    return this.meals;
  }
}