# Xp challenge aka.Xptify (Xp + Spotify)

## Para rodar
* `npm install`
* `npm start`
    Abrirá seu navegador padrão em `http://localhost:8080`
    Para gerar a api-key `https://developer.spotify.com/console/`

O projeto contem um sistem de consulta à API do spotify, com possibilidade de ouvir as pŕevias, e mantem histórico dos últimos albuns acessados.

### Built With
* React
* Redux
* Styled-component
* e mais...

### Pré-requisitos
* Node
* Npm

### Building
#### Ambiente de desenvolvimento
* `npm start`  
    Abrirá seu navegador padrão em `http://localhost:8080`, caso a porta já esteja em uso será oferecida a possibilidade de usar a próxima porta disponível

#### Gerando build de produção
* `npm run build`  
    Cria o diretório **/dist** na raiz do projeto com os estáticos que deverão ser expostos no ambiente alvo do deploy

## Estrutura
/src
├ /assets `Imagens, e qualquer outro recurso necessário`
├ /components
│ ├ /Album `Componente para página de detalhes de um album`  
│ ├ /Albums `Componente para página de listagem e busca de albums`  
│ ├ /Layout `Componente utilizado como base para os outros componentes`  
│ └ /Login `Componente utilizado para input do token`  
├ /configs `Variáveis de tema e constantes`
├ /routes `Arquivos relativos ao routing`
│ ├ /patch `Variáveis com as contantes de 'caminhos' disponiveis`  
│ └ /Routes `Definição do roteamento`  
├ /services `Componentes para requisições`  
├ /store `Componentes relativos à redux e saga`  
│ ├ /reducers `Componentes do redux`  
│ └ /sagas `Componentes do redux saga`  
└ /utils `Cinto de utilidades`  

## Versionamento
* [SemVer](http://semver.org/) para versionamento.
* `npm version patch/minor/major` para alterar a versão

## Tests
* **Jest:** Framework para testes
* **@Testing-Library/React:** Utilitário para testes
  A capacidade de melhoria nos testes é elevada
