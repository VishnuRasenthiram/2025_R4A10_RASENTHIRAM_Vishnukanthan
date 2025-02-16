
import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeaderServiceComponent } from './header-service/header-service.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavComponent,HeaderServiceComponent,ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
