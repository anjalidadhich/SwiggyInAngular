import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ProductForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.ProductForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 // convenience getter for easy access to form fields
 get f() { return this.ProductForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.ProductForm.invalid) {
         return;
     }

     this.loading = true;
     const obj = {
      username: this.f.username.value,
      password: this.f.password.value
     
    };
    // this.authenticationService.login(obj).subscribe(result => {
    //   debugger;
    //  // var token=result.token;
    //  var a=result
    //   if (result) {
    //  // store user details and jwt token in local storage to keep user logged in between page refreshes
    //    localStorage.setItem('currentUser', JSON.stringify(result));
    //  // var abc = JSON.parse(localStorage.getItem('currentUser')).token;  // change by anjali for map node.js api
    //   } 
    //   var abc = JSON.parse(localStorage.getItem('currentUser')).jwttoken;
           
    //   this.router.navigate(['home']);  
    // });
   
 }
 logout()
 {
  localStorage.setItem('currentUser', ''); 
  this.router.navigate(['login']); 
 }
}