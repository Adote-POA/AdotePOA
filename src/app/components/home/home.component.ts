import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
