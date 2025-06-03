import { Component, OnInit } from '@angular/core';
import { Quizes } from '../../core/interfaces/quizes';
import { AiQuizeService } from '../../core/services/quizes/ai-quize.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fainal-quiz',
  imports: [CommonModule],
  templateUrl: './fainal-quiz.component.html',
  styleUrl: './fainal-quiz.component.scss'
})
export class FainalQuizComponent implements OnInit{

  questions: Quizes[] = [];
  currentQuestionIndex: number = 0;
  answers: string[] = [];
  result: any;
  showResult: boolean = false;

  constructor(private aiQuizeService: AiQuizeService) {}

  ngOnInit(): void {
  this.aiQuizeService.GetFinalQuize().subscribe((data:any) => {
    this.questions = data.map((question: any) => ({
      ...question,
      allOptions: this.shuffleOptions([
        question.correctAnswer,
        ...question.incorrectAnswers
      ])
    }));
  });
}

  selectAnswer(option: string) {
    this.answers[this.currentQuestionIndex] = option;
  }

  next() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.submit();
    }
  }

  back() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

 submit() {
  const payload = this.questions.map((question, index) => ({
    QuestionId: question.id,
    Answer: this.answers[index] || ''
  }));

  this.aiQuizeService.submitFinalAnswers(payload).subscribe((res) => {
    this.result = res;
    this.showResult = true;
  });
}



shuffleOptions(options: string[]): string[] {
  return options
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


}

