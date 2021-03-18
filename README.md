# AssetManagement
Controles de ativos de TI, API REST 
API construida utilizando Node.JS e PostgreSQL para armazemamento, manipilação de dados utilizando TypeORM E Typescript.

## Migrations 
  yarn typeorm migration:run

## Iniciar Servidor de teste 
  yarn dev

## Métodos

Requisições seguem o padrão

| Método | Descrição |
| ------ | ------- |
| `GET` | Retorno de um ou mais registros |
| `POST` | Criação de Registro |
| `PUT` | Autaliza um determinado Registro |
| `DELETE` | Remove um registro |

## Respostas

| Código| Descrição |
| ------ | ------ |
| `200`| Requisição executada com sucesso (success) |
| `404` | Registro não encontrado (not found) |