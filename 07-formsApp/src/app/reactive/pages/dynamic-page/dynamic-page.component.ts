import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  constructor(private formBuilder: FormBuilder) {
  }

  get favoriteGames () {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isNotValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  isNotValidFieldInArray(formArray: FormArray, index: number): boolean |  null {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "This field is required";

        case 'minlength':
          return `Minimum ${errors['minlength'].requiredLength} characters is required for this field`;
      }
    }

    return null;
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;

    // this.favoriteGames.push(new FormControl(newGame, [Validators.required, Validators.minLength(3)]));
    this.favoriteGames.push(
      this.formBuilder.control(newGame, Validators.required)
    );

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);
    this.myForm.reset();
  }
}
