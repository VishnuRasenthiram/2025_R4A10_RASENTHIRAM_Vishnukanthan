import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualHealthcareComponent } from './virtual-healthcare.component';

describe('VirtualHealthcareComponent', () => {
  let component: VirtualHealthcareComponent;
  let fixture: ComponentFixture<VirtualHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualHealthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
