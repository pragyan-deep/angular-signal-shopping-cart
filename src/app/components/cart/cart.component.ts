import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CartStoreService } from '../../stores/cart-store/cart-store.service';
import { ICartItem } from '../../models/shop.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, NgFor, MatButtonModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  public cartStore = inject(CartStoreService);
  removeFromCart(item: ICartItem){
    this.cartStore.removeFromCart(item.item_id)
  }
}
