## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
# Locale
This is a search API which allows the users to search for information about Nigeria geographical areas. It detailed on Nigeria's regions, states and local government area.

---

## Requirements
1. User should be able to register 
2. User should be able to login with ApiKey
3
4. User should be able to search for informations about state
5. Users should be able to search for Local Government Areas(LGAs)
6. Users should be able to get information on regions and States in each region
7. Test application
---
## Setup
- Install Nestjs, mongodb
- pull this repo
- update env with example.env
- run `npm run start:dev`

---
## Base URL
- somehostsite.com


## Models
- users.model
- states.model
- regions.model

### Users
| field  |  data_type | constraints  |
|---|---|---|
|  id       |  string  |  required  |
|  username |  string  | required   |
|  email    |  string   |  required  |
|  password |   string |  required  |


### states
| field  |  data_type | constraints  |
|---|---|---|
|  id        |  number |  required  |
|  state     | string  |  required  |
|  slogan    |  string |  required  |
|  governor  | string  |  required  |
|  population|   string|  required  |
  Description|  string |  required  |
|  LGA       |  number |  required  |
|  LGAs      |  string |  required  |

|  id          |  string  |  required  |
|  Region      |  string  | required   |
|  Description |   string |  required  |
|  States      |   string |  required  |


## APIs
---

### Signup User

- Route: /createUsers
- Method: POST
- Body: 
```
{
  "email": "ifeomaugwu85@gmail.com",
  "password": "Eunice85",
  "username": 'Ifeoma ugwu",
}
{
    message: 'Signup successful',
    user: {
"email": "ifeomaugwu85@gmail.com",
  "password": "Eunice85",
  "username": 'Ifeoma ugwu",
    }
}
```
---
### Login User

- Route: /login
- Method: POST
- Body: 
```
{
  "password": "Password1",
  "username": 'jon_doe",
}
```

- Responses

Success
```
{
    message: 'Login successful',
    apiKey: 'kj97sjlkafjkldsfjsd'
}
```

---
### Search States

- Route: /State: Lagos State
- Method: GET
- Authorization: apiKey
- @query

- Route: /LGAs: Bende LGA
- Method: GET
- Authorization: apiKey
@Param

    - Route: /_id:65d03590bc6d42f472c63b22
- Method: POST
- Authorization: apiKey
@Body

### Search Regions

- Route: /Region:North-East
- Method: GET
- Authorization: apiKey
- @query


    - Route: /_id:65d2362f1dc147a6cb13b830
- Method: POST
- Authorization: apiKey
@Body
- Responses

Success
```
{
    state: 1,
    total_price: 900,
    created_at: Mon Oct 31 2022 08:35:00 GMT+0100,
    items: [{ name: 'chicken pizza', price: 900, size: 'm', quantity: 1}]
}
```
---
### Get Order

- Route: /orders/:id
- Method: GET
- Header
    - Authorization: Bearer {token}

- Responses

    