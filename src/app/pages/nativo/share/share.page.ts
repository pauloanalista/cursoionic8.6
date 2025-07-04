import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton]
})
export class SharePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async compartilhar() {
    try {
      await Share.share({
        title: 'Título de Exemplo',
        text: 'Este é o texto a ser compartilhado!',
        url: 'https://ionicframework.com',
        dialogTitle: 'Compartilhar com:'
      });
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  }

}
