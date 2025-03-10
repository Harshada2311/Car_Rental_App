import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterServiceService } from '../../service/master-service.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink , RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  masterserv= inject(MasterServiceService)
  
@ViewChild('serchtext')serchtext: ElementRef | any
  constructor(){
    this.masterserv.searchData.subscribe((res:any)=>{
      if(res=='')
      {
        this.serchtext.nativeElement['value']="";

      }
    })
  }
  onChange(event:any){
    debugger;
    this.masterserv.searchData.next(event.target.value)

  }

}
