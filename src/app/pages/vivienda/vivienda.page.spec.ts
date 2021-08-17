import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaPage } from './vivienda.page';

describe('ViviendaPage', () => {
  let component: ViviendaPage;
  let fixture: ComponentFixture<ViviendaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViviendaPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
