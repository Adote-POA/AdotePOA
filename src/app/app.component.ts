import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, closeOutline, pawOutline,logInOutline, personAddOutline, peopleOutline } from 'ionicons/icons';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
  template: `<router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit{
  authService = inject(AuthService);
  //http = inject(HttpClient);
  public appPages = [
    { title: 'Página Inicial', url: '', icon: 'home-outline' },
    { title: 'Cadastrar Animal', url: '/cadastrar-animal', icon: 'paw-outline' },
    { title: 'Login', url: '/login', icon: 'log-in-outline' },
    { title: 'Seja Voluntário', url: '/seja-voluntario', icon: 'person-add-outline' },
    { title: 'Sobre Nós', url: '/sobre-nos', icon: 'people-outline' },
    
  ];

  ngOnInit() : void{
    this.authService.user$.subscribe((user) =>{
      if(user){
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!
        })
      }else{
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig())
    });
  }

  logout(): void{
    console.log("logout");
  }

  constructor() {
    addIcons({closeOutline});
  }
}
