# Cartao Digital de Identificacao

Aplicativo Ionic/Angular desenvolvido para atividade de Desenvolvimento Mobile. O app apresenta um cartao digital com dados do aluno, foto e uma tela secundaria com breve apresentacao.

## Recursos

- Tela inicial com cartao de identificacao.
- Navegacao para uma pagina "Sobre".
- Layout mobile com componentes Ionic.
- Foto do aluno em `src/assets/`.
- Projeto criado a partir do template base do Ionic.

## Stack

- Ionic 8
- Angular 20
- TypeScript
- SCSS

## Como rodar

```bash
npm install
npm start
```

Depois abra o endereco exibido no terminal, normalmente:

```text
http://localhost:4200
```

Tambem e possivel usar:

```bash
npx ionic serve
```

## Estrutura principal

```text
src/app/home/      # Cartao de identificacao
src/app/sobre/     # Tela de apresentacao
src/assets/        # Imagens usadas no app
```

## Dados da atividade

- Aluno: Gabriel Suliano David
- Unidade: CG
- Turno: Manha

## Status

Projeto academico funcional para apresentacao de identidade digital em app mobile.

## Arquitetura, requisitos e limites

Atividade acadêmica de interface/navegação: `app-routing.module.ts` carrega módulos `home` e `sobre`; os componentes exibem dados estáticos e imagem em `src/assets/`. Não há autenticação, API, banco ou variáveis necessárias. A duplicidade `src/ambientes/`/`src/environments/` merece revisão; a seleção efetiva é definida em `angular.json`.

Manifest: Angular 20, Ionic 8, TypeScript `~5.9.0`. Use Node compatível com Angular 20 e npm. Prefira `npm ci`, `npm start` e `npm run build`; os scripts Angular não exigem Ionic global.

Há specs Jasmine/Karma; `npm test` executa `ng test`. Não foram executados nesta revisão e não constituem testes de backend. Sem deploy confirmado ou licença versionada. Prioridades: navegação/acessibilidade e revisão de dados pessoais expostos. Apresentar como estudo mobile.
