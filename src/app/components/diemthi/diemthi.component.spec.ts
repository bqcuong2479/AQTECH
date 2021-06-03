import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemthiComponent } from './diemthi.component';

describe('DiemthiComponent', () => {
  let component: DiemthiComponent;
  let fixture: ComponentFixture<DiemthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiemthiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
