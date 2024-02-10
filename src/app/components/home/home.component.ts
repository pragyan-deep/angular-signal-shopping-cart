import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { ShopComponent } from '../shop/shop.component';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
import { CartStoreService } from '../../stores/cart-store/cart-store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatTabsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    ShopComponent,
    CartComponent,
    OrdersComponent,
  ],
})
export class HomeComponent {
  public cartStore = inject(CartStoreService)
}
