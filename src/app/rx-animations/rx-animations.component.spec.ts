import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAnimationsComponent } from './rx-animations.component';

describe('RxAnimationsComponent', () => {
  let component: RxAnimationsComponent;
  let fixture: ComponentFixture<RxAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
