import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCreditoComponent } from './informacion-credito.component';

describe('InformacionCreditoComponent', () => {
  let component: InformacionCreditoComponent;
  let fixture: ComponentFixture<InformacionCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
