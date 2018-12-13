import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string) {
    return value.length < 17 ? value : value.substr(0, 17) + '...';
  }

}
