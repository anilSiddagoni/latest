import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees=[] as IEmployee[];
  employee={}as IEmployee;

  constructor() { 
    this.employees=[
      {empNumber:101, empName:'Anil', empSalary:15000},
      {empNumber:101, empName:'Anil', empSalary:15000},
       {empNumber:101, empName:'Anil', empSalary:15000},



    ]
  }

  ngOnInit(): void {
  }
  addEmployee(f:NgForm){
    this.employees.push(this.employee);
    alert('Employee Added');
    this.employee={}as IEmployee;
  }

}
