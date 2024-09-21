import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon, IonFabButton, IonFab, IonAlert } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from "ionicons";
import { logoWhatsapp, locationOutline, trashOutline } from 'ionicons/icons';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-informacoes-pet',
  templateUrl: './informacoes-pet.component.html',
  styleUrls: ['./informacoes-pet.component.scss'],
  imports: [IonAlert, IonFab, IonFabButton, IonIcon, IonButton, CommonModule, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class InformacoesPetComponent implements OnInit {
  // ATRIBUTOS DA CLASSE INFORMAÇÕES PETS
  @Input() petId: string = '';
  @Input() pet!: Pet;
  petService = inject(PetService);
  authService = inject(AuthService);
  _router = inject(Router);

  // CONSTRUTOR DA CLASSA INFORMAÇÕES PET, ONDE PASSO ALGUNS ÍCONES PARA O ADD ICONS
  constructor() {
    addIcons({ logoWhatsapp, locationOutline, trashOutline });
  }
  // DECLARAÇÃO DA LISTA DE BOTÕES E SUAS AÇÕES QUE SERAM EXIBIDAS NO ALERT DE EXCLUSÃO
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
      },
    },
    {
      text: 'Excluir',
      role: 'confirm',
      handler: async () => {
        await this.petService.deletePet(this.petId);
        this._router.navigate([''])
      },
    },
  ];
  // BUSCANDO O PET POR ID QUE VEM DA ROTA
  ngOnInit() {
    this.petService.getPet(this.petId).then((dado) => {
      this.pet = dado;
    })
  }

}
