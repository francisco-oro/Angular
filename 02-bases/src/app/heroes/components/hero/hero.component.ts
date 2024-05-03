import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public _name: string = "ironman"
  public age: number = 45;

  get capitalizedName(): string {
    return this._name.toUpperCase();

  }
  get getHeroDescription(): string {
    return `${this._name} - ${this.age}`;
  }

  changeHero(): void {
    this._name = "Spiderman";
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void{
    this._name = "ironman";
    this.age = 45;
    // document.querySelectorAll('h1')!.forEach(e => {
    //   e.innerHTML = '<h1>From Angular</h1>'
    // });
  }
}
