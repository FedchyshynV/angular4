import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUkrComponent } from './main-ukr.component';

describe('MainUkrComponent', () => {
  let component: MainUkrComponent;
  let fixture: ComponentFixture<MainUkrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUkrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
