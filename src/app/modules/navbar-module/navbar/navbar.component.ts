import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service/theme.service';
import { ToastrService } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from "../../pages-module/footer/footer/footer.component";
import { GoogleSigninComponent } from "../../GoogleSignin/google-signin/google-signin.component";
import { Subscription } from 'rxjs';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [CommonModule, RouterModule, MatTooltipModule, FooterComponent, GoogleSigninComponent]
})
export class NavbarComponent  implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(GoogleSigninComponent) googleSigninComponent!: GoogleSigninComponent;

  constructor(
    private router: Router,
    public themeService: ThemeService,
    private toastr: ToastrService,
    private authService: SocialAuthService
  ) { }

  readonly SWITCH_TO_DARK_MODE: string = 'Switch To Dark Mode';
  readonly SWITCH_TO_LIGHT_MODE: string = 'Switch To Light Mode';
  login: boolean = false;
  authSubscription!: Subscription;

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      console.log('user', user);
      this.login = !!user;
    });
  }

  ngAfterViewInit() {
    // GoogleSigninComponent is now initialized and can be used
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

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
      case 'services':
        this.router.navigate(['/services']);
        break;
      case 'sign-up':
        this.handleGoogleSignUp();
        break;
      case 'login':
        this.handleGoogleSignUp();
        this.router.navigate(['/home']);
        break;
      case 'logout':
        this.login = false;
        this.router.navigate(['/home']);
        this.toastr.success("Logged Out Successfully");
        break;
    }
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  handleGoogleSignUp() {
    if (this.googleSigninComponent) {
      this.googleSigninComponent.handleGoogleLogin();
    } else {
      console.error('GoogleSigninComponent is not initialized');
    }
  }

  handleGoogleLogin(googleWrapper: any) {
    console.log('Google Wrapper:', googleWrapper);
    googleWrapper.click();
  }
}
