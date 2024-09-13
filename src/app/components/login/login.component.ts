import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonInput, IonButton, IonInputPasswordToggle,NavController } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { HeaderComponent } from '../header/header.component';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonButton, IonInput, HeaderComponent, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonInputPasswordToggle]
})
export class LoginComponent implements OnInit {

  constructor() {
    addIcons({});
  }

 



  ngOnInit() {
  }

}
