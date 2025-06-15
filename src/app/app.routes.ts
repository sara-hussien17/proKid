import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RoleComponent } from './pages/role/role.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AiCourseComponent } from './pages/ai-course/ai-course.component';
import { AiQuizesComponent } from './pages/ai-quizes/ai-quizes.component';
import { Quiz1AiComponent } from './pages/quiz1-ai/quiz1-ai.component';
import { CodeBaseReadComponent } from './pages/code-base-read/code-base-read.component';
import { FainalQuizComponent } from './pages/fainal-quiz/fainal-quiz.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { PaythonCourseComponent } from './pages/paython-course/paython-course.component';
import { ScratchCourseComponent } from './pages/scratch-course/scratch-course.component';
import { CBaseCourseComponent } from './pages/cbase-course/cbase-course.component';
import { PaythonQuizesComponent } from './pages/paython-quizes/paython-quizes.component';
import { ScratchQuizesComponent } from './pages/scratch-quizes/scratch-quizes.component';
import { CBaseQuizesComponent } from './c-base-quizes/c-base-quizes.component';
import { PathonQ1Component } from './pages/pathon-q1/pathon-q1.component';
import { PathonFQComponent } from './pages/pathon-fq/pathon-fq.component';
import { ScratchQ1Component } from './pages/scratch-q1/scratch-q1.component';
import { ScratchFQComponent } from './pages/scratch-fq/scratch-fq.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'role', component: RoleComponent, title: 'Role' },
  { path: 'courses', component: CoursesComponent, title: 'Courses' },
  { path: 'about', component: AboutComponent, title: 'About' },
  {
    path: 'scratchQuiez1',
    component: ScratchQ1Component,
    title: 'scratchQuiez1',
  },
  {
    path: 'scratchFainalQuiez',
    component: ScratchFQComponent,
    title: 'scratchFainalQuiez',
  },
  {
    path: 'paythonQuiez1',
    component: PathonQ1Component,
    title: 'paythonQuiez1',
  },
  {
    path: 'paythonFainalQuiez',
    component: PathonFQComponent,
    title: 'paythonFainalQuiez',
  },
  {
    path: 'paython-quizes',
    component: PaythonQuizesComponent,
    title: 'paython-quizes',
  },
  {
    path: 'scratch-quizes',
    component: ScratchQuizesComponent,
    title: 'scratch-quizes',
  },
  {
    path: 'codeBase-quizes',
    component: CBaseQuizesComponent,
    title: 'codeBase-quizes',
  },
  {
    path: 'paython-course',
    component: PaythonCourseComponent,
    title: 'paython-course',
  },
  {
    path: 'scratch-course',
    component: ScratchCourseComponent,
    title: 'scratch-course',
  },
  {
    path: 'cdeBaseCourse-course',
    component: CBaseCourseComponent,
    title: 'cdeBaseCourse-course',
  },

  {
    path: 'account',
    loadComponent: () =>
      import('./pages/account/account.component').then(
        (m) => m.AccountComponent
      ),
    title: 'Account',
  },
  {
    path: 'codeBaseRead',
    loadComponent: () =>
      import('./pages/code-base-read/code-base-read.component').then(
        (m) => m.CodeBaseReadComponent
      ),
    title: 'Code Base Read',
  },
  {
    path: 'ai-course',
    loadComponent: () =>
      import('./pages/ai-course/ai-course.component').then(
        (m) => m.AiCourseComponent
      ),
    title: 'AI Course',
  },

  {
    path: 'ai-quizes',
    loadComponent: () =>
      import('./pages/ai-quizes/ai-quizes.component').then(
        (m) => m.AiQuizesComponent
      ),
    title: 'AI Quizzes',
  },
  {
    path: 'quiz1Ai',
    loadComponent: () =>
      import('./pages/quiz1-ai/quiz1-ai.component').then(
        (m) => m.Quiz1AiComponent
      ),
    title: 'Quiz 1 AI',
  },
  {
    path: 'final-quiez',
    loadComponent: () =>
      import('./pages/fainal-quiz/fainal-quiz.component').then(
        (m) => m.FainalQuizComponent
      ),
    title: 'Final Quiz',
  },
];
