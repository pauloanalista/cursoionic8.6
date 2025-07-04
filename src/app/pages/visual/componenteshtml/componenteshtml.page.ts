import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonFab, IonFabButton, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-componenteshtml',
  templateUrl: './componenteshtml.page.html',
  styleUrls: ['./componenteshtml.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonFab, IonFabButton, IonIcon, IonSearchbar]
})
export class ComponenteshtmlPage implements OnInit {

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {
  }

}
