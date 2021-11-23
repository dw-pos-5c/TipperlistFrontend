import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipperMatchesComponent } from './tipper-matches.component';

describe('TipperMatchesComponent', () => {
  let component: TipperMatchesComponent;
  let fixture: ComponentFixture<TipperMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipperMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipperMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
