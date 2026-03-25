import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: false,
})
export class SobrePage {
  readonly nomeCompleto = 'Gabriel Suliano David';
  readonly textoSobreMim =
    'Sou Gabriel Suliano David, estudante de Análise e Desenvolvimento de Sistemas. Gosto de transformar atividades acadêmicas em projetos organizados, funcionais e com apresentação visual mais profissional.';
  readonly textoDisciplina =
    'Na disciplina de Desenvolvimento de Aplicativo Mobile, este projeto aplica conceitos de interface, navegação entre telas e uso do Ionic no navegador, seguindo a proposta de criar um cartão digital simples e acessível.';
}
