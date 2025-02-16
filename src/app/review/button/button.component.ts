import { Component, EventEmitter, Output  } from '@angular/core';
import { Review } from '../type.review';
import { allReviews } from '../review.datas';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  allReviews: Review[] = allReviews;

  @Output() reviewEmitter = new EventEmitter<number>();

  prevReview() {
    this.reviewEmitter.emit(-1);  }

  nextReview() {
    this.reviewEmitter.emit(+1);
  }
}
