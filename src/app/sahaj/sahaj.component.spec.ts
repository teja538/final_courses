import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahajComponent } from './sahaj.component';

describe('SahajComponent', () => {
  let component: SahajComponent;
  let fixture: ComponentFixture<SahajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
