import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.page.html',
  styleUrls: ['./password-recover.page.scss'],
})
export class PasswordRecoverPage implements OnInit {

  resetForm: FormGroup; // Declaración de resetForm

  constructor(private formBuilder: FormBuilder, private router : Router,private toastController: ToastController) {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  

  ngOnInit() {
  }

  resetPassword() {
    const email = this.resetForm.value.email;
    const auth = getAuth();
  
    sendPasswordResetEmail(auth, email)
      .then(() => {
        this.presentToast('Correo de restablecimiento de contraseña enviado con éxito.');
        console.log('Correo de restablecimiento de contraseña enviado con éxito.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error al enviar el correo: ${errorCode} - ${errorMessage}`);
        this.presentErrorToast(`Error al enviar el correo: no se ha encontrado`);
      });
  }

  goBack(){
    this.router.navigate(['/login']);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duración del toast en milisegundos (3 segundos en este caso)
      position: 'top', // Puedes ajustar la posición (top, middle, bottom)
      color: 'success', // Color del toast
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duración del toast en milisegundos (3 segundos en este caso)
      position: 'top', // Puedes ajustar la posición (top, middle, bottom)
      color: 'danger', // Color rojo para indicar un error
    });
    toast.present();
  }
  
  

}
