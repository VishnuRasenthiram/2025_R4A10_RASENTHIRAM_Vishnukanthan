import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Travel } from '../../../model/travel';
import { SlicePipe} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [
    RouterLink,
    SlicePipe,
  ],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent {

  @Input({ required: true }) voyage!: Travel;
  @Output() deleteVoyageEvent = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  deleteVoyage() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: "Voulez-vous vraiment supprimer ce voyage ?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVoyageEvent.emit(this.voyage.id);
      }
    });
  }
}

