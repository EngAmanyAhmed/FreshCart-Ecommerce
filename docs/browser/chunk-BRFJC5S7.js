import{a as e}from"./chunk-D5JVNGYT.js";import{U as c,_ as o,i as n,zc as p}from"./chunk-47RP3SOD.js";var C=(()=>{let t=class t{constructor(){this._HttpClient=o(p),this.CartNumber=new n(0)}addProductTOcart(r){return this._HttpClient.post(`${e.baseUrl}/api/v1/cart`,{productId:r})}getSpecificProductCart(){return this._HttpClient.get(`${e.baseUrl}/api/v1/cart`)}removeSpecificCart(r){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/${r}`)}updateCart(r,a){return this._HttpClient.put(`${e.baseUrl}/api/v1/cart/${r}`,{count:a})}clearCart(){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart`)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{C as a};
