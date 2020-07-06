import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../service/product.service";
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  demos: Observable<Product[]>;
  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.reload();
  }
  reload()
  {
    
      this.demos = JSON.parse(localStorage.getItem('AddToCart'));
      
 
  }
}
