import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from '../customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
  customer={} as ICustomer;
  customers= [] as ICustomer[];
  custFormGroup!: FormGroup;
  submitted=false;


  constructor(private _formBulider:FormBuilder) {
  
      this. custFormGroup = this._formBulider.group({
        custNumber:[null,Validators.required],
        custName:[null,Validators.required],
        custAmount:[null,Validators.required]
  
      })
    
   }

  ngOnInit(): void {
  }

  public get f(){
    return this.custFormGroup.controls;
  }
  addCustomer(custFg:FormGroup){
    this.submitted=true;
    if (custFg.invalid){
      return;
    }
    this.customer=custFg.value;
    this.customers.push(this.customer),
    alert("Customer Added"),
    this.customer={} as ICustomer;
    custFg.reset();
    this.submitted=false;
  }
    
  }


