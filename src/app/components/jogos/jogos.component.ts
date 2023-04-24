import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../jogos';

import { JogoService } from 'src/app/jogo.service';
import { MensagemService } from 'src/app/mensagem.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[] = [];

  selectedJogo?: Jogo;

  constructor(private jogoService: JogoService, private mensagemService: MensagemService) { }

  ngOnInit(): void { //Vai rodar tudo uma vez que o component seja iniciado
    this.getJogos();
 
  };

  getJogos(): void{
    this.jogoService.getJogos()
      .subscribe(x => this.jogos = x)
  }

  onSelect(jogo: Jogo): void {
    this.mensagemService.add(`Você selecionou o jogo ${jogo.Nome} criado pela ${jogo.Desenvolvedora}!`);
    console.log(jogo);
    this.selectedJogo = jogo;
  }

  }

