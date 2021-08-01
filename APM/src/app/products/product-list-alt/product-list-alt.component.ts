import { Component, OnInit, OnDestroy } from '@angular/core';

import { EMPTY, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId: number;

  products: Product[] = [];
  sub: Subscription;

  constructor(private productService: ProductService) { }


  products$ = this.productService.products$
  .pipe(
    catchError(error => {
      this.errorMessage = error;
      return EMPTY;
    })
  );

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
