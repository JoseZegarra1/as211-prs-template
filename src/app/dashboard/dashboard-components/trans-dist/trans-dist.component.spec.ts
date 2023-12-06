import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransDistComponent } from './trans-dist.component';

describe('TransDistComponent', () => {
  let component: TransDistComponent;
  let fixture: ComponentFixture<TransDistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransDistComponent]
    });
    fixture = TestBed.createComponent(TransDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
