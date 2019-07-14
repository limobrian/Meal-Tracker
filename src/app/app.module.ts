import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { DisplayComponent } from './display/display.component';
import { DateCountPipe } from './date-count.pipe';
import { CaloriesLevelPipe } from './calories-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    AddMealComponent,
    EditMealComponent,
    DisplayComponent,
    DateCountPipe,
    CaloriesLevelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
