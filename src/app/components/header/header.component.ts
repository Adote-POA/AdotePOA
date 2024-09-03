import { Component, OnInit } from '@angular/core';
import { IonTitle, IonHeader,IonToolbar, IonButtons, IonMenuButton} from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonButtons, IonMenuButton, IonHeader, IonTitle],

})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
