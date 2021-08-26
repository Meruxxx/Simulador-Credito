import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractualesPage } from './contractuales.page';

describe('ContractualesPage', () => {
  let component: ContractualesPage;
  let fixture: ComponentFixture<ContractualesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractualesPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractualesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
