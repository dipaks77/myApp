import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }



  Submit(form: any, event: Event) {
    event.preventDefault();
    if (form.invalid) {
      return false;
    }
    return true;
  }
}
