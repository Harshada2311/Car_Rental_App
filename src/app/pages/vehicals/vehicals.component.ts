import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { async, map, Observable } from 'rxjs';
import { MasterServiceService } from '../../service/master-service.service';

@Component({
  selector: 'app-vehicals',
  imports: [AsyncPipe],
  templateUrl: './vehicals.component.html',
  styleUrl: './vehicals.component.css'
})
export class VehicalsComponent implements OnDestroy {
  http=inject(HttpClient)
  masterserv= inject(MasterServiceService)

  
carList$: Observable<any[]> = new Observable<any[]>

  apiurl="https://freeapi.miniprojectideas.com/api/CarRentalApp/"
  vehicalsFormData = signal({

      carId: 0,
      brand: "",
      model: "",
      year: 0,
      Color: "",
      dailyRate: 0,
      carImage: "",
      regNo: ""
    
  })
  updateForm(key:string, event:any){
    debugger;
    this.vehicalsFormData.update((data:any)=>({...data,[key]:event.target.value}))

  }
  constructor(){
    this.masterserv.searchData.subscribe((res:any)=>{
      debugger;
    })
    this.carList$= this.http.get<any[]>(`${this.apiurl}GetCars`).pipe(
      map((result:any)=>{
        return result.data

      })
    )

  }
  
  
  onSavecar(){
    this.http.post(`${this.apiurl}CreateNewCar`,this.vehicalsFormData()).subscribe((res:any)=>{
      if(res.result)
      {
        alert("vehical added sucessfully")
      }
      else{
        alert(res.message)
      }

    })
    
  }
 ngOnDestroy(): void {
   this.masterserv.searchData.next("")
 }


}
