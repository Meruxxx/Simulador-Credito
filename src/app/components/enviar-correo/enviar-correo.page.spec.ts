import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarCorreoPage } from './enviar-correo.page';

describe('EnviarCorreoPage', () => {
  let component: EnviarCorreoPage;
  let fixture: ComponentFixture<EnviarCorreoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarCorreoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
