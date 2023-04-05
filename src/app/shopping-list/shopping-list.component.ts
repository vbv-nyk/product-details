import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

interface Cart {
  name: string,
  price: number,
  id: string
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingList: ShoppingListService) { }
  shoppingCart: Cart[] = this.shoppingList.shoppingCart;

  ngOnInit() {
    this.shoppingList.cartChangedEvent.subscribe(() => {
      this.shoppingCart = this.shoppingList.shoppingCart;
    });
  }
}
