import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon, IonFabButton, IonFab, IonAlert } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from "ionicons";
import { logoWhatsapp, locationOutline, trashOutline } from 'ionicons/icons';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-informacoes-pet',
  templateUrl: './informacoes-pet.component.html',
  styleUrls: ['./informacoes-pet.component.scss'],
  imports: [IonAlert, IonFab, IonFabButton, IonIcon, IonButton, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class InformacoesPetComponent implements OnInit {
  @Input() petId: string = '';
  @Input() pet!: Pet;


  constructor(private petService: PetService, private _router: Router) {
    addIcons({ logoWhatsapp, locationOutline, trashOutline });
  }
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('cancelar');
      },
    },
    {
      text: 'Excluir',
      role: 'confirm',
      handler: () => {
        this.petService.deletePet(this.petId);
        this._router.navigate([''])

      },
    },
  ];

  ngOnInit() {
    this.petService.getPet(this.petId).then((dado) => {
      this.pet = dado;
    })
  }

}
