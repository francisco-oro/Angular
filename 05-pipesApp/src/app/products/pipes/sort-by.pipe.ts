import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case "canFly":
        return heroes.sort((a,b) => (a.canFly > b.canFly ? 1 : -1))
    }
  }

}
