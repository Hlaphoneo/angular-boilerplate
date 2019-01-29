import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navData'
})
export class NavDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
