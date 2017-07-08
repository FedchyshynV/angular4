import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyruSeaComponent } from './tyru-sea.component';

describe('TyruSeaComponent', () => {
  let component: TyruSeaComponent;
  let fixture: ComponentFixture<TyruSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyruSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyruSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
