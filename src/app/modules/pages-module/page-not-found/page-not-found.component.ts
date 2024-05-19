import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service/theme.service';
import { FooterComponent } from "../footer/footer/footer.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  imports: [CommonModule, FooterComponent]
})
export class PageNotFoundComponent {
  constructor(
    private router: Router,
    public themeService: ThemeService,
  ) { }
  navigate(link: string) {
    switch (link) {
      case 'home':
        this.router.navigate(['/home']);
        break;
    }
  }

}
