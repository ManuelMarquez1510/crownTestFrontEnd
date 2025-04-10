import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemCatalogFormComponent } from './add-item-catalog-form.component';

describe('AddItemCatalogFormComponent', () => {
  let component: AddItemCatalogFormComponent;
  let fixture: ComponentFixture<AddItemCatalogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemCatalogFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemCatalogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
