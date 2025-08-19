import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Om } from './om';

describe('Om', () => {
  let component: Om;
  let fixture: ComponentFixture<Om>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Om]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Om);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
