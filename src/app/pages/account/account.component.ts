import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/userInfo/account.service';
import { CommonModule } from '@angular/common';
import {
  User,
  QuizProgress,
  AccountResponse,
} from '../../core/interfaces/user-info';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  user: User | null = null;
  progress: QuizProgress[] = [];
  isLoading: boolean = true;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchAccountData();
  }

  fetchAccountData(): void {
    this.isLoading = true;

    this.accountService.GetInfo().subscribe({
      next: (data) => {
        console.log('API Response:', data);
        this.user = data.user;
        this.progress = data.progress;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch account data', err);
        this.isLoading = false;
      },
    });
  }

  getPercentage(correct: number, total: number): number {
    if (!total || total === 0) return 0;
    return Math.round((correct / total) * 100);
  }

  getSourceLabel(p: QuizProgress): string {
    if (p.videoId) return `📹 From Video #${p.videoId}`;
    if (p.playlistId) return `📚 From Playlist #${p.playlistId}`;
    return 'Unknown Source';
  }

  getBadgeText(percentage: number): string {
    if (percentage >= 80) return 'Great Job! 🌟';
    if (percentage >= 50) return 'Keep Going 👍';
    return 'Try Again 🌱';
  }

  getBadgeClass(percentage: number): string {
    if (percentage >= 80) return 'bg-success';
    if (percentage >= 50) return 'bg-warning text-dark';
    return 'bg-danger';
  }
}
