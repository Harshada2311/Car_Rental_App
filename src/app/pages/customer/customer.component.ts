import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, resource } from '@angular/core';
import { MasterServiceService } from '../../service/master-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [NgIf , FormsModule , ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnDestroy {

 isFormtoggleVisible: boolean = true;
  masterserv = inject(MasterServiceService)


  constructor(){
    this.masterserv.searchData.subscribe((res:any)=>{
      debugger;

    })
  }
http= inject(HttpClient)
custmobj: any=
  {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": "",
    //"status": "",
    
  }
  /*customerList: any[]=[];


  getAllCustomer(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((res:any)=>{
      this.customerList= res.data;
    })
  } we used to do like this but know we try used resource API link and instead of http we use fetch api*/

customerList=resource({
  loader:()=>{
    return fetch("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers")
    .then((result)=>result.json() as Promise<any>)
  }
})
onSave(){
  debugger;
 
  this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCustomer",this.custmobj).subscribe((res:any)=>{
    debugger;
    console.log(res.result)
    if (res.result) {
      alert('Data saved successfully');
      this.onReload();
    }
    else {
      alert(res.message);
    }
  })

}
onReload(){
  this.customerList.reload();
}

ngOnDestroy(): void {
  this.masterserv.searchData.next("")
}
OnformToggle(){
  this.isFormtoggleVisible=! this.isFormtoggleVisible

}

}
