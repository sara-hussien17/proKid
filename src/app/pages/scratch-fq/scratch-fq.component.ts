import { AiQuizeService } from './../../core/services/quizes/ai-quize.service';
import { Component, OnInit } from '@angular/core';
import { Quizes } from '../../core/interfaces/quizes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scratch-fq',
  imports: [CommonModule],
  templateUrl: './scratch-fq.component.html',
  styleUrl: './scratch-fq.component.scss',
})
export class ScratchFQComponent implements OnInit {
  questions: Quizes[] = [];
  currentQuestionIndex: number = 0;
  answers: string[] = [];
  result: any;
  showResult: boolean = false;

  constructor(private AiQuizeService: AiQuizeService) {}

  ngOnInit(): void {
    this.AiQuizeService.GetFinalQuizeScratch().subscribe((data: any) => {
      this.questions = data.map((question: any) => ({
        ...question,
        allOptions: this.shuffleOptions([
          question.correctAnswer,
          ...question.incorrectAnswers,
        ]),
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
      Answer: this.answers[index] || '',
    }));

    this.AiQuizeService.submitFinalAnswersScratch(payload).subscribe((res) => {
      this.result = res;
      this.showResult = true;
    });
  }

  shuffleOptions(options: string[]): string[] {
    return options
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
}
