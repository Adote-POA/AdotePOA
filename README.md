# Requisitos para rodar aplicação
- Node: versão v20.17.0
- Angular CLI: versão 18
  - comando de instalação: `npm install -g @angular/cli`
- Ionic CLI: versão 7.2.0
  - comando de instalação: `npm install -g @ionic/cli` 
- Instale as dependências usando o comando: `npm install`
- Rodando a aplicação: `ionic serve`
  
# Como criar novos componentes?
- Comando: `ng g c components/nome-componente`
- **OBS:** No arquivo component.ts, dentro do @Component adicionar a propriedade `standalone: true`