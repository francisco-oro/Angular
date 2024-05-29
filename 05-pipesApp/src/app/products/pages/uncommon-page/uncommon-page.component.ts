import { Component } from '@angular/core';
import {interval, Observable, tap} from "rxjs";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
//   id18n Select
  public name: string = 'francisco';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

//   i18nPlural
  public customers: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public customersMap = {
    '=0': 'there are no customers waiting',
    '=1': 'there is a customer waiting',
    '=2': 'two customers waiting',
    'other': 'there are # customers waiting',
  }
  deleteCustomer(): void {
    this.customers.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Joseph',
    age: 23,
    address: 'Mexico City, Mexico'
  }

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have another promise.');
      console.log('We have data in the promise');
      this.person.name = 'Another name';
    }, 3500);
  })
}
