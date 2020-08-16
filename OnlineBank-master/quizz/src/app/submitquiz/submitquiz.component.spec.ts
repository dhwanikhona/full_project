import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitquizComponent } from './submitquiz.component';

describe('SubmitquizComponent', () => {
  let component: SubmitquizComponent;
  let fixture: ComponentFixture<SubmitquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
