import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaleListaComponent } from './personale-lista.component';

describe('PersonaleListaComponent', () => {
  let component: PersonaleListaComponent;
  let fixture: ComponentFixture<PersonaleListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaleListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaleListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
