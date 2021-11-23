import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipperNamesComponent } from './tipper-names.component';

describe('TipperNamesComponent', () => {
  let component: TipperNamesComponent;
  let fixture: ComponentFixture<TipperNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipperNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipperNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
