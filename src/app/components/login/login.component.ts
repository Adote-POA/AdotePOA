import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonInput, IonButton, IonInputPasswordToggle, NavController } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, IonButton, IonInput, HeaderComponent, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonInputPasswordToggle, ReactiveFormsModule],
})

export class LoginComponent implements OnInit {
  //injeção de dependencias para interface
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);


  constructor() {
    addIcons({});
  }

  //criação de formulario utilizando FormBuilder
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  //armazena msg de erro
  errorMessage: string | null = null;

  //autentificação e direcionamento para home
  onsubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService
      .login(rawForm.email, rawForm.password)
      .subscribe({
        next: () => {
          this.form.reset();
          this.errorMessage = null;
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.errorMessage = "E-mail ou Senha inválidos!";
        }
      })
  }

  ngOnInit() {

  }

}