import { Component, Input } from '@angular/core';
import { Review } from './type.review';
import { allReviews } from './review.datas';
import { ButtonComponent } from './button/button.component';
import { ClientComponent } from "./client/client.component";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ButtonComponent, ClientComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() reviewId: number = 0;
  allReviews: Review[] = allReviews;

  onReviewChange(indexChange: number) {
    const newIndex = this.reviewId + indexChange;
    if (newIndex >= 0 && newIndex < this.allReviews.length) {
      this.reviewId = newIndex;
    } else if (newIndex < 0) {
      this.reviewId = this.allReviews.length - 1
    } else {
      this.reviewId = 0;
    }
  }
}
