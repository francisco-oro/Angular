import { Component } from '@angular/core';
import {Color, Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = true;

  public heroes: Hero[] = [
    {
      name: "Superman",
      color: Color.blue,
      canFly: true
    },
    {
      name: "Daredevil",
      color: Color.red,
      canFly: false
    },
    {
      name: "Robin",
      color: Color.red,
      canFly: false
    },
    {
      name: "Linterna verde",
      color: Color.green,
      canFly: true
    },
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }
}
