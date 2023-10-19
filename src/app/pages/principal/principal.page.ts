import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Auth, signOut } from "firebase/auth"; // Añade "Auth" a la importación
import { AlertController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// Importa tu componente del widget de clima
import { ClimaWidgetComponent } from '../clima-widget/clima-widget.component'; // Asegúrate de que la ruta sea correcta


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  segment: string = 'principal'; //valor inicial
  displayName: string = ''; // Declaración de la propiedad displayName

  constructor(private navCtrl: NavController, private alertController: AlertController) { 
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.displayName = uid;
      }
    });
  }

  ngOnInit() {
  }


  vehicle(){
    this.navCtrl.navigateRoot('/vehiculo');
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Cerrar Sesión',
          handler: () => {
            this.logout(); // Llama a la función de cierre de sesión si el usuario confirma.
          },
        },
      ],
    });
  
    await alert.present();
  }
    // Función para cerrar sesión
    async logout() {
      try {
        const auth = getAuth();
        await signOut(auth);
  
        // Redirigir a la página de inicio de sesión u otra página deseada
        this.navCtrl.navigateRoot('/login');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    }
}
