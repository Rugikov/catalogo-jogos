import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../jogos';
import { JogoService } from '../../jogo.service';

@Component({
  selector: 'app-mais-jogados',
  templateUrl: './mais-jogados.component.html',
  styleUrls: ['./mais-jogados.component.scss']
})
export class MaisJogadosComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.getJogos();
  }


  getJogos(): void {
    this.jogoService.getJogos()
      .subscribe( jogos => this.jogos = jogos.slice(0, 4));
  }
}
