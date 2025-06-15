import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scratch-quizes',
  imports: [],
  templateUrl: './scratch-quizes.component.html',
  styleUrl: './scratch-quizes.component.scss',
})
export class ScratchQuizesComponent {
  quizzes = Array.from({ length: 15 }, (_, i) => ({ id: i + 1 }));

  constructor(private router: Router) {}

  goToQuiz() {
    this.router.navigate(['/scratchQuiez1']);
  }
  goToFinalQuiz() {
    this.router.navigateByUrl('/scratchFainalQuiez');
  }
}
