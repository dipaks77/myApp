import { Component } from "@angular/core"
import { NavController } from 'ionic-angular';
import { QuestionComponent } from "../question/question.component";
import { Http } from "@angular/http";

@Component({
    selector: "tests",
    templateUrl: "tests.html",
})


export class TestsComponent {

    private tests;

    constructor(public navCtrl: NavController, public http: Http) { }

    ngOnInit() {
        this.http.get("assets/json/test_details.json")
            .map(response => response.json())
            .subscribe(tests => {
                this.tests = tests.tests;
            })
    }

    goToQuestion(test_id) {
        this.navCtrl.push(QuestionComponent, { id: test_id });
    }
}