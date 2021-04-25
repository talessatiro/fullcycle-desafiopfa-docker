## Desafio PFA Full Cycle 2.0 - Docker

### Instruções:

- Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL.
- Gere a imagem desse container e a publique no DockerHub.
- Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.
- Crie um repositório no github com todo o fonte do programa e das imagens geradas.
- Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. 
- NÃO utilizar Docker-compose nesse desafio.

### Comandos para execução:

Criar network
```sh
docker network create fpa-docker-app
```

Subir MySQL
```sh
docker run --name mysqlservice --network fpa-docker-app -e MYSQL_ROOT_PASSWORD=fctest -e MYSQL_DATABASE=fcapp -d mysql --default-authentication-plugin=mysql_native_password
```

Execução Service
```sh
docker run -d --name fpa-docker-service --network fpa-docker-app talessatiro/fpa-docker-service
```

Execução NGINX
```sh
docker run -d -p 8080:80 --name fpa-docker-nginx --network fpa-docker-app talessatiro/fpa-docker-nginx
```

### Validação

Após todos os comandos executados, acesse o endereço **http://localhost:8080/modules** para que os módulos do curso sejam listados.