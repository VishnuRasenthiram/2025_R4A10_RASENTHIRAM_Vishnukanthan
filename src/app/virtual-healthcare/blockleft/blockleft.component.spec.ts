import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockleftComponent } from './blockleft.component';

describe('BlockleftComponent', () => {
  let component: BlockleftComponent;
  let fixture: ComponentFixture<BlockleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockleftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
