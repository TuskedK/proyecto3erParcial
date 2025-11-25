import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocacionPage } from './locacion.page';

describe('LocacionPage', () => {
  let component: LocacionPage;
  let fixture: ComponentFixture<LocacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
