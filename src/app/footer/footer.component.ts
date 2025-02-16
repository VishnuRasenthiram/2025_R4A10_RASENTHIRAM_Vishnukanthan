import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { TitrefooterComponent } from './titrefooter/titrefooter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavComponent,TitrefooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
