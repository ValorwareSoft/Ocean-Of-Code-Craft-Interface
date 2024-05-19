import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(
    private router: Router, private toastr: ToastrService
  ) { }
  login: boolean = true;
  navigate(link: string) {
    switch (link) {
      case 'home':
        this.router.navigate(['/home']);
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
    }
  }
}
