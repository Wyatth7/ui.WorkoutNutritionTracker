import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLinkComponent } from './sub-link.component';

describe('SubLinkComponent', () => {
  let component: SubLinkComponent;
  let fixture: ComponentFixture<SubLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
