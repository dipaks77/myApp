import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { httpService } from "../../services/httpService";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public notification: LocalNotifications,
    public alert: AlertController,
    public http: httpService,
    private toast: ToastController
  ) { }



  Submit(form: any, event: Event) {
    event.preventDefault();
    if (form.invalid) {
      this.toast.create({
        message: "Please fill out all the fields correctly first!",
        position: "top",
        showCloseButton: true,
        duration: 0,
        dismissOnPageChange: true,
        cssClass: "toast-error"
      }).present();
      return false;
    }
    let alert = this.alert.create({
      title: "Success!",
      message: "Thank you! We will get back to you once we go through your query...<input type='text' class='form-control' placeholder='Your name please...'>",
      buttons: ["Ok"]
    })
    alert.present();
    form.resetForm();
    form.submitted = false;
    return true;
  }
}
