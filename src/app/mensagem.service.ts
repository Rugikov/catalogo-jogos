import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  mensagens: string[] = [];

  add(mensagens: string)
  {
    this.mensagens.push(mensagens);
  }

  clear(){
    this.mensagens = [];
  }

  constructor() { }
}
