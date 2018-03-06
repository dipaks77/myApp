import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public notification: LocalNotifications, public alert: AlertController) {

  }



  Submit(form: any, event: Event) {
    event.preventDefault();
    if (form.invalid) {
      return false;
    }
    let alert = this.alert.create({
      title: "Your query has been sent, we will get back to you please wati...",
      buttons: ["Ok"]
    })
    alert.present();
    return true;
  }
}
