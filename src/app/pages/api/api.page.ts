import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, LoadingController } from '@ionic/angular/standalone';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonMenuButton]
})
export class ApiPage implements OnInit {
  endereco: any;
  constructor(private correioService: CorreioService, private loading: LoadingController) { }

  ngOnInit() {
  }

  async obterEnderecoComObservable(cep: string) {
    //Observable
    let loading = await this.loading.create({ message: 'Chamando api dos correios...', spinner: 'dots' });
    await loading.present(); //abrir loading

    await this.correioService.obterEndereco(cep)
      .subscribe((end) => {
        this.endereco = end;
        loading.dismiss();
      }, (erro) => {
        loading.dismiss();
        console.log('deu erro', erro);
      });
  }

  async obterEnderecoComPromisse(cep: string) {
    //this.endereco = await this.correioService.obterEndereco(cep).toPromise();
    let loading = await this.loading.create({ message: 'Chamando api dos correios...', spinner: 'dots' });
    await loading.present(); //abrir loading

    await this.correioService.obterEndereco(cep).toPromise()
      .then((end) => {
        this.endereco = end;
      }).catch((erro) => {
        console.log('deu erro', erro);
      }).finally(() => {
        loading.dismiss();
      });

    //Observable

    await this.correioService.obterEndereco(cep)
      .subscribe((end) => {
        this.endereco = end;
        loading.dismiss();
      }, (erro) => {
        loading.dismiss();
        console.log('deu erro', erro);
      });

    console.log(this.endereco);
  }

  async excluir(id: number) {
    let excluir = await this.correioService.excluirEndereco(id).toPromise();
    console.log(excluir);
  }
}
