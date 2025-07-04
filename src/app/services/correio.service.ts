import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  //Verbos http
  // GET - Obter informacoes do servidor
  // POST - Utiliza para cadastrar algo novo
  // PUT - Utiliza para alterar uma entidade inteira
  // PATCH - Utiliza para alterar parte de uma entidade
  // DELETE - Utiliza pra excluir uma entidade

  constructor(private http: HttpClient) { }

  obterEndereco(cep: string): Observable<any[]> {
    return this.http.get<any[]>('https://viacep.com.br/ws/' + cep + '/json/');
  }

  novoEndereco(endereco: any) {
    //let endereco = {logradouro: 'Rua Concenza', numero:12, bairro:'centro'};
    return this.http.post('url para salvar', endereco);
  }

  atualizarEndereco(endereco: any) {
    return this.http.put('url para salvar/id', endereco);
  }

  atualizarLogradouro(idEndereco: number, logradouro: any) {
    return this.http.patch('url/' + idEndereco, logradouro);
  }

  excluirEndereco(idEndereco: number) {
    return this.http.delete('url para excluir com id / ' + idEndereco);
  }
}
