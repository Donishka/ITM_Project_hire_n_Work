import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWorkerComponent } from './find-worker.component';

describe('FindWorkerComponent', () => {
  let component: FindWorkerComponent;
  let fixture: ComponentFixture<FindWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
