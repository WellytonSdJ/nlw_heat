# NLW Heat 🚀

---

### Apresentação do projeto

A aplicação desenvolvida, visa criar uma plataforma onde o usuário poderá enviar uma mensagem e para isso deve ser autenticado com o Github.

### Técnologias utilizadas 🤓

- [React](https://pt-br.reactjs.org)
- [React Native](https://reactnative.dev)
- [Node](https://nodejs.org/en/)
- [Elixir](https://elixir-lang.org)

### Como executar 🖥️

> Obs.: Nesse projeto temos autenticação via OAuth com o GitHub

- Clone o repositório e acesse a pasta;
- Faça uma copia do arquivo `.env.example` para `.env` e preencha com as suas credenciais do GitHub;
- Instale as dependências com `yarn`;
- Executa as migrations com `yarn prisma migrate dev`;
- Inicie o servidor com `yarn dev`;

A aplicação pode ser acessada em [`localhost:4000`](http://localhost:4000).

---

### Relato pessoal 🎲

Criei esse projeto, buscando mais experiências para me tornar um melhor profissional na área, não só na parte do frontend como também no backend e mobile, utilizando as principais técnologias no mercado, e que fariam sentido para mim nesse momento, claro.

<!-- Então, resolvi documentar só meus êxitos como também minhas dificuldades, para num momento futuro, rever e poder reavaliar minhas experiências. -->

Portanto, essa documentação tem a finalidade não só de expor meu trabalho, como que servir também de um tipo de diário para reavaliar meus exitos e dificuldades.

### _As informações a partir daqui são pertiententes à essa reavaliação, portanto, sinta-se livre pra ler, mas não se sinta obrigado._

---

## Dia 1

No primeiro dia, foi iniciado a parte do backend, criadas as rotas de autenticação e criação de tokens, onde fui apresentado ao prisma e feita autenticação com o JsonWebToken.

Logo de cara, fiquei surpreso, pois percebi que seria diferente, afinal todo o código foi escrito em typescript, o que achei que seria muito mais difícil, mas após algumas linhas acabei achando bem interessante.
A curto prazo, parece muito chato escrever todas tipagens e ainda ter que lembrar de baixar as dependencias de desenvolvimento das tipagens, mas depois de pensar melhor, foi uma escolha muito acertiva, pois reduz muito o retrabalho a longo prazo.

Outra coisa que achei interessante foi a questão do [prisma](https://www.prisma.io). Essa ferramenta é muito interessante, pois facilita muito a vida na questão de criação de tabelas entre outras coisas mais, recomendo muito uma leitura na documentação.
