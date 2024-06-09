import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlenc',
  standalone: true
})
export class HtmlencPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
