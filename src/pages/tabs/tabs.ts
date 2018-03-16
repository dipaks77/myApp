import { Component } from '@angular/core';

import { CountryPage } from '../country/country';
import { ContactPage } from '../contact/contact';

import { TestsComponent } from "../tests/tests.component"
// import { QuestionComponent } from "../question/question.component"


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TestsComponent;
  tab2Root = CountryPage;
  tab3Root = ContactPage;
  // tab1Root = TestsComponent;
  // tabQuestion = QuestionComponent;

  constructor() {

  }
}
