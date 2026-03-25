import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly instituicao = 'Centro Universitário Augusto Motta';
  readonly nomeCompleto = 'Gabriel Suliano David';
  readonly turma = 'ADS0301M';
  readonly unidade = 'CG';
  readonly turno = 'Manhã';
}
