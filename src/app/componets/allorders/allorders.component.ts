import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AddressService } from '../../core/services/address.service';
import { Iallorders } from '../../core/interfaces/iallorders';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, DatePipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss',
})
export class AllordersComponent implements OnInit, OnDestroy {
  private readonly _AddressService = inject(AddressService);
  cartAllorders: Iallorders[] = [];
  idUser!: any;

  cleanUesrOrders!: Subscription;
  ngOnInit(): void {
    let token = `${localStorage.getItem('userName')}`;
    this.idUser = jwtDecode(token);
    console.log(this.idUser.id);

    this.cleanUesrOrders = this._AddressService
      .getUserOrders(this.idUser.id)
      .subscribe({
        next: (res) => {
          console.log('allOrders', res);
          this.cartAllorders = res;
        },
      });
  }

  ngOnDestroy(): void {
    this.cleanUesrOrders?.unsubscribe();
  }
}
