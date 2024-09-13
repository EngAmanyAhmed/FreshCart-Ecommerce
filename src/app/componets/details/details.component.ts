import { Iprouducts } from './../../core/interfaces/iprouducts';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../core/services/products.service';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule,CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

private readonly _ActivatedRoute=inject(ActivatedRoute)
private readonly _ProductsService=inject(ProductsService)
private readonly _CartService=inject(CartService)
private readonly _ToastrService=inject(ToastrService)

customOptionspru: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: false
}


addCart(id:string):void{
  this._CartService.addProductTOcart(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success(res.message,"Fresh Cart")
      this._CartService.CartNumber.next(res.numOfCartItems)

      
    },
   
  })
}
// idProud !:string
detailsProducat:Iprouducts={}as Iprouducts

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        console.log(res.get('id'));
       let idProud = res.get('id')


       this._ProductsService.getSpecificProducts(idProud).subscribe({
        next:(res)=>{
          console.log(res.data);
          this.detailsProducat = res.data
          
        },
        error:(err)=>{
          console.log(err);
          
        }
       })

        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
      
  }

}
