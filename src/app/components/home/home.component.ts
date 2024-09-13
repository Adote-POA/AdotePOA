import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CardHomeComponent } from "../card-home/card-home.component";
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonSearchbar, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, CardHomeComponent],
})
export class HomeComponent implements OnInit {
  pets: Pet[] = [];
  petService = inject(PetService);

  constructor() { }

  ngOnInit() {
    this.petService.getPets().subscribe((dado) => {
      this.pets = dado;
    });
  }
}
