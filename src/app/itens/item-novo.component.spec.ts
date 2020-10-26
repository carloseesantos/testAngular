import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNovoComponent } from './item-novo.component';

describe('ItemNovoComponent', () => {
  let component: ItemNovoComponent;
  let fixture: ComponentFixture<ItemNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
