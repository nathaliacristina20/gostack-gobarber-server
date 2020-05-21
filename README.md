
<h1 align="center">
 <img src=".github/gostack.svg">
 GoBarber API
</h1>

<h3 align="center">
Plataforma de agendamento e gerenciamento para barbearias
</h3>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a> | <a href="#computer-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#pencil-como-contribuir">Como contribuir</a> | <a href="#page_with_curl-licença">Licença</a>
</p>

## Layout

<img src=".github/gobarber_web.gif">
<img src=".github/gobarber_mobile.gif">

## :rocket: Sobre o projeto

<p>Esta é uma plataforma completa onde o cliente pode visualizar a agenda de barbeiros e agendar um horário, 
e para barbeiros, permite gerenciar os horários marcados.</p> 

<p>Este é o repositório da API do projeto.</p>
<ul>
  <li>Para a versão web, <a href="https://github.com/nathaliacristina20/gostack-gobarber-web">clique aqui</a>.</li>
  <li>Para a versão mobile, <a href="https://github.com/nathaliacristina20/gostack-gobarber-mobile">aqui</a>.</li>
</ul>

## :computer: Tecnologias

Além das tecnologias abaixo, esta aplicação foi desenvolvida com as melhores práticas de desenvolvimento! 
<p>:heart_eyes: <strong>TDD</strong> :sparkling_heart: Design patterns: <strong>SOLID</strong>, <strong>DDD</strong> e <strong>DRY</strong>, :balance_scale: estratégia de <strong>cache</strong> e :police_car: <strong>segurança</strong> no node.</p>
    
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Celebrate](https://github.com/arb/celebrate)
- [Jest](https://jestjs.io/) 
- [Multer](https://github.com/expressjs/multer)
- [Datefns](https://date-fns.org/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [TypeORM](https://typeorm.io/#/)
- [Handlebars](https://handlebarsjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Ioredis](https://github.com/luin/ioredis)
- [Cors](https://github.com/expressjs/cors)
- [Aws-sdk](https://github.com/aws/aws-sdk-js)
- [Class-transformer](https://github.com/typestack/class-transformer)
- [Rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Uuidv4](https://github.com/thenativeweb/uuidv4)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) v10.20 ou maior
- [Yarn](https://yarnpkg.com/)
- Uma instância de [PostgreSQL](https://www.postgresql.org/), [Mongodb](https://www.mongodb.com/) e [Redis](https://redis.io/) **

** Ou [Docker](https://www.docker.com/) 

### Como executar

<i>Antes de executar estes passos, você precisa ter uma instância dos bancos listados acima ou um Docker com as imagens.</i>

- Clone o repositório ```git clone https://github.com/nathaliacristina20/gostack-gobarber-server.git```
- Vá até o diretório ```cd gostack-gobarber-server```
- Execute ```yarn``` para instalar as dependências
- Copie o arquivo .env.example executando ```cp .env.example .env``` para linux ou mac e ```copy .env.example .env``` para windows
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Execute ```yarn typeorm migration:run``` para rodar as migrations 
- Execute ```yarn dev:server``` para rodar o servidor

Você pode realizar requisições REST através do Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoBarber&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fnathaliacristina20%2Fgostack-gobarber-server%2Fmaster%2Finsomnia.json)

Caso deseje executar os testes unitários e de integração basta executar ```yarn test``` em seu terminal. Você poderá ver um relatório da cobertura acessando o arquivo ```coverage/lcov-report/index.html```.

## :pencil: Como contribuir

<b>Faça um fork deste repositório</b>

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gostack-gobarber-server

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :page_with_curl: Licença

Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/nathaliacristina20/be-the-hero/blob/master/LICENSE">LICENSE</a> para mais detalhes.

<hr />
<p>by Nathalia Cristina :wave: <a href="https://linktr.ee/nathaliacristina20">Get in touch!</a></p>
