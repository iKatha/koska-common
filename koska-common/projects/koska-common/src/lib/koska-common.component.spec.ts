import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoskaCommonComponent } from './koska-common.component';

describe('KoskaCommonComponent', () => {
  let component: KoskaCommonComponent;
  let fixture: ComponentFixture<KoskaCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoskaCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoskaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
