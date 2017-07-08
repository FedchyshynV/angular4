import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocSetiComponent } from './soc-seti.component';

describe('SocSetiComponent', () => {
  let component: SocSetiComponent;
  let fixture: ComponentFixture<SocSetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocSetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocSetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
