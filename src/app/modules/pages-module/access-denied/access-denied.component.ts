import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer/footer.component";
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
    selector: 'app-access-denied',
    standalone: true,
    templateUrl: './access-denied.component.html',
    styleUrls: ['./access-denied.component.scss'],
    imports: [CommonModule , FooterComponent]
})
export class AccessDeniedComponent {
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
