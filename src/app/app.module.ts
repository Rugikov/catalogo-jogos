import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { FormsModule } from '@angular/forms';
import { JogoDetalhesComponent } from './components/jogo-detalhes/jogo-detalhes.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaisJogadosComponent } from './components/mais-jogados/mais-jogados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JogosComponent,
    JogoDetalhesComponent,
    MensagemComponent,
    MaisJogadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
