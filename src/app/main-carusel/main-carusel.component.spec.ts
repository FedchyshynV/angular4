import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaruselComponent } from './main-carusel.component';

describe('MainCaruselComponent', () => {
  let component: MainCaruselComponent;
  let fixture: ComponentFixture<MainCaruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCaruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
