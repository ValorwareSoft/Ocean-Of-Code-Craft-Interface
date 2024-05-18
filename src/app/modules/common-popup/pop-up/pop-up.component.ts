import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  result: any;

  readonly CLOSE: string = 'Close';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.result = this.route.snapshot.paramMap.get('result');
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  close() {
    if(this.result === 'success' || this.result === 'failed'){
      this.router.navigate(['/contact-us']);
    }
    else{
      this.router.navigate(['/get-custom-code']);
    }

  }
}
