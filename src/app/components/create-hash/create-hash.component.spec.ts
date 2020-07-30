import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHashComponent } from './create-hash.component';

describe('CreateHashComponent', () => {
  let component: CreateHashComponent;
  let fixture: ComponentFixture<CreateHashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
