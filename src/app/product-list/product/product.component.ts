import { Component, Input } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() name: string | undefined;
  @Input() price: number | undefined;
  @Input() id: string | undefined;

  constructor(private productList: ProductListService) { }

  removeProduct() {
    this.productList.removeProduct(this.id)
  }
}
