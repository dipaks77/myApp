import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({ name: "filter" })





@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!value) return items;
        return items.filter(item => {
            let ret = false;
            Object.keys(item).map(function (val, index) {
                if (item[val].toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    ret = true;
                }
            });
            return ret;
        });
    }
}