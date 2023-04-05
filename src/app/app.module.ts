import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CartItemComponent } from './shopping-list/cart-item/cart-item.component';
import { ShoppingListService } from './services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    AddProductComponent,
    ShoppingListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
