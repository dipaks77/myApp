import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

export class httpService {

    constructor(public http: Http) { }


    get(url) {
        return this.http.get(url)
            .map(response => response.json());
    }
}