import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCancionComponent } from './crear-cancion.component';

describe('CrearCancionComponent', () => {
  let component: CrearCancionComponent;
  let fixture: ComponentFixture<CrearCancionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCancionComponent]
    });
    fixture = TestBed.createComponent(CrearCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
