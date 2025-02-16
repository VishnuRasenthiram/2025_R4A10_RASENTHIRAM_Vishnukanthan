import { Component } from '@angular/core';

@Component({
  selector: 'app-titrefooter',
  standalone: true,
  imports: [],
  templateUrl: './titrefooter.component.html',
  styleUrl: './titrefooter.component.scss'
})
export class TitrefooterComponent {
  title: string = 'Trafalgar';
  description: string = 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone';
  text: string = '©Trafalgar PTY LTD 2020. All rights reserved';
  imageFooter: string = "assets/images/footer/footer.png";
}
