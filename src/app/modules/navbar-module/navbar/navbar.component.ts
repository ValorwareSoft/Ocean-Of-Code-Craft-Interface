import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, public themeService : ThemeService) {}

  navigate(link: string) {
    switch (link) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'about us':
        this.router.navigate(['/about-us']);
        break;
      case 'contact-us':
        this.router.navigate(['/contact-us']);
        break;
      case 'get-custom-code':
        this.router.navigate(['/get-custom-code']);
        break;
      case 'sign-up':
        this.router.navigate(['/sign-up']);
        break;
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'mode':
        this.router.navigate(['/mode']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
      case 'change-password':
        this.router.navigate(['/change-password']);
        break;
      case 'logout':
        this.router.navigate(['/home']);
        break;
    }
  }

  toggleTheme(){
    this.themeService.toggleDarkMode();
  }
}