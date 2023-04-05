import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

interface Product {
  name: string,
  price: number,
  id: string | undefined
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  products = this.productList.products;
  constructor(private productList: ProductListService) { }
  ngOnInit(): void {
    console.log("called");
    this.products = this.productList.products;
    this.productList.productListChange.subscribe((products) => this.products = products)
  }
  ngOnDestroy(): void {
    this.productList.productListChange.unsubscribe();
  }
}
