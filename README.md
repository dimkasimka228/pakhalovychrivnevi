## Student
- Name: <Пахалович Д.О>
- Group: <232/2 он>
 
## Практичне заняття №5 — JWT Authentication + Guards + RBAC
 
### Структура репозиторію
```
.
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   │   ├── register.dto.ts
│   │   │   └── login.dto.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── auth.controller.ts
│   ├── users/
│   │   ├── user.entity.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── common/
│   │   ├── enums/
│   │   │   └── role.enum.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   └── pipes/
│   │   	└── trim.pipe.ts
│   ├── categories/ ...
│   ├── products/ ...
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
```
 
### API Endpoints
| Method | URL | Auth | Role |
|--------|-----|------|------|
| POST | /auth/register | - | - |
| POST | /auth/login | - | - |
| GET | /api/categories | - | - |
| POST | /api/categories | JWT | admin |
| GET | /api/products | - | - |
| POST | /api/products | JWT | admin |
| PATCH | /api/products/:id | JWT | admin |
| DELETE | /api/products/:id | JWT | admin |
 
### Тест реєстрації
```text
StatusCode        : 201
StatusDescription : Created
Content           : {"message":"User registered successfully"}
RawContent        : HTTP/1.1 201 Created
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 42
                    Content-Type: application/json; charset=utf-8
                    Date: Sat, 30 May 2026 19:34:46 GMT
                    ETag: W/"2a-nMoFx54+czTntmS...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 42], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 42
<вивід curl POST /auth/register>
```
 
### Тест логіну
```text
StatusCode        : 201
StatusDescription : Created
Content           : {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidXNlcjEiLCJyb2xlIjoidXNlciIsImlhdCI6MTc4MDE2OTczMSwiZXhwIjoxNzgwMTczMzMxfQ
                    .SoZtWJesBOMmvoArB9dbsRRzVOahvZFmYjWYVPij4mE...
RawContent        : HTTP/1.1 201 Created
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 202
                    Content-Type: application/json; charset=utf-8
                    Date: Sat, 30 May 2026 19:35:31 GMT
                    ETag: W/"ca-oKu8+XdlbXp55u...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 202], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 202
<вивід curl POST /auth/login>
```
 
### Тест 401 — запит без токена
```text
Invoke-WebRequest : {"message":"Unauthorized","statusCode":401}
строка:1 знак:1
+ Invoke-WebRequest -Uri http://localhost:3000/api/products -Method POS ..
Invoke-WebRequest : {"message":"Unauthorized","statusCode":401}
```
 
### Тест 403 — запит з роллю user
```text
Invoke-WebRequest : {"message":"Forbidden resource","error":"Forbidden","statusCode":403}
строка:1 знак:1
+ Invoke-WebRequest -Uri http://localhost:3000/api/products -Method POS ...
Invoke-WebRequest : {"message":"Forbidden resource","error":"Forbidden","statusCode":403}
```
 
### Тест успішного створення від admin
```text
StatusCode        : 201
StatusDescription : Created
Content           : {"name":"Test Product","price":100,"description":null,"id":3,"stock":0,"isActive":true,"createdAt":"2026-05-30T19:49:10.604Z","updatedAt":"2026-05-30T19:49:10.604Z 
                    "}
RawContent        : HTTP/1.1 201 Created
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 165
                    Content-Type: application/json; charset=utf-8
                    Date: Sat, 30 May 2026 19:49:10 GMT
                    ETag: W/"a5-PUEM1peOBFe1dB...
Forms             :
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 165], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        :
RawContentLength  : 165
<вивід curl POST /api/products з токеном admin>
```


