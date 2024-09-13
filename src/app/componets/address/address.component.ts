import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../../core/services/address.service';
import { log } from 'console';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {
  private readonly _FormBuilder=inject(FormBuilder)
private readonly _ActivatedRoute=inject(ActivatedRoute)
private readonly _AddressService=inject(AddressService)

cartId:string|null=""
 shippingAddress:FormGroup=this._FormBuilder.group({
  details:[null,[Validators.required]],
  phone:[null,[Validators.required]],
  city:[null,[Validators.required]]
 })

 ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
     this.cartId = params.get('id')
    console.log( "id",this.cartId);
    

      }
     })
 }
 orderSubmit():void{
  console.log(this.shippingAddress.value);
  this._AddressService.checkOut(this.cartId!,this.shippingAddress.value).subscribe({
    next:(res)=>{
      console.log(res);
      if(res.status=='success'){
        window.open(res.session.url,'_self')
      }
    }
  })
  
 }


}
