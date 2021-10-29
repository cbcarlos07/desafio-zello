# <a id="begin"> Desafio Zello | Pasqualli

## [1. Introdução](#intro)
## [2. O que foi usado](#uso)
## [3. Banco de dados](#db)
## [4. Script para inicialização do banco](#antes)
## [5. Executando o projeto](#run)
## [6. Evidência de execução](#evidencia)


## <a id="intro">1. Introdução

Este projeto é para avaliação técnica de uma desafio FullStack para a Zello .

Este projeto foi desenvolvido em NodeJS (v14.15.1)

Este projeto tem algumas particularidades no que diz respeito a realtime e agendamentos de tarefas 

## <a id="uso"> 2. O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

**NO BACKEND**

* <b>Express</b>

Framework NodeJS para a criação de servidor 


* <b>Sequelize</b>

ORM para auxiliar na comunicação com o banco de dados

* <b>MySQL v8.0 </b>

* md5

Para criptografia de senha

O banco de dados usado no projeto

**NO FRONTEND**

* Ionic 5 com Angular v2


[Voltar ao inicio](#begin)

## <a id="db"> 3. O Banco de Dados

O Banco de dados utilizado no projeto foi o MySQL na versão 8.0.

O repositório do Docker Compose do banco de dados utilizado encontra-se [aqui](https://github.com/cbcarlos07/docker-mysql)



<b>NOTA</b>

Tenha o docker instalado antes

Antes de executar o comando do docker-compose, primeiro crie a rede interna do docker:

    docker network create -d bridge mysql-network


Certifique-se de primeiro deixar esse __container__ em execução antes de prosseguir com a inicalização do projeto

O comando para rodar após o __container__ mysql dentro do arquivo docker-compose.yml é preciso executar o seguinte texto no terminal:

    docker-compose up -d

Este comando deixará o banco de dados executando

[Voltar ao inicio](#begin)

## <a id="antes"> 4. Script para inicialização do banco



Antes de rodar o projeto faz-se necessária a execução do seguinte comando na pasta raiz

    npm i 

Isso irá instalar os pacotes necessários para o projeto

Antes de executar o projeto crie o seguinte arquivo na raiz da pasta `web-api` chamado __.env__ com o seguinte conteúdo;

    NODE_ENV=development

    SERVER_PORT=3005
    DB_DIALECT=mysql
    DB_HOST=localhost
    DB_USERNAME=root
    DB_PASSWORD=123
    DB_DATABASE=desafio
    DB_PORT=3306




    SECRET=desafio

    TIMEZONE=America/Manaus

    MQ_HOST=amqp://localhost

Qualquer dúvida copie o conteúdo do arquivo .env.example e cole no novo arquivo chamado .env    

Após instalados os pacotes, é possível iniciar o projeto com o comando

    npm run dev

Ao executar o comando, o projeto api irá verificar se o projeto já tem o banco de dados configurado com as tabelas, caso não exista banco de dados, a API irá se encarregar de criar o banco de dados de nome __desafio__, suas respectivas tabelas e fazer as primeiras inserções

O login inicial é:

CPF: 51823828710
Senha: 12345678



[Voltar ao inicio](#begin)

## <a id="run"> 5. Executando o projeto

**BACKEND**

Após o banco de dados estiver em execução, os pacotes estiverem instalados, o script de base ser executado, aí o projeto poderá entrar em operação. Para isso, dê o comando:

    npm run dev

**FRONTEND**

Depois que a API estiver inicializada e em execução, dentro da raíz do frontend é necessário rodar o comando:

        ionic serve

[Voltar ao inicio](#begin)

## <a id="evidencia"> 6. Evidência de execução



Seguem alguns prints da execução do projeto

**Login**

![alt text](https://github.com/cbcarlos07/desafio-zello/blob/develop/print/login.png)        


**Home**

![alt text](https://github.com/cbcarlos07/desafio-zello/blob/develop/print/listagem.png)        

**Cadastro**

![alt text](https://github.com/cbcarlos07/desafio-zello/blob/develop/print/cadastro.png)        

**Edição ou remoção**

![alt text](https://github.com/cbcarlos07/desafio-zello/blob/develop/print/editar_remover.png)        

**Menu**

![alt text](https://github.com/cbcarlos07/desafio-zello/blob/develop/print/menu.png)        




