import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { httpService } from "../../services/httpService";
import { ServicesProvider } from '../../providers/services/services';


@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
    public file: HTMLElement;
    constructor(
        public navCtrl: NavController,
        public platform: Platform,
        public http: httpService,
        public service: ServicesProvider
    ) {
        platform.ready().then(() => {
            this.file = document.getElementById("FileUpload1");
        });

    }

    Signup(form: any, event: Event) {
        event.preventDefault();
        if (form.invalid) {
            this.service.presentToast("Please fill out all the fields correctly first!", "top", 0, true, "Close", "toast-error");
            return false;
        }
        this.service.presentAlert("Success!", "Thank you! We will get back to you once we go through your query...<input type='text' class='form-control' placeholder='Your name please...'>", "", "", ["Ok"]);
        form.resetForm();
        form.submitted = false;
        return true;
    }


    browseImage() {
        document.getElementById("uploadImage").click();
    }

    Upload(event: any) {
        let file = event.target.files[0];
        let form = new FormData;
        form.append("profile", file);
        this.http.post("upload", form)
            .subscribe(data => {
                console.log("==== Response =====", data);
            })
    }
}
