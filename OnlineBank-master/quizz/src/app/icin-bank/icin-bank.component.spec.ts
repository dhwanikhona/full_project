import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcinBankComponent } from './icin-bank.component';

describe('IcinBankComponent', () => {
  let component: IcinBankComponent;
  let fixture: ComponentFixture<IcinBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcinBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcinBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
