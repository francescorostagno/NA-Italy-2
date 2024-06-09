import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tidyDelimiter',
  standalone: true
})
export class TidyDelimiterPipe implements PipeTransform {

  transform(value: string, ..._args: any[]) {
    const regex = /(Bus|Train) Lines#@-@#/gi;
    return value.replace(regex, ' ');
  }

}
