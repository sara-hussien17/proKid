import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paython-quizes',
  imports: [],
  templateUrl: './paython-quizes.component.html',
  styleUrl: './paython-quizes.component.scss',
})
export class PaythonQuizesComponent {
  quizzes = Array.from({ length: 15 }, (_, i) => ({ id: i + 1 }));

  constructor(private router: Router) {}

  goToQuiz() {
    this.router.navigate(['/paythonQuiez1']);
  }
  goToFinalQuiz() {
    this.router.navigateByUrl('/paythonFainalQuiez');
  }
}
