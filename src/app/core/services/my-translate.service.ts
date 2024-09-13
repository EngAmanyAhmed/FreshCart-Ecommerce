import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  private readonly _TranslateService = inject(TranslateService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      let savedlang = localStorage.getItem('lang');
      this._TranslateService.setDefaultLang('en');
      this._TranslateService.use(savedlang!);
      this.changeDirection();
    }
  }
  changeDirection(): void {
    let savedlang = localStorage.getItem('lang');
    if (savedlang === 'en') {
      document.documentElement.dir = 'lte';
    } else if (savedlang === 'ar') {
      document.documentElement.dir = 'rtl';
    }
  }
  changelang(lang: string): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      localStorage.setItem('lang', lang);
      this._TranslateService.use(lang);
      this.changeDirection();
    }
  }
}
