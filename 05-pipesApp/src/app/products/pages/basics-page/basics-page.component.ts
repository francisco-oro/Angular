import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'francisco';
  public nameUpper: string = 'FRANCISCO';
  public fullName: string = 'fRancIscO OrO';

  public customDate: Date = new Date();
}
