import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.page.html',
  styleUrls: ['./visual.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonMenuButton,]
})
export class VisualPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar(rotaDaPagina: string) {
    this.router.navigate([rotaDaPagina]);
  }
}
