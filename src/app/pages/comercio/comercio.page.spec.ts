import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioPage } from './comercio.page';

describe('ComercioPage', () => {
  let component: ComercioPage;
  let fixture: ComponentFixture<ComercioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercioPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
