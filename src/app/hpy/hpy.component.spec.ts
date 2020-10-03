import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpyComponent } from './hpy.component';

describe('HpyComponent', () => {
  let component: HpyComponent;
  let fixture: ComponentFixture<HpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
