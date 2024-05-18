import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service/theme.service';
import { ToastrService } from 'ngx-toastr';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from "../../pages-module/footer/footer/footer.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [CommonModule, RouterModule, MatTooltipModule, FooterComponent]
})
export class NavbarComponent {
  constructor(
    private router: Router,
    public themeService: ThemeService,
    private toastr: ToastrService
  ) { }
  readonly SWITCH_TO_DARK_MODE : string = 'Switch To Dark Mode';
  readonly SWITCH_TO_LIGHT_MODE : string = 'Switch To Light Mode';
  login: boolean = true;
  navigate(link: string) {
    switch (link) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'about-us':
        this.router.navigate(['/about-us']);
        break;
      case 'contact-us':
        this.router.navigate(['/contact-us']);
        break;
      case 'get-custom-code':
        if (this.login) {
          this.router.navigate(['/get-custom-code']);
        } else {
          this.toastr.error('Please Login To Get Customised Code');
        }
        break;
      case 'sign-up':
        this.router.navigate(['/sign-up']);
        break;
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'logout':
        this.router.navigate(['/home']);
        break;
    }
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  
  
  
  
  
  

}
