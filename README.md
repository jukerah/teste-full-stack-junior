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

> Este projeto é um teste baseado em CRUD de produtos. 

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

### Front-end:
* <strong>Next.js</strong>
* <strong>TypeScript</strong>
* <strong>Sass</strong>
* <strong>Axios</strong>
* <strong>React Icons</strong>
* <strong>React toastify</strong>
* <strong>React Modal</strong>

### Back-end:
* <strong>Node.js</strong>
* <strong>TypeScript</strong>
* <strong>Express</strong>
* <strong>Prisma</strong>
* <strong>Cors</strong>
* <strong>Nodemon</strong>
* <strong>Dotenv</strong>
* <strong>Pm2</strong>
### Banco de dados:
* <strong>MySQL</strong>

<hr/>

<h2 id="demo-project">Deploy do Projeto</h2>

### Front-end:
> O deploy do front-end foi realizado na Vercel.

Link: <a align="left" href="https://teste-full-stack-junior-front-end-deploy.vercel.app/" target="_blank">https://teste-full-stack-junior-front-end-deploy.vercel.app/</a>

<br />

### Back-end:
> O deploy do back-end foi realizado na Heroku.

### Link: <a align="left" href="https://teste-full-stack-junior.herokuapp.com/product" target="_blank">https://teste-full-stack-junior.herokuapp.com/product</a>

<br />

### Banco de dados:
> O deploy do banco de dados MySQL foi realizado na Hostinger.

<hr/>

<h2 id="features" align="center">Features</h2>

<br />

> O projeto está finalizado.

<br>

### Front-end:

- [ X ] Página de produtos.
  - [ X ] - C: Create | Formulário para criar um novo produto.
  - [ X ] - R: Read | Lista de produtos.
  - [ X ] - U: Update | Formulário para atualizar um produto.
  - [ X ] - D: Delete | Excluir um produto.

<br>

### Back-end:
- [ X ] - Cadastrar um novo produto.
  #### Método:
  > POST

  #### Rota:
  > /product

  #### json:
  ``` json
  {
    "name": "Nome do produto",
    "price": 80,
    "amount": 3,
    "description": "Descrição do produto."
  }
  ```

  #### * O preço do produto no front-end é decimal, porém antes de ser enviado para o back-end deve ser multiplicado por 100. Exemplo (5.99 * 100), sendo assim o back-end recebe o valor de 599.

<br>

- [ X ] - Listar todos produtos.

  #### Método:
  > GET

  #### Rota:
  > /product

<br>

- [ X ] - Editar um produto.
  #### Método:
  > PUT

  #### Rota:
  > /product

  #### json:
  ``` json
  {
    "id": "id do produto",
    "name": "Nome do produto",
    "price": 80,
    "amount": 3,
    "description": "Descrição do produto."
  }
  ```

  <br>

- [ X ] - Deletar um produto.
  #### Método:
  > DELETE

  #### Rota:
  > /product

  #### json:
  ``` json
  {
    "id": "id do produto",
  }
  ```

<br>

### Database:
- [ X ] - Modelagem banco de dados.
- [ X ] - Criar banco de dados.

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

#### Build:

#### teste-full-stack-junior\front-end>
`yarn build`

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

#### Build:

#### teste-full-stack-junior\back-end>
`yarn build`

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

