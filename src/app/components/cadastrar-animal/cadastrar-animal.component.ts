import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton, IonText
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  standalone: true,
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.scss'],
  imports: [IonText,
    IonButton,
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
    IonSelect,
    IonSelectOption
  ],
})


export class CadastrarAnimalComponent {
  fileToUpload: any;
  imageUrl: any;
  errorMessage: string | null = null;
  petService = inject(PetService);
  _router = inject(Router);
  isLoading: boolean = false;

  petForm = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    raca: new FormControl(''),
    pelagem: new FormControl(''),
    vacinas: new FormControl(true),
    temperamento: new FormControl(''),
    porte: new FormControl('M'),
    descricao: new FormControl(''),
    endereco: new FormControl(''),
  });

  // Manipulação de arquivo 
  handleFileInput(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = target.files;
    if (fileList == null) {
      return;
    }
    this.fileToUpload = fileList.item(0); // Armazena o arquivo selecionado
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result; // Carrega e armazena a URL da imagem
    };
    reader.readAsDataURL(this.fileToUpload);// Converte a imagem para URL
  }
  constructor() { }
 
  // Envio do Formulário
  async onSubmit() {
    this.isLoading = true; 
    this.errorMessage = null;
    if (!this.petForm.valid || this.fileToUpload == null) {
      this.errorMessage = "Há campos a serem preenchidos!"; // Verifica se o formlário é válido
      this.isLoading = false;
      return;
    }
    let novoPet: Pet = this.petForm.value as Pet; // Cria o objeto pet
    this.petService.newPet(novoPet, this.fileToUpload).then(() => {
      this.petForm.reset();
      this.fileToUpload = null;
      this.imageUrl = null;
      this._router.navigate(['']);
    }).catch(() => {
      this.errorMessage = "Falha ao cadastrar novo Pet!";
    }).finally(() => {
      this.isLoading = false;
    })

  }
}
