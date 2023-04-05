import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { v4, v5 } from 'uuid';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @ViewChild('productName') nameInputRef: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('productPrice') priceInputRef: ElementRef<HTMLInputElement> | undefined;
  constructor(private productList: ProductListService) { }

  addProduct() {
    let name = this.nameInputRef?.nativeElement.value;
    let price = Number(this.priceInputRef?.nativeElement.value);

    if (name && price) {
      this.productList.addProduct(name, price, v4());
    }
  }
}
