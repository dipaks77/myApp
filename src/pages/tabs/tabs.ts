import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

import { TestsComponent } from "../tests/tests.component"
import { QuestionComponent } from "../question/question.component"


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab1Root = TestsComponent;
  tabQuestion = QuestionComponent;

  constructor() {

  }
}
