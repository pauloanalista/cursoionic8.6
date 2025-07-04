import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nativo',
  templateUrl: './nativo.page.html',
  styleUrls: ['./nativo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonButton]
})
export class NativoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar(rota: string) {
    this.router.navigate([rota]);
  }

}
