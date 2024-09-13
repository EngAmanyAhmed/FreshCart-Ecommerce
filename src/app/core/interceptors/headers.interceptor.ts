import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { PLATFORM_ID, inject } from '@angular/core';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  let _PLATFORM_ID = inject(PLATFORM_ID);
  if (isPlatformBrowser(_PLATFORM_ID)) {
    if (localStorage.getItem('userName') !== null) {
      if (
        req.url.includes('cart') ||
        req.url.includes('wishlist') ||
        req.url.includes('orders')
      ) {
        req = req.clone({
          setHeaders: {
            token: localStorage.getItem('userName')!,
          },
        });
      }
    }
  }

  return next(req);
};
