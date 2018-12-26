import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, num: number) {
    return value.length <= num ? value : value.substr(0, num - 3) + '...';
  }

}
