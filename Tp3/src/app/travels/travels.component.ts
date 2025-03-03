import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from "@angular/router";
import { TravelComponent } from "./travel/travel.component";
import { Travel } from '../../model/travel';
import { VoyageService } from '../../service/voyage.service';

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [TravelComponent],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent {
  @Input({required: true}) voyages: Travel[] = [];
  @Output() deleteVoyageEvent = new EventEmitter<string>();

  deleteVoyage(idVoyage: string) {
    this.deleteVoyageEvent.emit(idVoyage);
  }
}

