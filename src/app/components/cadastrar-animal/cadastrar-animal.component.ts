import { Component, OnInit, Inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonInput,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';




@Component({
  standalone: true,
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.scss'],
  imports: [
    HeaderComponent,
    CommonModule,
    IonInput,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    FormsModule, 
    ReactiveFormsModule,
  ],
})


export class CadastrarAnimalComponent {
  fileToUpload: any;
  imageUrl: any;
  petService = inject(PetService);
  _router = inject(Router);

  petForm = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    raca: new FormControl(''),
    pelagem: new FormControl(''),
    vacinas: new FormControl(true),
    temperamento: new FormControl(''),
    porte: new FormControl(''),
    descricao: new FormControl(''),
    endereco: new FormControl(''),
  });

  handleFileInput(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = target.files;
    if (fileList == null) {
      return;
    }
    this.fileToUpload = fileList.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  constructor() {}

  onSubmit(){
    //novoPet:Pet = this.petForm.value as Pet;
    this.petService.newPet(this.petForm.value);
    this._router.navigate([''])
  }
}
