import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagePath: string = 'assets/me.jpeg';
  currentSection: string = 'info'; // Default section

  showSection(section: string) {
    this.currentSection = section;
  }
}

