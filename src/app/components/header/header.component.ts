// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
//   constructor(private router: Router) {}

//   navigateTo(path: string) {
//     this.router.navigate([path]);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
  showLoginMessage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('userToken');
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  handleTrackClick() {
    if (this.isLoggedIn) {
      this.router.navigate(['/track']);
    } else {
      this.showLoginMessage = true;
      setTimeout(() => {
        this.showLoginMessage = false;
      }, 3000); // hides after 3 seconds
    }
  }
}
