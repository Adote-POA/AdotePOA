import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonInput, IonItem, IonBackButton, IonLabel, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.component.html',
  styleUrls: ['./seja-voluntario.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, IonCheckbox, IonButton, IonLabel, IonBackButton, IonItem, IonInput, IonList, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],

})
export class SejaVoluntarioComponent implements OnInit {
  httpClient = inject(HttpClient);
  router = inject(Router);
  isLoading: boolean = false;
  voluntaryForm = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() { }

  ngOnInit() { }

  // Método para enviar o email para a instituição com as infos do voluntário
  async onSubmit() {
    this.isLoading = true;
    this.httpClient.post('https://formsubmit.co/ajax/neisguilherme@gmail.com', {
      ...this.voluntaryForm.value,
      _subject: "Novo voluntário!"
    }).subscribe(() => {
      this.isLoading = false;
      this.voluntaryForm.reset();
      this.router.navigate(['']);
    });
  }
}

