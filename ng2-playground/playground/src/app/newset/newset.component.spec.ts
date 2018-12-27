import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsetComponent } from './newset.component';

describe('NewsetComponent', () => {
  let component: NewsetComponent;
  let fixture: ComponentFixture<NewsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
