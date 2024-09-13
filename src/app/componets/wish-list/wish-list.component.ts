import { Iwishlist } from './../../core/interfaces/iwishlist';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { WishListService } from '../../core/services/wish-list.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CurrencyPipe, TranslateModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent implements OnInit, OnDestroy {
  private readonly _CartService = inject(CartService);
  private readonly _WishListService = inject(WishListService);
  allWish: Iwishlist = [] as Iwishlist;
  cleanWishlist!: Subscription;
  cleanaddWishlist!: Subscription;
  cleanRemoveWishlist!: Subscription;

  ngOnInit(): void {
    this.cleanWishlist = this._WishListService.getALlWishlist().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allWish = res.data;
        let wishId = res.data;
        this._WishListService.wishlistIcone.push(wishId);
        console.log('wwwww', this._WishListService.wishlistIcone);
      },
    });
  }
  restartRespons(): void {
    this.cleanWishlist = this._WishListService.getALlWishlist().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allWish = res.data;
      },
    });
  }

  addCartwish(id: string): void {
    this.cleanaddWishlist = this._CartService.addProductTOcart(id).subscribe({
      next: (res) => {
        console.log(res.data);
        this._WishListService.wishlistIcone = res.data;

        this.removeWihtWishlist(id);
        this._CartService.CartNumber.next(res.numOfCartItems);
        this.restartRespons();
      },
    });
  }
  removeWihtWishlist(id: string): void {
    this.cleanRemoveWishlist = this._WishListService
      .removeFromWishlist(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.whishListdata=res.data

          this._WishListService.wishlistIcone = res.data;

          this.restartRespons();
        },
      });
  }
  ngOnDestroy(): void {
    this.cleanWishlist?.unsubscribe();
    this.cleanaddWishlist?.unsubscribe();
    this.cleanRemoveWishlist?.unsubscribe();
  }
}
