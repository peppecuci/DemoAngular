import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from "../stock/produit";

@Pipe({
  name: 'minmax'
})
export class MinmaxPipe implements PipeTransform {

  transform(value: Produit[], minPrice?: number, maxPrice?: number): Produit[] {
    return value.filter(
      (e) => {
        let included = true;

        if (minPrice)
          included = e.price >= minPrice

        if (maxPrice)
          included = e.price <= maxPrice
        return included;

        //CE-CI FQAIT LA MEME CHOSE
        //return ( !minPrice || e.price >= minPrice) && ( !maxPrice || e.price <= maxPrice))
      })
  }
}
