import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasExperienciasComponent } from './minhas-experiencias.component';

describe('MinhasExperienciasComponent', () => {
  let component: MinhasExperienciasComponent;
  let fixture: ComponentFixture<MinhasExperienciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasExperienciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
