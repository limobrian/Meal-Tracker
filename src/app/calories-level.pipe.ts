import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal';
@Pipe({
  name: 'caloriesLevel'
})
export class CaloriesLevelPipe implements PipeTransform {

  transform(input: Meal[], desiredCaloriesLevel) {
    // console.log("desiredCaloriesLevel:" + desiredCaloriesLevel);
    var output: Meal[] = [];
    if(desiredCaloriesLevel === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >499) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCaloriesLevel === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 700) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
