import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisJogadosComponent } from './mais-jogados.component';

describe('MaisJogadosComponent', () => {
  let component: MaisJogadosComponent;
  let fixture: ComponentFixture<MaisJogadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisJogadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisJogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
