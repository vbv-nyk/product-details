import { EventEmitter, Injectable } from '@angular/core';

interface Cart {
  name: string,
  price: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }
  shoppingCart: Cart[] = [];
  cartChangedEvent: EventEmitter<Cart[]> = new EventEmitter<Cart[]>;

  addToCart(name: string, price: string, id: string) {
    this.shoppingCart.push({ name, price, id });
  }

  removeFromCart(name: string, price: string, id: string) {
    this.shoppingCart = this.shoppingCart.filter(cartItem => cartItem.id !== id);
  }
}
