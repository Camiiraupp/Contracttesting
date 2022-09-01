
<h1 align="center"> :star:Testes de contrato de API:star: </h1>


##  :small_orange_diamond: Descrição do Projeto
<p align="justify"> Estudo de testes de contrato ultilizando AJV e JSONSchnema </p>


##  :small_orange_diamond: O que são contratos?

<p align="justify"> O contrato nada mais é que um acordo entre produtor/provedor e o consumidor onde fica definido a estrutura de uma API e como ela é projetada, garantido assim que o conteudo fornecido não tenha sido modificado. A forma mais comum de contrato de API é uma especificação OpenAPI. O Swagger é um conjunto de ferramentas de código aberto criadas em torno da Especificação OpenAPI que podem ajudá-lo a projetar, criar, documentar e consumir APIs REST.</p>

 ##  :small_orange_diamond: E o que são os testes de contrato?

<p align="justify">Agora que entendemos o que é um contrato, fica mais facil de compreender como é feito os testes. Primeiramente os testes de contrato são voltados à aplicações com arquiteturas baseadas em serviços e microsserviços, sendou ma maneira de reduzir os riscos e erros de uma integração, visto que ela e desenvolvida por diversas equipe e uma mudança no produtor pode causar falha no consumidor. A finalidade do testes de contrato e validar se o acordo definido não foi quebrado, se o schema permanece o mesmo garantido a integridade dos dados da comunicação. </p>

 ##  :small_orange_diamond: Como rodar a aplicação 

<p align="justify">No terminal clone a aplicação  </p>

~~~ 
git clone https://github.com/Camiiraupp/jsonSchema-ajv.git
~~~
<p align="justify">Entrar na pasta do projeto </p>

~~~
cd jsonSchema-ajv
~~~ 
<p align="justify">instale as dependencias </p>

~~~
npx install node 

npm init -y  

npm install cypress --save dev 

npm install ajv --save dev 
~~~

<p align="justify">Verifique as versões </p>

~~~
node --version

npm cypress --version

npm ajv --version
~~~

<p align="justify">No meu caso eu estou ultilizando as versões:</p>

~~~~

node v16.17.0

Cypress 9

Ajv 8.15.0

~~~~



<p align="justify">Rodando os testes:</p>

~~~
npx cypress open
~~~


:warning::warning: Status do Projeto: Em desenvolvimento :warning::warning:
