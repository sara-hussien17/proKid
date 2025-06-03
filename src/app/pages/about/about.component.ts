import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 features = [
    
   
    {icon: '💡',title: 'Creative Thinking', description: 'Encourages logical and creative skills that last a lifetime.'},
  { icon: '🧠', title: 'Fun Learning', description: 'Interactive, simplified lessons that make programming easy and enjoyable.' },
  { icon: '🏆', title: 'Smart Quizzes', description: 'Evaluate yourself and get intelligent feedback from AI.' },
  { icon: '📈', title: 'Progress Tracking', description: 'See your programming skill improve at every stage.' }
  ];

  team = [
    { name: 'Member 1', image: 'assets/team/avatar1.png' },
    { name: 'Member 2', image: 'assets/team/avatar2.png' },
    { name: 'Member 3', image: 'assets/team/avatar3.png' },
    { name: 'Member 4', image: 'assets/team/avatar4.png' },
    { name: 'Member 5', image: 'assets/team/avatar5.png' },
  ];

  testimonials = [
    {
      name: 'frah (Parent)',
      message: 'My son loves ProKid! It’s fun, safe, and super educational.'
    },
    {
      name: 'Omar (Student)',
      message: 'I built my first website with ProKid, and it was awesome!'
    },
    {
      name: 'Mona (parent)',
      message: 'A brilliant way to introduce kids to the world of coding.'
    }
  ];
}
