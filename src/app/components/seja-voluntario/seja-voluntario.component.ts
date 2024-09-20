import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonInput, IonItem, IonBackButton, IonLabel, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from "ionicons";

@Component({
  standalone: true,
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.component.html',
  styleUrls: ['./seja-voluntario.component.scss'],
  imports: [IonCheckbox, IonButton, IonLabel, IonBackButton, IonItem, IonInput, IonList, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],

})
export class SejaVoluntarioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

