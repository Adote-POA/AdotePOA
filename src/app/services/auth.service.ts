import { inject, Injectable, signal  } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { signInWithEmailAndPassword, updateProfile,createUserWithEmailAndPassword } from 'firebase/auth';
import { Observable, from } from 'rxjs';
import { login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth)
  currentUserSig = signal<UserInterface | null | undefined>(undefined)

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth,
      email,
      password,
    ).then(() => { });
    return from(promise);
  }
}
import { UserInterface } from '../user.interface';





