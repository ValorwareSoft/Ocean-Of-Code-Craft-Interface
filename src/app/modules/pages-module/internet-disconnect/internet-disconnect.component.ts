import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
  selector: 'app-internet-disconnect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './internet-disconnect.component.html',
  styleUrls: ['./internet-disconnect.component.scss']
})
export class InternetDisconnectComponent {
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
