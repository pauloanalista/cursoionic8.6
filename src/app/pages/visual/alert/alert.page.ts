import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonAlert, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, IonAlert]
})
export class AlertPage implements OnInit {
  alertButtons = ['Action', 'Cancel'];
  isAlertOpen = false;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  async abrirAlerta() {

    let alerta = await this.alertCtrl.create({
      header: 'Atenção!',
      subHeader: 'Sistema de Controle',
      message: 'Operação realizada com sucesso!',
      buttons: ['OK'],
    });
    alerta.present();
  }

  async abrirAlertaComAcao() {
    let botoes = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
        },
      }
    ];

    let alerta = await this.alertCtrl.create({
      header: 'Atenção!',
      subHeader: 'Sistema de Controle',
      message: 'Operação realizada com sucesso!',
      buttons: botoes,
    });
    alerta.present();
  }

  async abrirAlertaComInput() {

    let form = [
      {
        placeholder: 'Primeiro Nome',
      },
      {
        placeholder: 'Ultimo Nome',
      },
    ];

    let alerta = await this.alertCtrl.create({
      header: 'Atenção!',
      subHeader: 'Sistema de Controle',
      message: 'Operação realizada com sucesso!',
      buttons: ['OK'],
      inputs: form
    });
    alerta.present();
  }
}
