import { Router } from '@angular/router';
import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component ,} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
   constructor(private router: Router) {}

  // Add this method for navigation
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
