import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";
import { Pet } from 'src/app/models/pet';

@Component({
  standalone: true,
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
  imports: [RouterLink, IonCard, IonCardHeader, IonCardTitle]
})
export class CardHomeComponent implements OnInit {
  @Input() pet!: Pet;

  constructor() { }

  ngOnInit() { }

}
