# Testes de contrato de API

# O que são contratos?

 O contrato nada mais é que um acordo entre produtor/provedor e o consumidor onde fica definido a estrutura de uma API e como ela é projetada, garantido assim que o conteudo fornecido não tenha sido modificado. A forma mais comum de contrato de API é uma especificação OpenAPI. O Swagger é um conjunto de ferramentas de código aberto criadas em torno da Especificação OpenAPI que podem ajudá-lo a projetar, criar, documentar e consumir APIs REST.

 # E o que são os testes de contrato?

 Agora que entendemos o que é um contrato, fica mais facil de compreender como é feito o testes. Primeiramente os testes de contrato são voltado à aplicações com arquiteturas baseadas em serviços e microsserviços, sendou ma maneira de reduzir os riscos e erros de uma integração, visto que ela e desenvolvida por diversas equipe e uma mudança no produtor pode causar falha no consumidor. A finalidade do testes de contrato e validar se o acordo definido não foi quebrado, se o schema permanece o mesmo garantido a integridade dos dados da comunicação. 

# Mão na massa

Nesse projeto vou ultilziar o cypress, AJV e o JSONSchema para isso precisamos preprarar o nosso ambiente. 


![image](https://user-images.githubusercontent.com/105568405/187809919-924cad03-9994-4477-9fcd-14f3575cd738.png)
