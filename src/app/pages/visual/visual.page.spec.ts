import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPage } from './visual.page';

describe('VisualPage', () => {
  let component: VisualPage;
  let fixture: ComponentFixture<VisualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
