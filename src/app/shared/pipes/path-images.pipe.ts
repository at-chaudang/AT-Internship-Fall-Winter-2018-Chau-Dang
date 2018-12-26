import { Pipe, PipeTransform } from '@angular/core';
import { PATH_IMAGES } from 'src/app/core/services/api.service';

@Pipe({
  name: 'pathImages'
})
export class PathImagesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return PATH_IMAGES + value;
  }

}
