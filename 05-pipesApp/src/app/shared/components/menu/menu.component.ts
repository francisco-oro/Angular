import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes in Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Arrows',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: '/uncommon'
          },
        ]
      },
      {
        label: 'Personalized pipes',
        icon: 'pi pi-align-cog',
        items: [
          {
            label: 'Another element',
            icon: 'pi pi-cog',
            items: [

            ]
          }
        ]
      }
    ]
  }
}
