import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], searchInput: string): any[] {

    if(!value || searchInput === "") {
      return value;
    }

    // @ts-ignore
    return value.filter(item => {
      for(let val of Object.values(item)) {
        //console.log(val);
        // @ts-ignore
        if(String(val).toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
        // if(String(val).indexOf(searchInput) !== -1) {
        //   return true;
        // }
      }
    });

    // console.log(value);
    // searchInput = searchInput.toLowerCase();
    //
    // console.log(searchInput)
    // console.log(typeof value)
    // const items = [];
    // for (const item of value) {
    //   // for(const val of Object.values(item)) {
    //   //   console.log(val)
    //   //   // @ts-ignore
    //   //   if(item[val].toLowerCase().includes(searchInput)) {
    //   //     items.push(item);
    //   //   }
    //   // }
    //   if(item["email"].toLowerCase().includes(searchInput)
    //     || item["lastName"].toLowerCase().includes(searchInput)
    //   || item["firstName"].toLowerCase().includes(searchInput)
    //   || item["username"].toLowerCase().includes(searchInput)) {
    //     items.push(item);
    //   }
    // }
    // return items;
  }

}
