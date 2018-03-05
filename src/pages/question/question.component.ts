import { Component } from "@angular/core"
import { NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: "question",
    templateUrl: "question.html",
})


export class QuestionComponent {


    public flag = "test";
    private testName: String;
    private questions: any;
    private currentQuestion = 0;
    private testId: any;
    private btnFlag = "next";
    private userAns: any;
    private result: number = 0;


    constructor(public navParams: NavParams, public http: Http) {
        this.testId = navParams.get("id");
    }

    ngOnInit() {
        let tests;
        let parent = this;
        this.http.get("http://interviewapi.stagging.in/getQuizData")
            .map(response => response.json())
            .subscribe(response => {
                tests = response.tests;
                tests.filter(function (test) {
                    if (test._id == parent.testId) {
                        parent.testName = test.name;
                        parent.questions = test.questions;

                        console.log("====== Questions =======", parent.questions);
                    }
                })
            })
    }


    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            if (this.questions[this.currentQuestion].correctOptionIndex == this.userAns) {
                this.result++;
            }
            this.currentQuestion++;
        }
        if (this.currentQuestion == this.questions.length - 1) {
            this.btnFlag = "end";
        }
    }


    calcResult() {
        if (this.questions[this.currentQuestion].correctOptionIndex == this.userAns) {
            this.result++;
        }
        this.flag = "result";
    }
    saveAns(index) {
        this.userAns = index;
    }

    finishTest() {
        this.flag = "result";
    }
}