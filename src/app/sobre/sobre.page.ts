import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: false,
})
export class SobrePage {
  readonly textoApresentacao =
    'Sou Gabriel Suliano David, aluno de ADS. Esta aplicação foi desenvolvida no Ionic para apresentar um cartão digital simples e funcional, acessível no navegador do celular e do computador.';

  readonly disciplina = 'Desenvolvimento de Aplicativo Mobile';
  readonly objetivo =
    'Aplicar conceitos de interface, organização de projeto e navegação entre telas com foco em usabilidade.';

  readonly competencias = [
    'Elaborar soluções mobile com Ionic',
    'Modelar interface com componentes reutilizáveis',
    'Executar e validar o aplicativo no navegador',
    'Implementar navegação entre páginas'
  ];
}
