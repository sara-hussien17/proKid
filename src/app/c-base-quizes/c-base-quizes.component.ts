import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-base-quizes',
  imports: [],
  templateUrl: './c-base-quizes.component.html',
  styleUrl: './c-base-quizes.component.scss',
})
export class CBaseQuizesComponent {
  quizzes = Array.from({ length: 15 }, (_, i) => ({ id: i + 1 }));

  constructor(private router: Router) {}

  goToQuiz() {
    this.router.navigate(['/quiz1Ai']);
  }
  goToFinalQuiz() {
    this.router.navigateByUrl('/final-quiez');
  }
}
