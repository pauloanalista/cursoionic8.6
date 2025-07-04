import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentesjsPage } from './componentesjs.page';

describe('ComponentesjsPage', () => {
  let component: ComponentesjsPage;
  let fixture: ComponentFixture<ComponentesjsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
