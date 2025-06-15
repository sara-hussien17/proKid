import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PlayListService } from '../../core/services/playList/play-list.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-course',
  imports: [RouterModule],
  templateUrl: './ai-course.component.html',
  styleUrl: './ai-course.component.scss',
})
export class AiCourseComponent implements OnInit {
  private readonly _Router = inject(Router);
  private readonly _PlayListService = inject(PlayListService);
  private readonly sanitizer = inject(DomSanitizer);

  videos: any[] = [];
  selectedVideoUrl: string = '';
  sanitizedVideoUrl: SafeResourceUrl = '';

  ngOnInit(): void {
    this._PlayListService.GetVideosAi().subscribe({
      next: (res) => {
        // بناء رابط الـ embed لكل فيديو
        this.videos = res.map((video: any) => ({
          ...video,
          embedUrl: `https://www.youtube.com/embed/${video.youtubeVideoId}`,
        }));

        if (this.videos.length > 0) {
          this.selectVideo(this.videos[0]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectVideo(video: any) {
    this.selectedVideoUrl = video.embedUrl;
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      video.embedUrl
    );
  }
}
