import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FilterPipe } from "../utilities/filter.pipe";

import { CountryPage } from '../pages/country/country';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup.component';
import { PushComponent } from '../pages/push/push.component';


import { TestsComponent } from '../pages/tests/tests.component';
import { QuestionComponent } from '../pages/question/question.component';



// import { TabsPage } from '../pages/tabs/tabs';
import { NavbarComponent } from '../pages/navbar/navbar.component';

import { httpService } from "../services/httpService";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesProvider } from '../providers/services/services';

@NgModule({
  declarations: [
    MyApp,
    CountryPage,
    ContactPage,
    HomePage,


    TestsComponent,
    QuestionComponent,
    NavbarComponent,
    SignupPage,
    PushComponent,
    FilterPipe
    // TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CountryPage,
    ContactPage,
    HomePage,
    SignupPage,
    TestsComponent,
    QuestionComponent,
    NavbarComponent,
    PushComponent
    // TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    httpService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesProvider
  ]
})
export class AppModule { }
