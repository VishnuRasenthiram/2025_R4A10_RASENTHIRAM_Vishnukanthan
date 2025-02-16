import { Component, Input } from '@angular/core';
import { Review } from '../type.review';
import { allReviews } from '../review.datas';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  @Input({required : true}) reviewId!: number;

  allReviews: Review[] = allReviews;

  get currentReview(): Review {
    return this.allReviews[this.reviewId];
  }
}
