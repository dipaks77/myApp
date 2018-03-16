import { Injectable } from '@angular/core';

import { LoadingController, ToastController, AlertController } from 'ionic-angular';


@Injectable()
export class ServicesProvider {

  /*
    * Variable declarations
    * @loader: used as loader handler to present and dismiss current loader
    * @toast: used as toast handler to present and dismiss current toast 
    * @alert: used as alert handler to present and dismiss current alert 
  */
  public loader: any;
  public toast: any;
  public alert: any;

  /******************* Constructor *******************/
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {
  }
  /******************* End Constructor *******************/


  /* 
    * Local Storage Services 
    * setLocalStorage will set the localStorage
    * will be stored in string format
    * so we will first convert json to string
    * @name: name of localStorage object
    * @data: data supposed to be added to that object
  */
  setLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  /* 
    * getLocalStorage will return the localStorage
    * @name: name of localStorage object
    * will be return in json format
  */
  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  /* 
    * Loader services
    * show loader on particular events
    * @msg: message which needs to be displayed on loader
  */
  presentLoading(msg) {
    this.dismissThis(this.loader);
    this.loader = this.loadingCtrl.create({
      content: msg,
      duration: 5000
    });
    this.loader.present();
  }

  /*
    * Dismiss loader on some events like(show loader untill process gets response)
    * and then dismiss it and show response to the user
  */
  dismissLoading() {
    this.loader.dismiss();
  }

  /* 
    * Toast services
    * show toastr on particular events
    * @msg: message which needs to be displayed on toast
    * @position: out default position will be top, enums[top, middle, bottom]
    * @showClose: tells whether or not show close button
    * @closeButtonText: if close button is true, what text it should display(default it will show "Close")
    * @cssClass: which css class needs to be apply
          - eg. toast can be used as error or success message also so we can have custom class like toast-error
  */
  presentToast(
    msg,
    position = "top",
    duration,
    showClose: boolean = false,
    closeButtonText = "Close",
    cssClass
  ) {
    this.dismissThis(this.toast);
    this.toast = this.toastCtrl.create({
      message: msg,
      position: position,
      duration: duration,
      showCloseButton: showClose,
      closeButtonText: closeButtonText,
      dismissOnPageChange: true,
      cssClass: cssClass
    });
    this.toast.present();
  }

  /* 
    * Alert services
    * show alert on particular events
    * @title: title which needs to be displayed on alert
    * @subtitle: subTitle which needs to be displayed on alert
    * @msg: message which needs to be displayed on alert
    * @inputs: it will containt html code for let's say login form
    * @buttons: array of button includes:
        - @text: Label of button
        - @role: Defines type of button(like cancel button)
        - @handler: function which handles user click events on given buttons
    * @cssClass: which css class needs to be apply
        - eg. alert can be used as error or success message also so we can have custom class like alert-error
  */
  presentAlert(
    title: string,
    subTitle: string,
    msg: string,
    inputs: any,
    buttons: Array<string>,
  ) {
    this.alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      message: msg,
      inputs: inputs,
      buttons: buttons,
    });
    this.alert.present();
  }

  /* 
    * dismiss object(eg. toast) on some custom events
    * like neither close button is clicked nor page is changed, 
    * yet we need to close a object(eg. toast) like on some function we can use this function      
  */
  dismissThis(object: any) {
    if (object) object.dismiss();
  }

}