import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarsComponent } from './dashboars.component';

describe('DashboarsComponent', () => {
  let component: DashboarsComponent;
  let fixture: ComponentFixture<DashboarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
