import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {registerDispatcher} from "@angular/core/primitives/event-dispatch";
import {ValidatorsService} from "../../../shared/service/validators.service";
import {EmailValidatorService} from "../../../shared/validators/email-validator.service";

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [new EmailValidatorService()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password2: new FormControl('', [Validators.required]),
  });

  constructor(
    private emailValidator: EmailValidatorService,
    private validatorsService: ValidatorsService,
    private formBuilder: FormBuilder) {
  }

  isNotValidField(field: string): boolean | null {
    return this.validatorsService.isNotValidField(this.registerForm, field);
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
  }
}
