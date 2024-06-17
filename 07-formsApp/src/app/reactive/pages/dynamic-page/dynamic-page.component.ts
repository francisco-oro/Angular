import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {
  public myForm : FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', [ Validators.required, Validators.min(0)]],
      ['Death Stranding', [ Validators.required, Validators.min(0)]],
    ])
  })
  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
