import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IonTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";

@Component({
  standalone: true,
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.scss'],
  imports:[HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent]
})
export class CadastrarAnimalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
