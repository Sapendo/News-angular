import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchPanelComponent } from './serch-panel.component';

describe('SerchPanelComponent', () => {
  let component: SerchPanelComponent;
  let fixture: ComponentFixture<SerchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
