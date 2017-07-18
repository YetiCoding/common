import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlBtnComponent } from './kl-btn.component';

describe('KlBtnComponent', () => {
  let component: KlBtnComponent;
  let fixture: ComponentFixture<KlBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
