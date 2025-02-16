import { Component } from '@angular/core';

@Component({
  selector: 'app-header-service',
  standalone: true,
  imports: [],
  templateUrl: './header-service.component.html',
  styleUrl: './header-service.component.scss'
})
export class HeaderServiceComponent {
  titre: string = 'Our services';
  description: string = 'We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health';
}
