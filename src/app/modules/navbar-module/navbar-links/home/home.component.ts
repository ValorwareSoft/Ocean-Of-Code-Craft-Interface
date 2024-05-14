import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/modules/main-module/main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
