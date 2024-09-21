import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, closeOutline, pawOutline, logInOutline, personAddOutline, peopleOutline, logOutOutline } from 'ionicons/icons';
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

export class AppComponent implements OnInit {
  //ATRIBUTOS DA CLASSE APP COMPONENT
  authService = inject(AuthService);
  _router = inject(Router);
  // ITENS DE MENU E SUAS ROTAS
  public appPages = [
    { title: 'Página Inicial', url: '', icon: 'home-outline', visible: () => true },
    { title: 'Cadastrar Animal', url: '/cadastrar-animal', icon: 'paw-outline', visible: () => this.authService.isAuthenticated() },
    { title: 'Login Administrativo', url: '/login', icon: 'log-in-outline', visible: () => !this.authService.isAuthenticated() },
    { title: 'Seja Voluntário', url: '/seja-voluntario', icon: 'person-add-outline', visible: () => true },
    { title: 'Sobre Nós', url: '/sobre-nos', icon: 'people-outline', visible: () => true },
    { title: 'Sair', icon: 'log-out-outline', action: () => { this.authService.logOut(); this._router.navigate(['']); }, visible: () => this.authService.isAuthenticated() },

  ];

  //monitora o estado de autentificação do usuário
  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!
        })
      } else {
        this.authService.currentUserSig.set(null);
      }
    });
  }
  // CONSTRUTOR DA CLASSE APP, ONDE PASSO OS ÍCONES DO MENUS
  constructor() {
    addIcons({ homeOutline, closeOutline, pawOutline, logInOutline, personAddOutline, peopleOutline, logOutOutline });
  }
}
