import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { VirtualHealthcareComponent } from './virtual-healthcare/virtual-healthcare.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, VirtualHealthcareComponent, ServicesComponent,ReviewComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tp2';
}
