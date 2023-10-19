import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
  ) { }

  
  async register({ email, password }: any) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async login({ email, password }: any) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

    // Verifica si el usuario está autenticado
    isAuthenticated(): boolean {
      return !!this.auth.currentUser; // Comprueba si hay un usuario autenticado
    }

  
}
