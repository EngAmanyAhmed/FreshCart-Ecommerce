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
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    RouterLink,
    CurrencyPipe,
    TermtextPipe,
    TitleCasePipe,
    RouterLinkActive,
    NgStyle,
    SearchPipe,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CategoriService = inject(CategoriService);
  private readonly _CartService = inject(CartService);
  private readonly _WishListService = inject(WishListService);
  private readonly _ToastrService = inject(ToastrService);

  productsList: Iprouducts[] = [];
  categoriLyst: Icatgories[] = [];
  wishlistIcone: string[] = [];

  //  close all subscribe
  closeAllproducts!: Subscription;
  cleanAddCart!: Subscription;
  cleanAddWishList!: Subscription;
  cleanRemoveWishlist!: Subscription;
  cleanCatagor!: Subscription;
  cleanRestar!: Subscription;
  cleanWishlist!: Subscription;
  textName: string = '';

  customOptionsMain: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,

    nav: false,
  };

  customOptionsCat: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
  addCart(id: string): void {
    this.cleanAddCart = this._CartService.addProductTOcart(id).subscribe({
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
          this.wishlistIcone = res.data;
          this._ToastrService.success(res.message, 'WhisList');
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

          this._ToastrService.warning(' Remove Form WhisList');
        },
      });
  }

  restartRespons(): void {
    this.closeAllproducts = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.productsList = res.data;
      },
    });
  }

  ngOnInit(): void {
    this.closeAllproducts = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        console.log('prodouct', res.data);
        this.productsList = res.data;
      },
    });

    this.cleanCatagor = this._CategoriService.getCategori().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoriLyst = res.data;
      },
    });

    this.cleanWishlist = this._WishListService.getALlWishlist().subscribe({
      next: (res) => {
        this._WishListService.wishlistIcone = res.data;
        this.wishlistIcone = res.data.map((item: any) => item._id);
      },
    });
  }

  ngOnDestroy(): void {
    this.closeAllproducts?.unsubscribe();
    this.cleanAddWishList?.unsubscribe();
    this.cleanRemoveWishlist?.unsubscribe();
    this.cleanRestar?.unsubscribe();
    this.cleanCatagor?.unsubscribe();
    this.cleanWishlist?.unsubscribe();
  }
}
