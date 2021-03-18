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
| `400` | Registro não encontrado (not found) |

## Resposta de requisição 

Sucessso:

[POST] => Rota : /equipments (200)
```sh
  {
    "id": "cbc38983-2410-4ef8-b05a-b253a23274b3",
    "isAvailable": true,
    "description": "Notebook Lenovo",
    "identification": "NTBL001",
    "type_id": "a7545650-c8ad-49b7-a615-0a81b7999a88",
    "created_at": "2021-03-04T15:08:05.188Z",
    "updated_at": "2021-03-04T15:08:05.188Z"
  }
```

Erro:

[POST] => Rota : /equipments (400)
```sh
  {
    "message": "Equipment already exist!",
  }
```
