import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router
  ) { }

  get email (){
    return this.credentials.get('email');
  }

  get password (){
    return this.credentials.get('password');
  }

  get username (){
    return this.credentials.get('username');
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      username : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async register () {
    const user = await this.authService.register(this.credentials.value);

    if (user){
      console.log("OK");
    }else{
      console.log("NOT OK");
    }
  }

  
  async login () {
    const user = await this.authService.login(this.credentials.value);
    if (user){
      console.log("OK");
      this.router.navigate(['/home']);
    }else{
      console.log("NOT OK");
    }
  }
 // recover ()
}