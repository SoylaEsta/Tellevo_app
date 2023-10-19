import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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
    private router : Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  get email (){
    return this.credentials.get('email');
  }

  get password (){
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    })
  }

  async register () {
    const user = await this.authService.register(this.credentials.value);

    if (user){
      console.log("OK");
      await this.presentConfirmation();
    }else{
      console.log("NOT OK");
    }
  }



  passwordRecover(){
    this.router.navigate(['/password-recover']);
  }
  
  async login() {
    if (this.authService.isAuthenticated()) {
      // El usuario está autenticado, realiza la lógica de inicio de sesión
      const user = await this.authService.login(this.credentials.value);
      if (user) {
        console.log("OK");
        this.presentLoader();
      } else {
        console.log("NOT OK");
      }
    } else {
      // El usuario no está autenticado, muestra un mensaje de error o realiza una acción apropiada
      console.log("Usuario no autenticado");
    }
  }


 async presentConfirmation() {
  const alert = await this.alertController.create({
    header: 'Registro exitoso',
    message: 'Tu registro se ha completado correctamente.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.router.navigate(['/principal']);
        }
      }
    ]
  });

  await alert.present();
}

 //Loader del login
 async presentLoader() {
  const loading = await this.loadingController.create({
    message: 'Iniciando sesión...', 
    duration: 2000
  });

  await loading.present();

  loading.onDidDismiss().then(() => {
      this.router.navigate(['/principal']);
    });
  }
}