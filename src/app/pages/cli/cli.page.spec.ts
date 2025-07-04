import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CliPage } from './cli.page';

describe('CliPage', () => {
  let component: CliPage;
  let fixture: ComponentFixture<CliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
