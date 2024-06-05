
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Flies'|"Doesn't fly"  {
    return value ? "Flies" : "Doesn't fly";
  }

}
