import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.loginForm.invalid) {
         return;
     }

     this.loading = true;
     const obj = {
      username: this.f.username.value,
      password: this.f.password.value
     
    };
    this.authenticationService.login(obj).subscribe(result => {
      debugger;
     // var token=result.token;
     var a=result
      if (result) {
     // store user details and jwt token in local storage to keep user logged in between page refreshes
       localStorage.setItem('currentUser', JSON.stringify(result));
     // var abc = JSON.parse(localStorage.getItem('currentUser')).token;  // change by anjali for map node.js api
      } 
      var abc = JSON.parse(localStorage.getItem('currentUser')).jwttoken;
           
      this.router.navigate(['home']);  
    });
   
 }
 logout()
 {
  localStorage.setItem('currentUser', ''); 
  this.router.navigate(['login']); 
 }
}