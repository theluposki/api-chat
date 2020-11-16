# Api-Node

Api REST utilizando Nodejs e mongodb.

### Criação do projeto.

* [x] iniciando o git
* [x] primeiro commit

### Instalando express e inicializando servidor

* [x] instalado o express `npm i express --save`
* [x] e criando o arquivo: app.js
* [x] criando o arquivo: .gitignore > para não subir o diretorio node_modules

### Instalando dotenv e criação de variaveis de ambiente

* [x] instalado o dotenv `npm i dotenv --save`
* [x] inicializando o config dotenv `require('dotenv').config()`
* [x] criando arquivo .env e adicionando variavel da porta do host

### Modificando package-json.

* [x] adicionando linha em "scripts":"start"
* [x] criando a primeira rota /info

    > `{"server":"http://localhost:3000","status":"ok"}`
## Inicio roteamento

### Criação de diretorios

* [x] criado diretório src
* [x] criado diretório src/models
* [x] criado diretório src/routes
* [x] criado diretório src/routes/routerUser
* [x] criada rota de autenticação.

    > rota criada: > POST `/auth/register`
    > rota criada: > POST `/auth/authenticate`

### Instalando o MongoDB e criando conecção

* [x] instalando mongodb `npm i mongoose --save`
* [x] criando diretório src/db
* [x] criando arquivo src/db/index.js
* [x] criando a conecção com o banco de dados
* [x] criando um modelo em src/models/User.js

### Editando rota de registro de usuario 

* [x] criando sentença de inserção ao mongo para criação de usuario.
* [x] testando rota no *Insomnia Rest Client* com o seguinte JSON:

 `{ "name":"nome", "email":"nome@mail.com", "password":"password" }`
* [x] a rota deve retornar code 201 com a resposta em JSON:

 `{ "user": { user },"msg": "Criado com sucesso!!" }`
* [x] se Usuário existir vai retornar code 400 com a resposta em JSON:

 `{ "error": "Usuário ja Cadastrado." }`

### Instalar o bcryptjs e criar hash para cripografar a senha

* [x] instalar o bcryptjs `npm i bcryptjs --save`
* [x] no arquivo src/models/User.js criar um `Schema.pre('save', function(){})` criar o hash encriptando a senha.
* [x] no retorno da rota `/auth/register` deve retornar o usuário. mais não deve retornar a senha.

> user.password = undefined

### refatorando o codigo e criando repositórios

* [x] instalando dependencia de desenvolvedor `nodemon`
* [x] modificando arquivo package.json `"devDependencies": {"nodemon": "^2.0.4"}`
* [x] criando diretório src/controllers.
* [x] criando arquivo Auth-controller.js e configurando um controler de autenticação.
* [x] modificando arquivo de rota src/routes/routerUser/Auth.js para inserção do controler.
* [x] criando diretório src/repositories/Auth.repository.js e estabelecendo um repositório que cuida somente de autenticaçã e autorização do acesso ao banco.

### criando função authenticate para autenticar usuário
* [x] instalando dependencia de geração de token `jsonwebtoken`
* [x] criando função de gerar token.
* [x] adicionando funcionalidade na função de registrar generateToken.
* [x] adicionando o require do brcritjs no arquivo Auth.repository.
* [x] criando função para autenticar usuário para a rota.
> /auth/authenticate
* [x] a rota `/auth/authenticate` deve ser em json passado no body da request.
> {"email":"mail@mail.com","password":"12345678"}
* [x] se `email` e `password` estiver correto na base de dados.
> o resultado será um status code 200, com o seguinte resposta.
> 
`{ "user": { "user": {"_id": "id", "name": "mail", "email": "mail@mail.com","__v": 0}"token":"token"}`

* [x] se `email` estiver errado na base de dados.
> o resultado será um status code 400, com o seguinte resposta.
>
`{"user": {"error": "Usuario não existe."}}`

* [x] se `password` estiver errado na base de dados.
> o resultado será um status code 400, com o seguinte resposta.
>
`{"user": {"error": "Senha inválida."}}`

* [x] se estiver um erro na request.
> o resultado será um status code 400, com o seguinte resposta.
>
`{"error": "Ouve um erro ao autenticar."}`
