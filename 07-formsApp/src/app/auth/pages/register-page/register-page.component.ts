import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {registerDispatcher} from "@angular/core/primitives/event-dispatch";
import {cantBeStrider, emailPattern} from "../../../shared/validators/validators";

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public registerForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: ['', [Validators.required, Validators.pattern(emailPattern) ]],
    username: ['', [Validators.required, cantBeStrider]],
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password2: new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder) {
  }

  isValidField(field: string): boolean {
    // TODO: Get validation from a service
    return true;
  }

  onSubmit() {
    this.registerForm.markAsTouched();
  }

  protected readonly registerDispatcher = registerDispatcher;
}
