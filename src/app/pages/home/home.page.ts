import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalContentComponent } from 'src/app/modal-content/modal-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router: Router, private modalController: ModalController) {}

  goToLogin() {
    this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
  }

  ionViewDidEnter() {
    this.mostrarModal();
  }
  

  async mostrarModal() {
    const modal = await this.modalController.create({
      component: ModalContentComponent,
      componentProps: {
        modalTitle: 'Título del Modal', // Puedes pasar cualquier dato que desees mostrar en el modal
      },
    });
  
    await modal.present();
  }

}
