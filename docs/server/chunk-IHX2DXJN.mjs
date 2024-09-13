import './polyfills.server.mjs';
import{a as Q,b as ee}from"./chunk-U4RSD6IF.mjs";import{a as X}from"./chunk-WYALV7HD.mjs";import{a as G}from"./chunk-EXQJSMFY.mjs";import{a as Y,b as q,c as J,d as K}from"./chunk-MA2TI27V.mjs";import{a as Z}from"./chunk-FJNE773W.mjs";import"./chunk-GTSSCL6B.mjs";import{a as N,c as V,g as R,n as j}from"./chunk-JIRHQU3V.mjs";import{a as U}from"./chunk-ESRHXAQ4.mjs";import{c as $,d as z}from"./chunk-ISRPO73K.mjs";import"./chunk-RX66ZHJB.mjs";import{m as B}from"./chunk-SYNIBZ6Z.mjs";import{$ as P,Ac as O,Cc as D,Db as m,Eb as d,Gb as H,Hb as I,Ib as M,Kb as E,La as W,Lb as k,Mb as A,Pa as r,Qb as u,Rb as b,Sb as y,X as _,db as h,fb as g,ja as f,jb as L,ka as v,kb as F,lb as x,mb as C,nb as a,ob as s,pb as c,sb as S,ub as w,vb as p}from"./chunk-5QLZWUTQ.mjs";import"./chunk-VVCT4QZE.mjs";var te=(e,n)=>n._id,ie=e=>["/details",e],ne=()=>[1,2,3,4,5];function oe(e,n){e&1&&c(0,"img",13)}function ae(e,n){e&1&&c(0,"img",14)}function re(e,n){e&1&&c(0,"img",15)}function se(e,n){e&1&&c(0,"img",16)}function le(e,n){e&1&&c(0,"img",17)}function ce(e,n){e&1&&c(0,"img",18)}function me(e,n){if(e&1&&(a(0,"div"),c(1,"img",19),a(2,"h3",20),m(3),s()()),e&2){let o=p().$implicit;r(),g("src",o.image,W)("alt",o.name),r(2),d(o.name)}}function pe(e,n){e&1&&h(0,me,4,3,"ng-template",3)}function de(e,n){e&1&&(a(0,"span"),c(1,"i",33),s())}function ue(e,n){e&1&&c(0,"i",28)}function _e(e,n){if(e&1){let o=S();a(0,"span",34),w("click",function(){f(o);let i=p().$implicit,l=p();return v(l.addProducttoWishlist(i.id))}),c(1,"i",35),s()}}function ge(e,n){if(e&1){let o=S();a(0,"span",34),w("click",function(){f(o);let i=p().$implicit,l=p();return v(l.removeWihtWishlist(i.id))}),c(1,"i",36),s()}}function he(e,n){if(e&1){let o=S();a(0,"div",12)(1,"div",21)(2,"div",22),c(3,"img",23),a(4,"h3",24),m(5),s(),a(6,"p",25),m(7),u(8,"termtext"),u(9,"titlecase"),s(),a(10,"div",26)(11,"span"),m(12),u(13,"currency"),s(),a(14,"div",27),x(15,de,2,0,"span",null,F),h(17,ue,1,0,"i",28),a(18,"span",29),m(19),s()()()(),a(20,"div",30)(21,"button",31),w("click",function(){let i=f(o).$implicit,l=p();return v(l.addCart(i.id))}),m(22," Add cart "),s(),h(23,_e,2,0,"span",32)(24,ge,2,0),s()()()}if(e&2){let o=n.$implicit,t=p();r(2),g("routerLink",A(17,ie,o._id)),r(),g("src",o.imageCover,W)("alt",o.title),r(2),d(o.category.name),r(2),d(b(9,12,y(8,9,o.title,2))),r(5),d(y(13,14,o.price,"GBP")),r(3),C(k(19,ne).slice(0,o.ratingsAverage)),r(2),L(17,o.ratingsAverage%1!==0?17:-1),r(2),d(o.ratingsAverage),r(4),L(23,t.wishlistIcone.includes(o.id)?24:23)}}var Be=(()=>{let n=class n{constructor(){this._ProductsService=_(Y),this._CategoriService=_(G),this._CartService=_(U),this._WishListService=_(X),this._ToastrService=_(Z),this.productsList=[],this.categoriLyst=[],this.wishlistIcone=[],this.textName="",this.customOptionsMain={loop:!0,rtl:!0,mouseDrag:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!1},this.customOptionsCat={loop:!0,rtl:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:1500,autoplayHoverPause:!0,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:4},940:{items:6}},nav:!1}}addCart(t){this.cleanAddCart=this._CartService.addProductTOcart(t).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message,"Fresh Cart"),this._CartService.CartNumber.next(i.numOfCartItems)}})}addProducttoWishlist(t){this.cleanAddWishList=this._WishListService.getProductWishlist(t).subscribe({next:i=>{console.log(i),this.wishlistIcone=i.data,this._ToastrService.success(i.message,"WhisList")}})}removeWihtWishlist(t){this.cleanRemoveWishlist=this._WishListService.removeFromWishlist(t).subscribe({next:i=>{console.log(i),this._WishListService.wishlistIcone=i.data,this.wishlistIcone=this._WishListService.wishlistIcone,this._ToastrService.warning(" Remove Form WhisList")}})}restartRespons(){this.closeAllproducts=this._ProductsService.getAllProducts().subscribe({next:t=>{this.productsList=t.data}})}ngOnInit(){this.closeAllproducts=this._ProductsService.getAllProducts().subscribe({next:t=>{console.log("prodouct",t.data),this.productsList=t.data}}),this.cleanCatagor=this._CategoriService.getCategori().subscribe({next:t=>{console.log(t.data),this.categoriLyst=t.data}}),this.cleanWishlist=this._WishListService.getALlWishlist().subscribe({next:t=>{this._WishListService.wishlistIcone=t.data,this.wishlistIcone=t.data.map(i=>i._id)}})}ngOnDestroy(){this.closeAllproducts?.unsubscribe(),this.cleanAddWishList?.unsubscribe(),this.cleanRemoveWishlist?.unsubscribe(),this.cleanRestar?.unsubscribe(),this.cleanCatagor?.unsubscribe(),this.cleanWishlist?.unsubscribe()}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=P({type:n,selectors:[["app-home"]],standalone:!0,features:[E],decls:29,vars:12,consts:[[1,"row","g-0"],[1,"col-md-8"],[3,"options"],["carouselSlide",""],[1,"col-md-4"],["src","./assets/images/grocery-banner.png","height","150px","alt","",1,"w-100"],["src","./assets/images/grocery-banner-2.jpeg","height","150px","alt","",1,"w-100"],[1,"my-2"],[1,"text-main"],[1,"container-fluid"],["type","search","placeholder","Search By Name ......",1,"w-50","mx-auto","form-control","my-2",3,"ngModelChange","ngModel"],[1,"row","g-3","mt-3"],[1,"col-md-2"],["src","./assets/images/img1.avif","height","300px","alt","",1,"w-100"],["src","./assets/images/img2.avif","height","300px","alt","",1,"w-100"],["src","./assets/images/img3.avif","height","300px","alt","",1,"w-100"],["src","./assets/images/img4.avif","height","300px","alt","",1,"w-100"],["src","./assets/images/img5.avif","height","300px","alt","",1,"w-100"],["src","./assets/images/img6.avif","height","300px","alt","",1,"w-100"],["height","250px",1,"w-100",3,"src","alt"],[1,"h6","text-main"],[1,"product","p-1"],[1,"prt-1",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"small","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"justify-content-between","align-items-center","small"],[1,"fa-regular","fa-star-half-stroke","rating-color"],[1,"text-muted"],[1,"d-flex","justify-content-between","align-items-center","px-2"],[1,"btn-main","w-75","rounded-4",3,"click"],["id","button",1,"cr"],[1,"fa-solid","fa-star","rating-color"],["id","button",1,"cr",3,"click"],[1,"fa-solid","fa-heart","fa-2xl",2,"color","#0dcaf0"],[1,"fa-solid","fa-heart","fa-beat-fade","fa-2xl",2,"color","#ea3434"]],template:function(i,l){i&1&&(a(0,"section")(1,"div",0)(2,"div",1)(3,"owl-carousel-o",2),h(4,oe,1,0,"ng-template",3)(5,ae,1,0,"ng-template",3)(6,re,1,0,"ng-template",3)(7,se,1,0,"ng-template",3)(8,le,1,0,"ng-template",3)(9,ce,1,0,"ng-template",3),s()(),a(10,"div",4),c(11,"img",5)(12,"img",6),s()()(),a(13,"section",7)(14,"h2",8),m(15),u(16,"translate"),s(),a(17,"owl-carousel-o",2),x(18,pe,1,0,null,3,te),s()(),a(20,"section",9)(21,"h2",8),m(22),u(23,"translate"),s(),a(24,"input",10),M("ngModelChange",function(T){return I(l.textName,T)||(l.textName=T),T}),s(),a(25,"div",11),x(26,he,25,20,"div",12,te),u(28,"search"),s()()),i&2&&(r(3),g("options",l.customOptionsMain),r(12),d(b(16,5,"home.popular Categorr")),r(2),g("options",l.customOptionsCat),r(),C(l.categoriLyst),r(4),d(b(23,7,"home.popular product")),r(2),H("ngModel",l.textName),r(2),C(y(28,9,l.productsList.slice(28,40),l.textName)))},dependencies:[K,J,q,B,D,Q,O,ee,j,N,V,R,z,$],styles:[".product[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]{transform:translateY(120%);transition:all .7s}.product[_ngcontent-%COMP%]:hover   .btn-main[_ngcontent-%COMP%]{transform:translateY(0)}*[_ngcontent-%COMP%]{margin-top:5px}"]});let e=n;return e})();export{Be as HomeComponent};
