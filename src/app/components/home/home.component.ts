import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSearchbar, IonButton, IonIcon, IonFab, IonFabButton, IonModal, IonCheckbox } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CardHomeComponent } from "../card-home/card-home.component";
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { addIcons } from 'ionicons';
import { filter } from 'ionicons/icons';
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonCheckbox, IonModal, IonFabButton, IonFab, IonIcon, IonButton, IonSearchbar, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, CardHomeComponent],
})

export class HomeComponent implements OnInit {
  // VARIAVÉIS DA CLASSE HOME
  pets: Pet[] = [];
  portes: string[] = [];
  petService = inject(PetService);
  // CONSTRUTOR DA CLASSE HOME, ONDE PASSO APENAS O ÍCONE DO FILTRO
  constructor() {
    addIcons({ filter });
  }
  //MÉTODO QUE ATUALIZA A LISTA DE PORTES E FILTRA OS PETS
  updatePortes(event: CheckboxChangeEventDetail<any>) {
    if (event.checked) {
      this.portes.push(event.value);
    } else {
      this.portes = this.portes.filter(porte => porte != event.value);
    }
    if (this.portes.length > 0) {
      this.petService.getPetsByPorte(this.portes).then((dado) => {
        this.pets = dado;
      })
    } else {
      this.petService.getPets().then((dado) => {
        this.pets = dado;
      });
    }

  }
  //CHAMA O SERVICE PARA BUSCAR OS PETS
  ngOnInit() {
    this.petService.getPets().then((dado) => {
      this.pets = dado;
    });
  }
}
