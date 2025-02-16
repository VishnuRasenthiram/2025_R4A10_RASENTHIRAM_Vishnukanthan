import { Component } from '@angular/core';
import { BlockleftComponent } from './blockleft/blockleft.component';
import { BlockrightComponent } from './blockright/blockright.component';

@Component({
  selector: 'app-virtual-healthcare',
  standalone: true,
  imports: [BlockleftComponent,BlockrightComponent],
  templateUrl: './virtual-healthcare.component.html',
  styleUrl: './virtual-healthcare.component.scss'
})
export class VirtualHealthcareComponent {

}
