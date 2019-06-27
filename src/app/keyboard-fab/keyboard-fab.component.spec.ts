import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardFabComponent } from './keyboard-fab.component';

describe('KeyboardFabComponent', () => {
  let component: KeyboardFabComponent;
  let fixture: ComponentFixture<KeyboardFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
