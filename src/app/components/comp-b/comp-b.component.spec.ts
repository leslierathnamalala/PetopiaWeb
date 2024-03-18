import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBComponent } from './comp-b.component';

describe('CompBComponent', () => {
  let component: CompBComponent;
  let fixture: ComponentFixture<CompBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompBComponent]
    });
    fixture = TestBed.createComponent(CompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
