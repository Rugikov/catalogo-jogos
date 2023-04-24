import { Injectable } from '@angular/core';
import { Jogo } from './jogos';
import { Observable, of } from 'rxjs';
import { MensagemService } from './mensagem.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private mensagemService: MensagemService, private httpClient: HttpClient) { }
  
  getJogo(Nome: string): Observable<Jogo> {
    const jogo = this.httpClient.get<Jogo>('http://127.0.0.1:5000/detalhe/'+ Nome.toString());
    this.mensagemService.add("Encontramos o seu jogo com nome de "+ Nome.toString());
    return jogo;
  }

  getJogos(): Observable<Jogo[]> { // será substituído por uma API
    const jogos = this.httpClient.get<Jogo[]>('http://127.0.0.1:5000/jogos');
    this.mensagemService.add("Encontramos os seus jogos!");
    return jogos;
  }

  updateJogo(jogo: Jogo): Observable<Jogo>{
    return this.httpClient.post<Jogo>('http://127.0.0.1:5000/atualizar', jogo)
  }

}


// Call API here //