import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from "ionicons";
import { logoFacebook, logoInstagram, logoWhatsapp } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss'],
  imports: [IonIcon, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class SobreNosComponent implements OnInit {

  constructor() {
    // Registra os ícones específicos para uso no template
    addIcons({ logoWhatsapp, logoFacebook, logoInstagram });
  }

  ngOnInit() { }

}
