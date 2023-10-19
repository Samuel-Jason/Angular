import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProductCreateComponent } from './product.product-create.component';

describe('ProductProductCreateComponent', () => {
  let component: ProductProductCreateComponent;
  let fixture: ComponentFixture<ProductProductCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductProductCreateComponent]
    });
    fixture = TestBed.createComponent(ProductProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
