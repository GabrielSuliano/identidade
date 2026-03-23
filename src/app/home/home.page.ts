import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly nomeCompleto = 'Gabriel Suliano David';
  readonly matricula = '25103019';
  readonly turma = 'ADS0301M';
  readonly unidade = 'CG';
  readonly turno = 'Noite';
  readonly curso = 'Análise e Desenvolvimento de Sistemas';
  readonly modulo = 'Desenvolvimento de Aplicativo Mobile';

}
