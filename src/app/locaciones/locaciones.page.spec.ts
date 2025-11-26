import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocacionesPage } from './locaciones.page';

describe('LocacionesPage', () => {
  let component: LocacionesPage;
  let fixture: ComponentFixture<LocacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
