import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from "../service/product.service";
import { Observable } from 'rxjs';
import { FormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  sub: any;
  id: number;
  listProduct:Product[]=[];
  product= new Product();
  AlistProduct:Product[]=[];
  Aproduct= new Product();
  demos: Observable<Product[]>;
 
  amount: string ;
  // mainForm: FormGroup;

  constructor(private ProductService: ProductService, private router: Router,private _Activatedroute:ActivatedRoute) {
   
   }

  ngOnInit(): void {
 
  this.reload();
  debugger;
  var total=localStorage.getItem('OrderAmount');
  if(total!=undefined){
    document.getElementById("ordertotal").innerHTML = localStorage.getItem('OrderAmount');
    document.getElementById("subtotal").innerHTML = localStorage.getItem('OrderAmount');
  }
 
  }
 
  reload()
  {
    // this.sub=this._Activatedroute.paramMap.subscribe(params => { 
    //   debugger;
    //  console.log(params);
     // });
      this.demos = JSON.parse(localStorage.getItem('AddToCart'));
      console.log(this.product);        
 
  }

  QuantityChange(price,productId,index)
  {
    debugger;
    var a="qty"+(productId.toString());
    var p="amount"+(productId.toString());
    var qty= ((document.getElementById(a) as HTMLInputElement).value);
    var amount=+qty * price;
    document.getElementById(p).innerHTML = "£"+amount.toString();
    document.getElementById(p).innerText = "£"+amount.toString();
    this.TotalAmount();
    console.log(productId,index);
    
  }
 
  delete(id){
    debugger;
    this.listProduct = JSON.parse(localStorage.getItem('AddToCart'));
    let index = this.listProduct.findIndex(d => d.ProductId === id); //find index in your array
    this.listProduct.splice(index, 1);//remove element from array   
   // this.listProduct = this.listProduct.filter(item => item.ProductId !== id);
    if(this.listProduct.length!=0)
    {
      for (var i = 0; i < this.listProduct.length; i++) {
        var a="qty"+(this.listProduct[i].ProductId.toString());
          var b="amount"+(this.listProduct[i].ProductId.toString());
          var c="price"+(this.listProduct[i].ProductId.toString());
          let index = this.listProduct.findIndex(d => d.ProductId === this.listProduct[i].ProductId);
          this.listProduct[i].Price=parseInt(document.getElementById(c).innerText.substr(1));
          this.listProduct[i].Qty=((document.getElementById(a) as HTMLInputElement).value);
          this.listProduct[i].Amount=parseInt(document.getElementById(b).innerText.substr(1));        
       
    }   
   
  }
  else
  {
    this.listProduct=[];
  }
    localStorage.setItem('AddToCart', JSON.stringify(this.listProduct));
  
    this.TotalAmount()
    this.reload();
  }
  
  TotalAmount(){
    this.listProduct = JSON.parse(localStorage.getItem('AddToCart'));
    let count=0;
    for(let i=0;i<this.listProduct.length;i++)
    {
      var a="amount"+(this.listProduct[i].ProductId.toString());
      var   num1= document.getElementById(a).innerText.substr(1);
      count=count + (+num1);
    }
    debugger;
    document.getElementById("subtotal").innerHTML = "£"+count.toString();
    document.getElementById("ordertotal").innerHTML = "£"+count.toString();
    var total= document.getElementById('ordertotal').innerText;
    localStorage.setItem('OrderAmount', total);

    for (var i = 0; i < this.listProduct.length; i++) {
      var a="qty"+(this.listProduct[i].ProductId.toString());
        var b="amount"+(this.listProduct[i].ProductId.toString());
        var c="price"+(this.listProduct[i].ProductId.toString());
        let index = this.listProduct.findIndex(d => d.ProductId === this.listProduct[i].ProductId);
        this.listProduct[i].Price=parseInt(document.getElementById(c).innerText.substr(1));
        this.listProduct[i].Qty=((document.getElementById(a) as HTMLInputElement).value);
        this.listProduct[i].Amount=parseInt(document.getElementById(b).innerText.substr(1));
      
  }
  localStorage.setItem('AddToCart', JSON.stringify(this.listProduct));
  }

}
