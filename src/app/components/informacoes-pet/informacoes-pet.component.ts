import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from "ionicons";
import { logoWhatsapp, locationOutline } from 'ionicons/icons';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';

@Component({
  standalone: true,
  selector: 'app-informacoes-pet',
  templateUrl: './informacoes-pet.component.html',
  styleUrls: ['./informacoes-pet.component.scss'],
  imports: [IonIcon, IonButton, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class InformacoesPetComponent implements OnInit {
  @Input() petId: string = '';
  @Input() pet!: Pet;
  constructor(private petService: PetService) {
    addIcons({ logoWhatsapp, locationOutline });
  }

  ngOnInit() {
    this.petService.getPet(this.petId).then((dado) => {
      this.pet = dado;
    })
  }

}
