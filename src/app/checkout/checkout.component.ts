import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BillingService } from '../service/billing.service';
import { Router } from '@angular/router';
import { BillingAddress } from '../models/billing';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  addressform: boolean = false;
  billing: Observable<BillingAddress[]>;
  form: FormGroup;
  websiteList: any = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Other' }
  ];

  constructor(private BillingAddressService: BillingService,private formBuilder: FormBuilder,private router: Router) {
    this.form = this.formBuilder.group({
   //   website: this.formBuilder.array([], [Validators.required]),
      Address: ['', Validators.required],
      FlatNo: ['', Validators.required],
      Landmark: ['', Validators.required],
     Type:['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    debugger;
     this.BillingAddressService.getBillingAddressList().subscribe(res=>this.billing=res);;
    debugger;
     console.log(this.billing);
 
  }
  CreateOrder(id){
    console.log("orderid="+id);
  }
  onCheckboxChange(e) {
    const website: FormArray = this.form.get('website') as FormArray;
  
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
    }
  }
  AddNewAddress()
  {
    this.addressform=true;
  }
  submit(){
    debugger;
    console.log(this.form.value);
    var abc = JSON.parse(localStorage.getItem('currentUser')).jwttoken;
    const obj = {
      Address: this.form.value.Address,
      FlatNo: this.form.value.FlatNo,
      Landmark:this.form.value.Landmark,
      Type:this.form.value.Type,
      UnitId:1
    };

    this.BillingAddressService.AddBillingAddressNode(obj).subscribe(result => {
      this.router.navigate(['/home']);  
    });
  }
}
