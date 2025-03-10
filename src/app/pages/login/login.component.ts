import { Component, inject } from '@angular/core';
import { FormGroup ,FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

/*   userForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")

  }) we use reactiveForm initialization like this we can do like this also */

  userName: FormControl = new FormControl("");
  password: FormControl = new FormControl("");

  router = inject(Router);

  onLogin(){
    debugger;
    if(this.userName.value =="admin" && this.password.value =="1234")
    {
      console.log("loggedIn")
       this.router.navigateByUrl('/dashboard');
    }
    else{
      alert("invalid credentials")

    }
  }



}
