import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router) {}

  previewCode() {
    this.router.navigate(['/main/preview/navbar-preview']);
  }

  getCode() {
    this.router.navigate(['/main/get-code/header-getcode']);
  }
}