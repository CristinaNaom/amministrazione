import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaleDetailComponent } from './personale-detail.component';

describe('PersonaleDetailComponent', () => {
  let component: PersonaleDetailComponent;
  let fixture: ComponentFixture<PersonaleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaleDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
