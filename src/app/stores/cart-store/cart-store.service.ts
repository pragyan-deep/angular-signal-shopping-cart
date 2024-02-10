import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { ICartItem, TCartItems } from '../../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  cartItems = signal<TCartItems>([]);
  itemsInCart = computed(() => {
    return this.cartItems()?.length || 0
  });
  cartItemsToShow = computed(() => {
    return this.uniqBy(this.cartItems(), "item_id")
  })

  addToCart(newItem: ICartItem) {
    this.cartItems.set([...this.cartItems(), newItem])
  };

  removeFromCart(cart_item_id: number){
    this.cartItems.update(items => {
      const index = items.findIndex(({item_id}) => item_id === cart_item_id);
      if(index > -1){
        items.splice(index, 1);
      } 
      return [...items];
    })
  }

  uniqBy = (arr: TCartItems, predicate: string): TCartItems => {
    const cb = (o: any) => o[predicate];
  
    return Object.values(arr.reduce((map: any, item) => {
      const key = cb(item);
  
      console.log(map)
      if (map[key]) {
        map[key].quantity++;
      } else {
        map[key] = { ...item };
      }
  
      return map;
    }, {}));
};
}
