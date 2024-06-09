import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListfullPage } from './listfull.page';

describe('ListfullPage', () => {
  let component: ListfullPage;
  let fixture: ComponentFixture<ListfullPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListfullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
