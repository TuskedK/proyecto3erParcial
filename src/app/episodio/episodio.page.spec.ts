import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodioPage } from './episodio.page';

describe('EpisodioPage', () => {
  let component: EpisodioPage;
  let fixture: ComponentFixture<EpisodioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
