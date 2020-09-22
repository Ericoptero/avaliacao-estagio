# Descrição
Projeto criado como teste prático para o processo de estágio. 

# Imagens

Imagens do sistema em execução.
Registro
![Registro](https://i.imgur.com/FUuvEbh.png)

Edição
![Edição](https://i.imgur.com/ouUAtd8.png)

[Album de imagens do sistema](https://imgur.com/a/WZWtfiK)

# Instalação!

Faça um clone do repositório e dê
```sh
$ npm install
```
na pasta inicial (/) use o seguinte script para rodar o backend
```sh
$ npm run dev
```
na pasta client (/client) use o seguinte script para rodar o cliente
```sh
$ npm start
```
Código SQL do banco de dados MySQL (Nome do banco de dados: estagio_db)
```sql
CREATE TABLE `estagio_db`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NULL , `birth_date` TEXT NULL , `email` TEXT NULL , `password` TEXT NULL , `created` TEXT NULL , `updated` TEXT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```