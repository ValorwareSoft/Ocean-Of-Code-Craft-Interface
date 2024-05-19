import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardsData = [
    {
      imageUrl: '../../../../../assets/images/ux-design.jpg',
      title: 'UX Design Services',
      description: 'Unlock the potential of your digital vision with our comprehensive UX Design Services. We specialize in crafting captivating user experiences that seamlessly blend functionality with aesthetics, ensuring your applications leave a lasting impression.',
      previewLink: '/preview/navbar',
      getCodeLink: '/get-code/navbar'
    },
    {
      imageUrl: '../../../../../assets/images/ux-design.jpg',
      title: 'UX Design Services',
      description: 'Unlock the potential of your digital vision with our comprehensive UX Design Services. We specialize in crafting captivating user experiences that seamlessly blend functionality with aesthetics, ensuring your applications leave a lasting impression.',
      previewLink: '/preview/header',
      getCodeLink: '/get-code/header'
    },
    {
      imageUrl: '../../../../../assets/images/ux-design.jpg',
      title: 'UX Design Services',
      description: 'Unlock the potential of your digital vision with our comprehensive UX Design Services. We specialize in crafting captivating user experiences that seamlessly blend functionality with aesthetics, ensuring your applications leave a lasting impression.',
      previewLink: '/preview/navbar',
      getCodeLink: '/get-code/navbar'
    },

  ];
}
