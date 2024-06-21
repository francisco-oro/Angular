import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {delay, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      const email = control.value.trim().toLowerCase();

      return new Observable<ValidationErrors | null>(subscriber => {

        console.log({email});
        if (email === 'francisco@google.com'){
          subscriber.next({ emailTaken: true});
          subscriber.complete();
        }

        subscriber.next(null);
        subscriber.complete();
      }).pipe(
        delay(3000)
      );
    }
}
