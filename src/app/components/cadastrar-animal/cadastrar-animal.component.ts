import { Component, OnInit } from '@angular/core';
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
  ],
})
export class CadastrarAnimalComponent implements OnInit {
  fileToUpload: any;
  imageUrl: any;
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

  ngOnInit() {}
}
