import { Injectable, Signal, signal } from '@angular/core';
import { shopList } from '../../constants/shop';
import { TShopItems } from '../../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopStoreService {

  shopItems: Signal<TShopItems> = signal(shopList);
}
