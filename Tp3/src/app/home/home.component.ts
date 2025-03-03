import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../../service/voyage.service';
import { Travel } from '../../model/travel';
import { TravelsComponent } from '../travels/travels.component';

@Component({
  selector: 'app-home',
  imports: [TravelsComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  voyages: Travel[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalPages: number = 0;
  Array = Array

  constructor(
    private voyageService: VoyageService,
    private route: ActivatedRoute,
    protected router: Router,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.loadVoyages();
    });
  }

  loadVoyages(): void {
    this.voyages = this.getPaginatedVoyages();
    this.totalPages = Math.ceil(this.voyageService.getVoyage().length / this.itemsPerPage);
  }

  private getPaginatedVoyages() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.voyageService.getVoyage().slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.router.navigate([`/home/page/${this.currentPage + 1}`]);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.router.navigate([`/home/page/${this.currentPage - 1}`]);
    }
  }

  goToPage(page: number) {
    this.router.navigate([`/home/page/${page}`]);
  }

  deleteVoyage(idVoyage: string) {
    this.voyageService.removeVoyage(idVoyage);
    this.voyages = this.voyageService.getVoyage();
    this.voyages = this.getPaginatedVoyages();
  }



}
