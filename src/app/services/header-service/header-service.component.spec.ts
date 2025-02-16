import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderServiceComponent } from './header-service.component';

describe('HeaderServiceComponent', () => {
  let component: HeaderServiceComponent;
  let fixture: ComponentFixture<HeaderServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
