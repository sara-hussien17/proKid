import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PlayListService } from '../../core/services/playList/play-list.service';

@Component({
  selector: 'app-courses',
  imports: [RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent  {
  private readonly _Router = inject(Router)



  
 
}
