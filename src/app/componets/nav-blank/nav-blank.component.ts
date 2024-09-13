import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { MyTranslateService } from '../../core/services/my-translate.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss',
})
export class NavBlankComponent implements OnInit {
  readonly _AuthService = inject(AuthService);
  readonly _CartService = inject(CartService);
  private readonly _MyTranslateService = inject(MyTranslateService);
  readonly _TranslateService = inject(TranslateService);

  countNumber: number = 0;
  ngOnInit(): void {
    this._CartService.getSpecificProductCart().subscribe({
      next: (res) => {
        this._CartService.CartNumber.next(res.numOfCartItems);
      },
    });
    this._CartService.CartNumber.subscribe({
      next: (deta) => {
        this.countNumber = deta;
      },
    });
  }
  change(lang: string): void {
    this._MyTranslateService.changelang(lang);
  }
}
