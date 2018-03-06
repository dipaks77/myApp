import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TestsComponent } from '../tests/tests.component';
import { PushComponent } from '../push/push.component';



@Component({
    templateUrl: 'navbar.html'
})
export class NavbarComponent {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = ContactPage;
    currentPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'About', component: AboutPage },
            { title: 'Interview Portal', component: TestsComponent },
            { title: 'Contact', component: ContactPage },
            { title: 'Push', component: PushComponent }
        ];
        this.currentPage = this.pages[0].title;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.currentPage = page.title;
        this.nav.setRoot(page.component);
    }
}
