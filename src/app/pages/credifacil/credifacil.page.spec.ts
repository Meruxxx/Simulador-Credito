import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredifacilPage } from './credifacil.page';

describe('CredifacilPage', () => {
  let component: CredifacilPage;
  let fixture: ComponentFixture<CredifacilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredifacilPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredifacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
