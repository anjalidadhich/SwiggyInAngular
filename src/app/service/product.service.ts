import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private baseUrl = '/api/demos';
  constructor(private http: HttpClient) { }
employee= new Product();

getProductList(): Observable<any> {
  debugger;

  
//// this code use for nodejs api mapping
var t=JSON.parse(localStorage.getItem('currentUser')).jwttoken;

var headers_object = new HttpHeaders();
  headers_object.append('Content-Type', 'application/json');
  headers_object.append("x-access-token", t);

  const httpOptions = {
    headers: {"x-access-token": t}
  };
return this.http.get('http://localhost:3000/customer/product',httpOptions);

}
  getProductByID(id: number): Observable<Object> {
 debugger;
    var t=JSON.parse(localStorage.getItem('currentUser')).jwttoken;//`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1ODE1ODAxMDcsImV4cCI6MTU4MjE4NDkwNywiaWF0IjoxNTgxNTgwMTA3fQ.xk1hldlRD4l9q-9h5DLnaH-NzVKq1Ezx0sB2LAcHY1g`;
 
    var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append("x-access-token", t);
    
        const httpOptions = {
          headers: {"x-access-token": t}
        };
    return this.http.get(`http://localhost:3000/customer/product/${id}`,httpOptions);
  }

//   createDemoNode(employee: Object): Observable<Object> {
//     debugger;
//     //use for node.js
//     var t=JSON.parse(localStorage.getItem('currentUser')).jwttoken;//`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1ODE1ODAxMDcsImV4cCI6MTU4MjE4NDkwNywiaWF0IjoxNTgxNTgwMTA3fQ.xk1hldlRD4l9q-9h5DLnaH-NzVKq1Ezx0sB2LAcHY1g`;
 
// var headers_object = new HttpHeaders();
//     headers_object.append('Content-Type', 'application/json');
//     headers_object.append("x-access-token", t);

//     const httpOptions = {
//       headers: {"x-access-token": t}
//     };
//     //------------
//     return this.http.post('http://localhost:3000/customer/demo', employee,httpOptions);
//   }


  

  
  
}
