import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ai-quizes',
  imports: [],
  templateUrl: './ai-quizes.component.html',
  styleUrl: './ai-quizes.component.scss'
})
export class AiQuizesComponent {
  quizzes = Array.from({ length: 15 }, (_, i) => ({ id: i + 1 }));

  constructor(private router: Router) {}

  goToQuiz() {
    this.router.navigate(['/quiz1Ai']);
  }
goToFinalQuiz() {
  this.router.navigateByUrl('/final-quiez');
}
}
