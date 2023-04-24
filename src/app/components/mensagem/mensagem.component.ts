import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit{

  constructor(public mensagemService: MensagemService) {}

  ngOnInit(): void {
    
  }
}
