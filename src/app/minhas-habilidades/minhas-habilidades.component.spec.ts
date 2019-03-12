import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasHabilidadesComponent } from './minhas-habilidades.component';

describe('MinhasHabilidadesComponent', () => {
  let component: MinhasHabilidadesComponent;
  let fixture: ComponentFixture<MinhasHabilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasHabilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
