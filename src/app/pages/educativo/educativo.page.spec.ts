import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativoPage } from './educativo.page';

describe('EducativoPage', () => {
  let component: EducativoPage;
  let fixture: ComponentFixture<EducativoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducativoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
