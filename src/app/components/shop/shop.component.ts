import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ShopStoreService } from '../../stores/shop-store/shop-store.service';
import { CartStoreService } from '../../stores/cart-store/cart-store.service';
import { ICartItem, IShopItem } from '../../models/shop.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  public shopStore = inject(ShopStoreService);
  public cartStore = inject(CartStoreService);

  addToCart(item: IShopItem){
    const cartItem: ICartItem = {
      id: this.cartStore.cartItems().length + 1,
      item_id: item.id,
      quantity: 1,
      item: item
    }
    this.cartStore.addToCart(cartItem)
  }
}
