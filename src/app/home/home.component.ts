import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

import { ProductService } from "../service/product.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  demos: Observable<Product[]>;
  listProduct:Product[]=[];
  product= new Product();
  listAddedProduct:Product[]=[];
  addproduct= new Product();
  listAdd:Product[]=[];
  item: Observable<Object>;
  constructor(private ProductService: ProductService, private router: Router) { }
 
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    debugger;
     this.demos = this.ProductService.getProductList();
    debugger;
     console.log(this.demos);
 
  }


  AddToCart(ProductId){
    debugger;
  
    this.ProductService.getProductByID(ProductId).subscribe(
           data => {
        debugger;
        var abc = localStorage.getItem('AddToCart');
        let Sites;
        if(abc!=null)
        {
          this.listAddedProduct=JSON.parse(localStorage.getItem('AddToCart'));
         // this.listProduct=null;
         this.product.ProductId=ProductId;
         this.product.Name=data[0].Name;
         this.product.ImagePath=data[0].ImagePath;
         this.product.Price=data[0].Price;
         this.product.Qty="0";
         this.product.Amount=0;
         
          this.listAdd.push(this.product);
        
          let c =  this.listAdd.concat(this.listAddedProduct);
          console.log(c);
          this.listProduct=[];
          this.listAdd=[];//It will give issue
          this.listProduct=c;
          console.log(this.listProduct);
       
        }
        else{
          this.product.ProductId=ProductId;
          this.product.Name=data[0].Name;
          this.product.ImagePath=data[0].ImagePath;
          this.product.Price=data[0].Price;
          this.product.Qty="0";      
          this.product.Amount=0;
          
          this.listProduct.push(this.product);
        }
        localStorage.setItem('AddToCart', JSON.stringify(this.listProduct));
      
        
         console.log(this.listProduct);
      
        debugger;
      } 
    );




    // this.product.Name=this.item.Name;
    //    this.product.Price=10;
    //    this.product.ProductId=ProductId;
    //     this.listProduct.push(this.product);
    //     localStorage.setItem('AddToCart', JSON.stringify(this.listProduct));
    // console.log(ProductId);
  }




  // AddToCart(ProductId){
  //   debugger;
  
  //   this.ProductService.getProductByID(ProductId).subscribe(
  //          data => {
  //       debugger;
  //       var abc = localStorage.getItem('AddToCart');
  //       let Sites;
  //       if(abc!=null)
  //       {
  //         this.listAddedProduct=JSON.parse(localStorage.getItem('AddToCart'));
  //        // this.listProduct=null;
  //         this.product.Name=data[0].Name;
  //         this.product.Price=data[0].Price;
  //         this.product.ProductId=ProductId;
  //          this.listAdd.push(this.product);
        
  //         let c =  this.listAdd.concat(this.listAddedProduct);
  //         console.log(c);
  //         this.listProduct=null;
  //         this.listProduct=c;
  //         console.log(this.listProduct);
  //         //Sites = Object.assign(this.listProduct, this.listAddedProduct); 
  //        // this.results = this.results.concat(data.results);
  //         // for( let i=0;i<this.listAddedProduct.length;i++)
  //         //   {
  //         //   this.addproduct.Name=this.listAddedProduct[i].Name;
  //         //    this.addproduct.Price=this.listAddedProduct[i].Price;
  //         //    this.addproduct.ProductId=this.listAddedProduct[i].ProductId;
  //         //    this.listProduct.push(this.addproduct);
  //         //   }
  //        // this.results = this.results.concat(data.results);
  //       }
  //       else{
  //         this.product.Name=data[0].Name;
  //         this.product.Price=data[0].Price;
  //         this.product.ProductId=ProductId;
  //         this.listProduct.push(this.product);
  //       }
  //       localStorage.setItem('AddToCart', JSON.stringify(this.listProduct));
      
  //       // this.product.Name=data[0].Name;
  //       // this.product.Price=data[0].Price;
  //       // this.product.ProductId=ProductId;
  //       //  this.listProduct.push(this.product);
         
        
  //        console.log(this.listProduct);
  //     //  return this.user$ = data;
  //       debugger;
  //     } 
  //   );
  //   // this.product.Name=this.item.Name;
  //   //    this.product.Price=10;
  //   //    this.product.ProductId=ProductId;
  //   //     this.listProduct.push(this.product);
  //   //     localStorage.setItem('AddToCart', JSON.stringify(this.listProduct));
  //   // console.log(ProductId);
  // }
}
