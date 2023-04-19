import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedepagComponent } from './piedepag.component';

describe('PiedepagComponent', () => {
  let component: PiedepagComponent;
  let fixture: ComponentFixture<PiedepagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedepagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedepagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
