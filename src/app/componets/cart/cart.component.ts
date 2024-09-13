import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfacs/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  private readonly _CartService = inject(CartService);
  cleanCart!: Subscription;
  cleanrestart!: Subscription;
  cleanDelete!: Subscription;
  cleanupdateCart!: Subscription;
  cleanClearCart!: Subscription;

  cartItem: Icart = {} as Icart;

  ngOnInit(): void {
    this.cleanCart = this._CartService.getSpecificProductCart().subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartItem = res.data;
      },
    });
  }
  restartRespons(): void {
    this.cleanrestart = this._CartService.getSpecificProductCart().subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartItem = res.data;
      },
    });
  }
  deleteCart(id: string): void {
    this.cleanDelete = this._CartService.removeSpecificCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartItem = res.data;
        this._CartService.CartNumber.next(res.numOfCartItems);
      },
    });
  }
  updateCart(id: string, cont: number): void {
    this.cleanupdateCart = this._CartService.updateCart(id, cont).subscribe({
      next: (res) => {
        console.log(res);
        this.cartItem = res.data;
      },
    });
  }
  clearCart(): void {
    this.cleanClearCart = this._CartService.clearCart().subscribe({
      next: (res) => {
        console.log(res);
        if (res.message == 'success') {
          this._CartService.CartNumber.next(res.numOfCartItems);
          this.restartRespons();
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.cleanCart?.unsubscribe();
    this.cleanClearCart?.unsubscribe();
    this.cleanDelete?.unsubscribe();
    this.cleanrestart?.unsubscribe();
    this.cleanupdateCart?.unsubscribe();
  }
}
