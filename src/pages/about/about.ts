import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private countries;
  constructor(public navCtrl: NavController, private http: Http) {

  }

  ngOnInit() {
    this.http.get("assets/json/country.json")
      .map(response => response.json())
      .subscribe(data => {
        console.log("===== Countries ======", data);
        this.countries = data;
      }, err => {
        console.log("======== Error ========", err._body);
      })
  }

}
