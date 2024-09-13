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
  pets: Pet[] = [];
  portes: string[] = [];
  petService = inject(PetService);

  constructor() {
    addIcons({ filter });
  }

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
      this.petService.getPets().subscribe((dado) => {
        this.pets = dado;
      });
    }

  }

  ngOnInit() {
    this.petService.getPets().subscribe((dado) => {
      this.pets = dado;
    });
  }
}
