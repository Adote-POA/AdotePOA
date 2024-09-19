import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, closeOutline, pawOutline,logInOutline, personAddOutline, peopleOutline, arrowBackOutline, logoWhatsapp, logoFacebook, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: '', icon: 'home-outline' },
    { title: 'Cadastrar Animal', url: '/cadastrar-animal', icon: 'paw-outline' },
    { title: 'Login', url: '/login', icon: 'log-in-outline' },
    { title: 'Seja Voluntário', url: '/seja-voluntario', icon: 'person-add-outline' },
    { title: 'Sobre Nós', url: '/sobre-nos', icon: 'people-outline' },
  ];
  constructor() {
    addIcons({closeOutline});
  }
}
