import {Injectable} from '@angular/core';
import {Travel} from '../model/travel';
import {DESTINATIONS, DESCRIPTIONS, PRIX} from './data';

@Injectable({
  providedIn: 'root'
})
export class VoyageService{
  voyagesList: Travel[] = [];
  nextId: number = 0;

  constructor() {
    this.initializeVoyages();
  }

  initializeVoyages() {
    for(let i = 0; i < DESTINATIONS.length; i++){
      let voyage: Travel = {destination: DESTINATIONS[i], description: DESCRIPTIONS[i], price: PRIX[i], id: this.nextId.toString()};
      this.nextId++;
      this.voyagesList.push(voyage);
    }
  }

  getVoyage(): Travel[]{
    return this.voyagesList;
  }

  generateVoyage(): Travel{
    let voyage =  {
      destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      price: PRIX[Math.floor(Math.random() * PRIX.length)],
      id: this.nextId.toString()
    };
    this.nextId++;
    return voyage;
  }

  addVoyage(voyage: Travel){
    this.voyagesList.push(voyage);
  }

  removeVoyage(id: string | null){
    this.voyagesList = this.voyagesList.filter(voyage => voyage.id !== id);
  }

  findById(id: string | null){
    return this.voyagesList.find(voyage => voyage.id == id)
  }

}
