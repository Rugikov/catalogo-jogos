import { Component, OnInit } from '@angular/core';
import { Jogo } from '../../jogos';
import { JogoService } from 'src/app/jogo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jogo-detalhes',
  templateUrl: './jogo-detalhes.component.html',
  styleUrls: ['./jogo-detalhes.component.scss']
})
export class JogoDetalhesComponent implements OnInit{

  jogo: Jogo | undefined;

  constructor(private jogoService: JogoService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getJogo();
  }

  getJogo() {
    const Nome = String(this.route.snapshot.paramMap.get("Nome"));
    this.jogoService.getJogo(Nome).subscribe(x => this.jogo = x);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    if(this.jogo)
      this.jogoService.updateJogo(this.jogo).subscribe();
  }
}
