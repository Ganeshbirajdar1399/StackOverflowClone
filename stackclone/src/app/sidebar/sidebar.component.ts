import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    // Fade-in animation for the sidebar items
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    // Hover effect animation
    trigger('hoverEffect', [
      state(
        'hovered',
        style({ transform: 'scale(1.05)', backgroundColor: '#f1f1f1' })
      ),
      state('normal', style({ transform: 'scale(1)', backgroundColor: 'white' })),
      transition('normal => hovered', [animate('0.3s ease-in')]),
      transition('hovered => normal', [animate('0.3s ease-out')]),
    ]),
  ],
})
export class SidebarComponent {
  sidebarItems = [
    { name: 'Home', icon: 'bi-house-fill' },
    { name: 'Questions', icon: 'bi-question-circle-fill' },
    { name: 'Tags', icon: 'bi-tag-fill' },
    { name: 'Users', icon: 'bi-person-fill' },
    { name: 'Companies', icon: 'bi-briefcase-fill' },
  ];

  hoveredIndex: number | null = null;

  setHovered(index: number) {
    this.hoveredIndex = index;
  }

  clearHovered() {
    this.hoveredIndex = null;
  }
}
