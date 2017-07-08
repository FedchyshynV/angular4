import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCaruselComponent } from './small-carusel.component';

describe('SmallCaruselComponent', () => {
  let component: SmallCaruselComponent;
  let fixture: ComponentFixture<SmallCaruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCaruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
