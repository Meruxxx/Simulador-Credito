import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdatPage } from './cdat.page';

describe('CdatPage', () => {
  let component: CdatPage;
  let fixture: ComponentFixture<CdatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdatPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
