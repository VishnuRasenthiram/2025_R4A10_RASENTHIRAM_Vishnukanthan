import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitrefooterComponent } from './titrefooter.component';

describe('TitrefooterComponent', () => {
  let component: TitrefooterComponent;
  let fixture: ComponentFixture<TitrefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitrefooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitrefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
