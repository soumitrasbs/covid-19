import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCoronaComponent } from './covid-corona.component';

describe('CovidCoronaComponent', () => {
  let component: CovidCoronaComponent;
  let fixture: ComponentFixture<CovidCoronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidCoronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
