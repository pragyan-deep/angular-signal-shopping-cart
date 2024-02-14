import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CartStoreService } from '../../../stores/cart-store/cart-store.service';
import { ICartItem } from '../../../models/shop.model';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, MatCheckboxModule, FormsModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  public cartStore = inject(CartStoreService);
  removeFromCart(item: ICartItem){
    this.cartStore.removeFromCart(item.item_id)
  }
  updateSelection(cartItem: ICartItem){
    this.cartStore.updateCartItemSelection(cartItem)
  }
  increaseQuantity(cartItem: ICartItem){
    cartItem.id = this.cartStore.cartItems().length + 1;
    this.cartStore.addToCart(cartItem)
  }
  decreaseQuantity(cartItem: ICartItem){
    this.cartStore.removeFromCart(cartItem.item_id)
  }
  trackByFn(index: number, item: any) {
    return item.id;
  }
}
