import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componets/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./componets/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'forgotPassword',
        loadComponent: () =>
          import('./componets/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./componets/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./componets/wish-list/wish-list.component').then(
            (m) => m.WishListComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./componets/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./componets/product/product.component').then(
            (m) => m.ProductComponent
          ),
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./componets/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./componets/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./componets/details/details.component').then(
            (m) => m.DetailsComponent
          ),
      },
      {
        path: 'address/:id',
        loadComponent: () =>
          import('./componets/address/address.component').then(
            (m) => m.AddressComponent
          ),
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./componets/allorders/allorders.component').then(
            (m) => m.AllordersComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./componets/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },
];
