import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton]
})
export class CameraPage implements OnInit {
  foto: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  async tirarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Ou use CameraResultType.Uri para salvar no sistema
        source: CameraSource.Camera // Ou Prompt para perguntar, ou Photos para galeria
      });
      this.foto = image.dataUrl;
    } catch (error) {
      console.error('Erro ao tirar foto:', error);
    }
  }
}
