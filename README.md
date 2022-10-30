# Teste para programador Júnior

<img src="images/preview.jpg"/>

<br>

Sumário
=================
<!--ts-->
   * [Descrição do Projeto](#about)
   * [Deploy do Projeto](#demo-project)
   * [Features](#features)
   * [Pré-requisitos e instalação do projeto](#pre-req)
<!--te-->

<hr/>

<h2 id="about">Descrição do Projeto</h2>
<br />

> Este projeto é um teste baseado em C.R.U.D de produtos. 

<br />

### Requisitos:

> Crie um CRUD de produtos com os seguintes campos: nome, preço, estoque e descrição. Seu CRUD deverá ter front-end e back-end baseado em microsserviços.

### Serviço 1: Frontend.
### Serviço 2: Backend.
### Serviço 3: Banco de dados.

<br />

### Evite projeto monolito, frontend e backend juntos.

> Front deverá utilizar o framework de interface reativa VueJS ou VueJS com  NuxtJS, ReactJS ou ReactJS com NextJS.

>Backend deverá ser feito com NodeJS (Express, AdonisJS ou NestJS).

>O banco de dados poderá ser em Mysql ou Mongodb.

### * Será um diferencial utilizar Typescript.
### * Fique à vontade para utilizar libs externas para melhorar seu projeto. 


<br />

### Tecnologias e dependências utilizadas no projeto:

* <strong>TypeScript</strong>
* <strong>Next.js</strong>
* <strong>Sass</strong>
* <strong>Axios</strong>
* <strong>React Icons</strong>
* <strong>Node.js</strong>
* <strong>Express</strong>
* <strong>Prisma</strong>
* <strong>Cors</strong>
* <strong>Dotenv</strong>
* <strong>MySQL</strong>

<hr/>

<h2 id="demo-project">Deploy do Projeto</h2>

### Deploy:
<a align="left" href="#" target="_blank">Em breve...</a>

<hr/>

<h2 id="features" align="center">Features</h2>

<br />

> O projeto ainda está em desenvolvimento e os próximos passos serão atualizados abaixo:

<br>

### Front-end:

- [  ] Página de produtos.
  - [  ] C: Create – Formulário para criar um novo produto.
  - [  ] R: Read – Tabela para ver um produto, ou uma lista de produtos.
  - [  ] U: Update – Formulário para atualizar um produto.
  - [  ] D: Delete – Excluir um produto.

<br>

### Back-end:
- [ X ] Cadastrar um novo produto.
- [ X ] Listar todos produtos.
- [ X ] Detalhes do produto.
- [  ] Editar um produto.
- [  ] Deletar um produto.

<br>

### Database:
- [ X ] Modelagem banco de dados.
- [ X ] Criar banco de dados.
<img src="images/database-model.png"/>


<hr/>

<h2 id="pre-req">Pré-requisitos e instalação do projeto</h2>

### Front-end:

#### Instalação:

 #### teste-full-stack-junior\front-end>
`npm install`

<br>

#### Executando:

#### teste-full-stack-junior\front-end>
`yarn dev`

<br>

### Back-end:
#### Instalação:

#### teste-full-stack-junior\back-end>
`npm install`

<br>

#### Executando:

#### teste-full-stack-junior\back-end>
`yarn dev`

<br>

### Database:

> Para o banco de dados será necessário a criação de um banco de dados MySQL.

<br>

#### Banco de dados localhost:

- Instalar MySQL.
- Abrir o MySQL Workbench no localhost.
- Executar as queries abaixo:

``` sql
CREATE DATABASE db_name;
```

``` sql
USE db_name;
```

<br>

#### Configurando variavel de ambiente:

#### Arquivo: `teste-full-stack-junior/back-end/.env`

<br>

#### `DATABASE_URL="mysql://user:password@host:port/db_name"`

<br>

#### Criando a Migrate em desenvolvimento:

#### teste-full-stack-junior\back-end>
`yarn prisma migrate dev`

<br>

#### Criando a Migrate em produção:

#### teste-full-stack-junior\back-end>
`yarn prisma migrate deploy`

<hr/>

<h2 align="center">Author</h2>

<a href="https://marioelvio.com" target="_blank">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81795443?v=4" width="100px;" alt=""/>
</a> <a href="https://marioelvio.com" title="Mario Elvio" target="_blank"></a>

<p>Developed by <a href="https://marioelvio.com">Mario Elvio</a>.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Mario_Elvio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marioelvio/)](https://www.linkedin.com/in/marioelvio/)

