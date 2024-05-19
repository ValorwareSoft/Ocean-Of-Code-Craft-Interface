import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../pages-module/footer/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [CommonModule, FooterComponent]
})
export class MainComponent {
  cardsData = [
    {
      imageUrl: '../../../../../assets/images/ux-design.jpg',
      title: 'UX Design Services',
      description: 'Unlock the potential of your digital vision with our comprehensive UX Design Services. We specialize in crafting captivating user experiences that seamlessly blend functionality with aesthetics, ensuring your applications leave a lasting impression.',
      previewLink: '/main/preview/navbar',
      getCodeLink : '/main/get-code/navbar'
    },
    {
      imageUrl: '../../../../../assets/images/ux-design.jpg',
      title: 'UX Design Services',
      description: 'Unlock the potential of your digital vision with our comprehensive UX Design Services. We specialize in crafting captivating user experiences that seamlessly blend functionality with aesthetics, ensuring your applications leave a lasting impression.',
      previewLink: '/main/preview/header',
      getCodeLink : '/main/get-code/header'
    },
    {
      imageUrl: '../../../../../assets/images/ux-design.jpg',
      title: 'UX Design Services',
      description: 'Unlock the potential of your digital vision with our comprehensive UX Design Services. We specialize in crafting captivating user experiences that seamlessly blend functionality with aesthetics, ensuring your applications leave a lasting impression.',
      previewLink: '/main/preview/navbar',
      getCodeLink : '/main/get-code/navbar'
    },

  ];
}