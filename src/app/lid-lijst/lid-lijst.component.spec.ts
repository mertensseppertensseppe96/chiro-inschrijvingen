import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidLijstComponent } from './lid-lijst.component';

describe('LidLijstComponent', () => {
  let component: LidLijstComponent;
  let fixture: ComponentFixture<LidLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
