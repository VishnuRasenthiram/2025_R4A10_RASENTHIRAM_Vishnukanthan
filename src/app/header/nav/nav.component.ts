import { Component } from '@angular/core';
import { menuLinks } from './links';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links = menuLinks;

}
