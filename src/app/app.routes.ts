
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


export const routes: Routes = [
{ path:'',redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent,title:'Home'},
{path:'register',component:RegisterComponent,title:'register'},
{path:'role',component:RoleComponent,title:'role'},
{path:'courses',component:CoursesComponent,title:'courses'},
{path:'about',component:AboutComponent,title:'about'},
{path:'account',component:AccountComponent,title:'account'},
{path:'codeBaseRead',component:CodeBaseReadComponent,title:'codeBaseRead'},
{path:'ai-course',component:AiCourseComponent,title:'ai-course'},
{path:'ai-quizes',component:AiQuizesComponent,title:'ai-quizes'},
{path:'final-quiez',component:FainalQuizComponent,title:'final-quiez'},
{path:'quiz1Ai',component:Quiz1AiComponent,title:'quiz1Ai'},
{path:'login',component:LoginComponent,title:'login'}
];
