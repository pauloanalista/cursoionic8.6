import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NativoPage } from './nativo.page';

describe('NativoPage', () => {
  let component: NativoPage;
  let fixture: ComponentFixture<NativoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
