import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from "ionicons";

@Component({
  standalone: true,
  selector: 'app-informacoes-pet',
  templateUrl: './informacoes-pet.component.html',
  styleUrls: ['./informacoes-pet.component.scss'],
  imports: [HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class InformacoesPetComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
