import { Pipe, PipeTransform } from '@angular/core';
import {TipperDto} from "../models/tipperdto";

@Pipe({
  name: 'filterByGroup',
  pure: false
})
export class FilterByGroupPipe implements PipeTransform {

  transform(tippers: TipperDto[], groupName: string): TipperDto[] {
    if (groupName === 'Alle') return tippers;
    return tippers.filter(x => x.groups.split(',').includes(groupName));
  }

}
