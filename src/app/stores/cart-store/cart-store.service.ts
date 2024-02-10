import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { ICartItem, TCartItems } from '../../models/shop.model';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  cartItems = signal<TCartItems>([]);
  itemsInCart = computed(() => {
    return this.cartItems()?.length || 0;
  });
  cartItemsToShow = computed(() => {
    return this.uniqBy(this.cartItems(), 'item_id');
  });
  total = computed(() => {
    let total = 0;
    this.cartItems().map(item => {
      if(item.isSelected && item.item?.price){
        total += item.item.price;
      }
    });
    return total;
  })

  updateCartItemSelection(updatedItem: ICartItem) {
    const updatedArray = this.cartItems().map(obj => {
      if (obj.item_id === updatedItem.item_id) {
        return { ...obj, isSelected: !obj.isSelected };
      } else {
        return obj;
      }
    });
    this.cartItems.set(updatedArray);
  }

  addToCart(newItem: ICartItem) {
    newItem.isSelected = true;
    this.cartItems.set([...this.cartItems(), newItem]);
  }

  removeFromCart(cart_item_id: number) {
    this.cartItems.update((items) => {
      const index = items.findIndex(({ item_id }) => item_id === cart_item_id);
      if (index > -1) {
        items.splice(index, 1);
      }
      return [...items];
    });
  }

  uniqBy = (arr: TCartItems, predicate: string): TCartItems => {
    const cb = (o: any) => o[predicate];
    return Object.values(
      arr.reduce((map: any, item) => {
        const key = cb(item);
        if (map[key]) map[key].quantity++;
        else map[key] = { ...item };
        return map;
      }, {})
    );
  };
}
