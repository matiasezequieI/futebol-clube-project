<h1 align="center">Trybe Futebol Clube</h1>

O TFC é um site informativo sobre partidas e classificações de futebol! soccer

Nesse projeto, foi construído um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento foi realizado respeitando regras de negócio providas no projeto e e a API foi projetada para ser consumida pelo front-end já existente.

Para adicionar uma partida, é necessário possuir um token de acesso, o que exige que o usuário esteja autenticado para fazer as alterações. Existe um relacionamento entre as tabelas de times e partidas, para que as atualizações nas partidas possam ser realizadas adequadamente.

O back-end do TFC possui regras de negócio específicas para popular a tabela disponível no front-end, a qual será exibida ao usuário final do sistema.

<h2>Stack utilizada</h2>

- **Front-End**: `React`, `Axios`.
- **Back-end**: `Javascript`, `Typescript`, `Node.js`, `POO`, `SOLID`, `Docker`, `Sequelize`
- **Testes**: `Mocha`, `chai`, `sinon`, `jest`.

<h2>Rodando o Projeto (Docker 🐋)</h2>

1. Clone o repositório em sua máquina local.

2. Certifique-se de ter o docker-compose instalado.
<h2>Rodando o Projeto (Docker 🐋)</h2>

1. Clone o repositório em sua máquina local.

2. Certifique-se de ter o docker-compose instalado.

3. Execute o comando `npm run compose:up` para iniciar a aplicação ou acesse a pasta `app` e rode com o comando `docker-compose up -d --build`.

4. Acesse o endereço http://localhost:3000 para acessar o site e http://localhost:3001 para acessar a API.

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

<h2>Rodando o Projeto (Docker 🐋)</h2>

1. Clone o repositório em sua máquina local.

2. Certifique-se de ter o docker-compose instalado.

3. Execute o comando `npm run compose:up` para iniciar a aplicação ou acesse a pasta `app` e rode com o comando `docker-compose up -d --build`.

4. Acesse o endereço http://localhost:3000 para acessar o site e http://localhost:3001 para acessar a API.

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

<details>
  <summary><strong> Foram encontradas 2 possíveis soluções para este problema:</strong></summary><br />

- Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.

- Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.
</details>
