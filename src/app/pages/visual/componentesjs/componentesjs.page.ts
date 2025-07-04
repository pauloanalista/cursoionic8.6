import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonToast,
  ToastController, IonLoading, LoadingController, ActionSheetController
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { globe } from 'ionicons/icons';

@Component({
  selector: 'app-componentesjs',
  templateUrl: './componentesjs.page.html',
  styleUrls: ['./componentesjs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, IonToast, IonLoading]
})
export class ComponentesjsPage implements OnInit {

  constructor(private toastCTRL: ToastController, private loadingCTRL: LoadingController, private actionSheetCTRL: ActionSheetController) {
    addIcons({ globe });
  }

  ngOnInit() {
  }

  async enviarToast() {
    let toastTopo = await this.toastCTRL.create({
      message: 'Mensagem estilo android',
      duration: 3000,
      position: 'top',
      mode: 'md'
    });
    await toastTopo.present();

    let toastMeio = await this.toastCTRL.create({
      message: 'Mensagem estilo ios',
      duration: 3000,
      position: 'middle',
      mode: 'ios'
    });
    await toastMeio.present();

    let toastBaixo = await this.toastCTRL.create({
      message: 'Operação realizada com sucesso!',
      duration: 3000,
      position: 'bottom',
      icon: 'globe'
    });
    await toastBaixo.present();
  }

  async openLoading() {
    let loading = await this.loadingCTRL.create({ message: 'Carregando...', spinner: 'dots' });

    await loading.present(); //abrir loading

    setTimeout(() => {
      loading.dismiss(); //fechar loading
    }, 3000)
  }

  async openActionSheet() {
    let actionSheet = await this.actionSheetCTRL.create({
      header: 'Escolha uma opção',
      buttons: [
        {
          text: 'Excluir',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Compartilhar',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
