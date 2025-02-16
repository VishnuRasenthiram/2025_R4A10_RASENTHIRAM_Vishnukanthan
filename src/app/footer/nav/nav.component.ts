import { Component } from '@angular/core';
import { dataFooter } from './data.footer';
import { DataFooters } from './type.footer';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  dataFooters: DataFooters[] = dataFooter;
}
