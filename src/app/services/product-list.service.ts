import { EventEmitter, Injectable } from '@angular/core';
import { v4 } from 'uuid';

interface Product {
  name: string,
  price: number,
  id: string | undefined
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products: Array<Product> = [{
    name: "Test Product",
    price: 1000,
    id: v4(),
  }
  ];

  productListChange: EventEmitter<Product[]> = new EventEmitter<Product[]>();



  constructor() { }

  addProduct(name: string, price: number, id: string) {
    this.products.push({
      name,
      price,
      id
    });
    this.productListChange.emit(this.products);

  };

  removeProduct(id: string | undefined) {
    this.products = this.products.filter(
      prod => prod.id !== id
    );
    this.productListChange.emit(this.products);
  };

}
