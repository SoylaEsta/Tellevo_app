import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
  }

  // Implementa la función de cierre de sesión (logout)
  async logout() {
    try {
      await this.afAuth.signOut(); // Cierra la sesión del usuario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
