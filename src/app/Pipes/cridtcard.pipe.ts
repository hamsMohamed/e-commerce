import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cridtcard'
})
export class CridtcardPipe implements PipeTransform {

  transform(value:any): any {
   return value.slice(0,4)+"_"+value.slice(4,8)+"_"+value.slice(8,12)+"_"+value.slice(12);
  }

}
