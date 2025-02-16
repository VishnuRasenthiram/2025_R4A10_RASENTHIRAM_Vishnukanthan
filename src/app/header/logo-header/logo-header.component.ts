import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-header',
  standalone: true,
  imports: [],
  templateUrl: './logo-header.component.html',
  styleUrls: ['./logo-header.component.scss']
})
export class LogoHeaderComponent {
  imageHeader: string = "assets/images/header/header.png";
  title = "Trafalgar";
}
