import { inject, Injectable, signal  } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../user.interface';

@Injectable({
  providedIn: 'root'//injeção de AuthService no root
})

export class AuthService {
  firebaseAuth = inject(Auth)//autentificação do firebase no angular
  user$ = user(this.firebaseAuth)//monitora usuario atual logado
  currentUserSig = signal<UserInterface | null | undefined>(undefined)//cria um sinal reativo para armazenar o usuário atual

  //Metodo de login e senha 
  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth,
      email,
      password,
    ).then(() => { });
    return from(promise);
  }
}






