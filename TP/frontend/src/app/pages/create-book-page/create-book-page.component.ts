import { Component, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { BooksApiService } from '../../services/book-api.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.scss']
})
export class CreateBookPageComponent {
  bookForm: FormGroup;
  constructor(private bookService: BooksApiService) {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      author: new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(255)]),
    });
  }


  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value as Book).subscribe(() => {
        this.bookForm.reset();
      }
      );

    }
  }
}
