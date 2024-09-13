import './polyfills.server.mjs';
import{c as j,d as H}from"./chunk-ISRPO73K.mjs";import{a as u}from"./chunk-RX66ZHJB.mjs";import{$ as h,Db as d,Eb as b,Fb as I,Kb as T,La as m,Lc as k,Pa as r,Qb as F,R as g,Rb as $,W as v,X as x,db as y,fb as p,ja as _,jb as C,ka as B,lb as S,mb as M,nb as o,ob as a,pb as c,sb as w,ub as E,vb as f}from"./chunk-5QLZWUTQ.mjs";import"./chunk-VVCT4QZE.mjs";var U=(()=>{let e=class e{constructor(t){this._HttpClient=t}getAllBrands(){return this._HttpClient.get(`${u.baseUrl}/api/v1/brands`)}getSpecificBrands(t){return this._HttpClient.get(`${u.baseUrl}/api/v1/brands/${t}`)}};e.\u0275fac=function(n){return new(n||e)(v(k))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var D=(i,e)=>e._id;function O(i,e){}function V(i,e){if(i&1){let l=w();o(0,"div",14),E("click",function(){let n=_(l).$implicit,s=f();return B(s.getSpecificBrands(n._id))}),c(1,"img",15),o(2,"p",16),d(3),a(),y(4,O,0,0),a()}if(i&2){let l=e.$implicit,t=f();r(),p("src",l.image,m)("alt",l.name),r(2),b(l.name),r(),C(4,t.modalMy==!0?4:-1)}}var Q=(()=>{let e=class e{constructor(){this._BrandsService=x(U),this.allBrands=[],this.specificBrands={},this.modalMy=!0}ngOnInit(){this._BrandsService.getAllBrands().subscribe({next:t=>{console.log(t),this.allBrands=t.data}})}getSpecificBrands(t){this._BrandsService.getSpecificBrands(t).subscribe({next:n=>{console.log(n.data),this.specificBrands=n.data}})}ngOnDestroy(){this.cleanBrands?.unsubscribe(),this.cleanspecific?.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-brands"]],standalone:!0,features:[T],decls:19,vars:6,consts:[[1,"text-center","bg-light-main","container"],[1,"h4","text-main"],[1,"row","g-3","mt-3","my-2"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"col-md-3","product","p-1"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],["width","300px","height","300px",3,"src","alt"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"col-md-3","product","p-1",3,"click"],[1,"w-100",3,"src","alt"],[1,"p-3"]],template:function(n,s){n&1&&(o(0,"section",0)(1,"h2",1),d(2),F(3,"translate"),a(),o(4,"div",2),S(5,V,5,4,"div",3,D),a(),o(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"h1",8),d(12),a(),c(13,"button",9),a(),o(14,"div",10),c(15,"img",11),a(),o(16,"div",12)(17,"button",13),d(18," Close "),a()()()()()()),n&2&&(r(2),b($(3,4,"brands.All Brands:")),r(3),M(s.allBrands),r(7),I(" < ",s.specificBrands.name," > "),r(3),p("src",s.specificBrands.image,m)("alt",s.specificBrands.name))},dependencies:[H,j],styles:["*[_ngcontent-%COMP%]{margin-top:10px}"]});let i=e;return i})();export{Q as BrandsComponent};
