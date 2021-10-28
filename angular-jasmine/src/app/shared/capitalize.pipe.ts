import { Pipe, PipeTransform } from '@angular/core';
import { capitalize } from 'lodash-es';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return capitalize(value);
  }
}
