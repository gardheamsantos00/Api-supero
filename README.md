# Supero-Api

### Features

+ Buscar livros pelo título, autor ou ISBN; 
+ Listar livros (título, ISBN, autor, editora, ano); 
+ Apresentar quantidades de registros encontrados; 
+ Paginar o resultado da busca; 
+ Filtrar livros pelo período (ano); 
+ Visualizar detalhes dos livro (apresentar todos os atributos); 


### Organization
Todas as dependencias necessárias para o projeto estão no ````package.json````.


### Install
````
clone do repositório
unzip do arquivo
cd nome do projeto
npm install
````

### Start
````
npm start
````

A api roda na porta ````2222```` por padrão,
exemplo ````http://localhost:2222/api````.

### EndPoints Exemp
+ ````localhost:2222/api/livros?page=3````  -GET
+ ````localhost:2222/api/search?buscar=cho```` -GET
+ ````localhost:2222/api/search-supero?Busca=cho```` -GET
+ ````localhost:2222/api/livros/8c6aa65e-39aa-4271-a1ad-055923825ed1```` -GET
+ ````localhost:2222/api/livros/8c6aa65e-39aa-4271-a1ad-055923825ed1```` -DELETE


### Author
Gardheam Santos
