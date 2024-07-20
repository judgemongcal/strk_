import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitAddComponent } from './habit-add.component';

describe('HabitAddComponent', () => {
  let component: HabitAddComponent;
  let fixture: ComponentFixture<HabitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
