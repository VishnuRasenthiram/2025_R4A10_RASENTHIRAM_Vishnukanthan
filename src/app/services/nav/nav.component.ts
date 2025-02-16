import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  blocks = [
    { logo: 'assets/images/blockservices/logoService1.png', title: 'Search doctor', description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals' },
    { logo: 'assets/images/blockservices/logoService2.png', title: 'Online pharmacy', description: 'Buy your medicines with our mobile application with a simple delivery system' },
    { logo: 'assets/images/blockservices/logoService3.png', title: 'Consultation', description: 'Free consultation with our trusted doctors and get the best recommendations' },
    { logo: 'assets/images/blockservices/logoService4.png', title: 'Details info', description: 'Free consultation with our trusted doctors and get the best recommendations' },
    { logo: 'assets/images/blockservices/logoService5.png', title: 'Emergency care', description: 'You can get 24/7 urgent care for yourself or your children and your lovely family' },
    { logo: 'assets/images/blockservices/logoService6.png', title: 'Tracking', description: 'Track and save your medical history and health data' }
  ];
}
