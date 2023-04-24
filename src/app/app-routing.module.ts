import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogosComponent } from './components/jogos/jogos.component';
import { MaisJogadosComponent } from './components/mais-jogados/mais-jogados.component';
import { JogoDetalhesComponent } from './components/jogo-detalhes/jogo-detalhes.component';

const routes: Routes = [
  { path: 'jogos', component: JogosComponent},
  { path: 'mais-jogados', component: MaisJogadosComponent},
  { path: '', redirectTo: '/mais-jogados', pathMatch: 'full'},
  { path: 'detalhe/:Nome', component: JogoDetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
