import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSiteComponent } from './access-site.component';

describe('AccessSiteComponent', () => {
  let component: AccessSiteComponent;
  let fixture: ComponentFixture<AccessSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
