import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, a:string): string {
    return `Hello Mr.${value.firstName} ${a}`;
  }

}
