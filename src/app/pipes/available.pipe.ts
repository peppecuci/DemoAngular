import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from "../stock/produit";

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: Produit[], active: boolean = true): Produit[] {
    if( active )
      return value.filter( (e) => e.quantity > 0 );

    return value;
  }

}
