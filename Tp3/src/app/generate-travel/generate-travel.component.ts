import {Component, OnInit} from '@angular/core';
import {Travel} from '../../model/travel';
import {VoyageService} from '../../service/voyage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-generate-travel',
  templateUrl: './generate-travel.component.html',
  standalone: true,
  styleUrl: './generate-travel.component.scss'
})
export class GenerateTravelComponent implements OnInit{
  generateVoyage!: Travel;
  itemsPerPage : number = 20;


  constructor(private voyageService: VoyageService, private router: Router) {
  }

  ngOnInit(): void {
    this.generateVoyage = this.voyageService.generateVoyage();
  }

  generateNewVoyage(){
    this.generateVoyage = this.voyageService.generateVoyage();
  }

  saveVoyage() {

    this.voyageService.addVoyage(this.generateVoyage);

    const totalVoyages = this.voyageService.getVoyage().length;
    const pageNumber = Math.ceil(totalVoyages / this.itemsPerPage);

    this.router.navigate([`/home/page/${pageNumber}`]);
  }
}
