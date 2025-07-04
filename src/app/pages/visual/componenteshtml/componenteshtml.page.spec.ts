import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteshtmlPage } from './componenteshtml.page';

describe('ComponenteshtmlPage', () => {
  let component: ComponenteshtmlPage;
  let fixture: ComponentFixture<ComponenteshtmlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteshtmlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
