import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockrightComponent } from './blockright.component';

describe('BlockrightComponent', () => {
  let component: BlockrightComponent;
  let fixture: ComponentFixture<BlockrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockrightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
