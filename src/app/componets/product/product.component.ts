import { Icatgories } from './../../core/interfaces/icatgories';
import { Iprouducts } from './../../core/interfaces/iprouducts';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';
import { CategoriService } from '../../core/services/categori.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyPipe, NgStyle, TitleCasePipe } from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { CartService } from '../../core/services/cart.service';
import { WishListService } from '../../core/services/wish-list.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CarouselModule,
    RouterLink,
    CurrencyPipe,
    TermtextPipe,
    TitleCasePipe,
    RouterLinkActive,
    NgStyle,
    FormsModule,
    SearchPipe,
    TranslateModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit, OnDestroy {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CategoriService = inject(CategoriService);
  private readonly _CartService = inject(CartService);
  private readonly _WishListService = inject(WishListService);
  private readonly _ToastrService = inject(ToastrService);

  productsList: Iprouducts[] = [];
  categoriLyst: Icatgories[] = [];
  cloesAllproducts!: Subscription;
  cleanAddCart!: Subscription;
  cleanAddWishList!: Subscription;
  cleanRemoveWishlist!: Subscription;
  cleanCatagor!: Subscription;
  cleanRestar!: Subscription;
  cleanWishlist!: Subscription;
  wishlistIcone: string[] = [];

  textName: string = '';

  addCart(id: string): void {
    this._CartService.addProductTOcart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, 'Fresh Cart');
        this._CartService.CartNumber.next(res.numOfCartItems);
      },
    });
  }
  addProducttoWishlist(id: string): void {
    this.cleanAddWishList = this._WishListService
      .getProductWishlist(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          // document.getElementById("button")!.innerHTML = '<i class="fa-solid fa-heart-crack" style="color: #0dcaf0;"></i>';

          this._WishListService.wishlistIcone = res.data;

          this.wishlistIcone = this._WishListService.wishlistIcone;
          console.log(this.wishlistIcone);

          this._ToastrService.success(res.message, 'Add Whith WishList');
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

          this.wishlistIcone = this._WishListService.wishlistIcone;
          this._ToastrService.warning('remove Form Wish list');
        },
      });
  }

  ngOnInit(): void {
    this.cloesAllproducts = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        console.log('prodouct', res.data);
        this.productsList = res.data;
      },
    });

    this.cleanWishlist = this._WishListService.getALlWishlist().subscribe({
      next: (res) => {
        this._WishListService.wishlistIcone = res.data;
        this.wishlistIcone = res.data.map((item: any) => item._id);
      },
    });

    this.cleanCatagor = this._CategoriService.getCategori().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoriLyst = res.data;
      },
    });
  }

  ngOnDestroy(): void {
    this.cloesAllproducts?.unsubscribe();
    this.cleanAddWishList?.unsubscribe();
    this.cleanRemoveWishlist?.unsubscribe();
    this.cleanRestar?.unsubscribe();
    this.cleanCatagor?.unsubscribe();
    this.cleanWishlist?.unsubscribe();
  }
}
