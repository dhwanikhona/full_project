import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submitquiz',
  templateUrl: './submitquiz.component.html',
  styleUrls: ['./submitquiz.component.css']
})
export class SubmitquizComponent implements OnInit {
  private quiz:Quiz;
  constructor(private service:QuizService,private router : Router) {
  this.quiz=new Quiz();
  
}
  updateQuiz(){
    this.service.updateQuiz(this.quiz).subscribe(res=>this.gotoList())
  }

  gotoList(){
   
    this.router.navigate(['/takequiz'])
  }
  ngOnInit() {
  }

}
