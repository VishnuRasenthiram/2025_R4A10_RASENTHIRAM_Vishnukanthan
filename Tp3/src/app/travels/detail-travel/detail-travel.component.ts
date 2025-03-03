import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Travel} from '../../../model/travel';
import {VoyageService} from '../../../service/voyage.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-detail-travel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-travel.component.html',
  styleUrl: './detail-travel.component.scss'
})
export class DetailTravelComponent {
  voyageId: string | null = "0";
  voyage: Travel | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    private voyageService: VoyageService,
    private dialog: MatDialog)  {
  }

  ngOnInit(): void {
    this.voyageId = this.activatedRoute.snapshot.paramMap.get("id");
    this.voyage = this.voyageService.findById(this.voyageId);

    if(this.voyage == undefined){
      this.router.navigate([""]);
    }
  }

  deleteVoyage(){

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: "Voulez-vous vraiment supprimer ce voyage ?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.voyageService.removeVoyage(this.voyageId);
        this.router.navigate(['/']);
      }
    });
  }
}
