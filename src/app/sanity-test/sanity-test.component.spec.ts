import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanityTestComponent } from './sanity-test.component';

describe('SanityTestComponent tests', () => {
  let component: SanityTestComponent = null;
  let fixture: ComponentFixture<SanityTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SanityTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set name to Jeff', () => {
    expect(component.name).toBe('Jeff');
  });
});
