import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualPage } from './virtual.page';

describe('VirtualPage', () => {
  let component: VirtualPage;
  let fixture: ComponentFixture<VirtualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
