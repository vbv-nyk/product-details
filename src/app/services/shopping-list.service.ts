import { EventEmitter, Injectable } from '@angular/core';

interface Cart {
  name: string,
  price: number,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }
  shoppingCart: Cart[] = [];
  cartChangedEvent: EventEmitter<Cart[]> = new EventEmitter<Cart[]>;

  addToCart(name: string, price: number, id: string) {
    this.shoppingCart.push({ name, price, id });
    this.cartChangedEvent.emit(this.shoppingCart);
    console.log(this.shoppingCart);
  }

  removeFromCart(name: string, price: number, id: string) {
    this.shoppingCart = this.shoppingCart.filter(cartItem => cartItem.id !== id);
    this.cartChangedEvent.emit(this.shoppingCart);
  }
}
