import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonInput, IonButton, IonInputPasswordToggle, NavController } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { login } from 'src/app/models/login';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, IonButton, IonInput, HeaderComponent, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonInputPasswordToggle, ReactiveFormsModule],
})

export class LoginComponent implements OnInit{
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService  = inject(AuthService);


   constructor() {
    addIcons({});
  }

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],    
    password: ['', Validators.required],
  })

  errorMessage: string | null = null;


  onsubmit():void{
    console.log("login");
     const rawForm = this.form.getRawValue();
     this.authService
       .login(rawForm.email, rawForm.password)
       .subscribe({
         next: () => {
           this.router.navigateByUrl('/');
         }
      })
      
  }

  ngOnInit() {
  console.log("login");
  }

}
