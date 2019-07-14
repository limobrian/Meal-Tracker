import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  public MealsList: Meal[] = [
    new Meal("Szechuan ", "cuisine stands out due to the bold, pungent and spicy flavours", 2500),
    new Meal("Cantonese", " cuisine is famous all over the world for its distinctive style. Most dishes are steamed and stir-frying which makes it healthy and non-greasy.  Here the dishes are tender, slightly sweet and with a mellow fragrance.", 3000),
    new Meal("Shandong ", "Too fattycuisine originated in East China and mostly features seafood as it is a coastal province. You will find scallops, prawns, clams, sea cucumbers and just about everything on the menu. They heavily rely on salty flavours", 4500)
];
selectedMeal:Meal = null;
addMeal(NewMeal:Meal){
  this.MealsList.push(NewMeal);
}
showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
}
finishedEditing() {
   this.selectedMeal = null;
 }
deleteMeal(MealToDel:Meal){
 var index: number = this.MealsList.indexOf(MealToDel);
 this.MealsList.splice(index, 1);
}

  constructor() { }

  ngOnInit() {
  }

}