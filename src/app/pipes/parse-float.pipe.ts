import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseFloat',
  standalone: true
})
export class ParseFloatPipe implements PipeTransform {

  transform(value: string, ..._args: any[]) {
    return parseFloat(value);
  }

}
