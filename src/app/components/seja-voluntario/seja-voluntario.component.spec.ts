import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.component.html',
  styleUrls: ['./seja-voluntario.component.scss'],
  imports: [
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonContent,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    IonList,
  ],
})
export class SejaVoluntarioComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  
}