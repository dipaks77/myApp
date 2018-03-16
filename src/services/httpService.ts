import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class httpService {


    public API_URL: string = "http://localhost:8095/";

    constructor(public http: Http) {
        console.log("====== API CALL ========", this.API_URL);
    }


    get(url) {
        return this.http.get(this.API_URL + url)
            .map(response => response.json());
    }


    post(url, data) {
        return this.http.post(this.API_URL + url, data)
            .map(response => response.json());
    }
}