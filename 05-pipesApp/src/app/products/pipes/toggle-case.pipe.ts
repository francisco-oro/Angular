import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: "toggleCase",
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    console.log({ args });

    return value.toUpperCase();
  }
}
