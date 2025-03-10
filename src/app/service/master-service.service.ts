import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  searchData: Subject<string> = new Subject<string>
  constructor() { }


}
