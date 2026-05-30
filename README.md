## Student
- Name: ВАШЕ ПІБ
- Group: ВАША ГРУПА

## Практичне заняття №3 — CRUD REST API для MiniShop

### Структура репозиторію
.
├── src/
│   ├── categories/
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── migrations/
│   │   ├── 1716924800000_CreateTables.ts
│   │   └── 1716924800001_AddIsActiveToProducts.ts
│   ├── data-source.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md


### Запуск проекту
```bash
cp .env.example .env
docker compose up --build

# docker compose exec postgres psql -U nestuser -d nestdb -c "\dt")

 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | categories | table | nestuser
 public | migrations | table | nestuser
 public | products   | table | nestuser
(3 rows): 
# curl http://localhost:3000/api/products% 

StatusCode        : 200
StatusDescription : OK
Content           : []
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 2
                    Content-Type: application/json; charset=utf-8
                    Date: Sat, 30 May 2026 10:16:50 GMT
                    ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMC...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 2], [Content-Type, application/json; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 2


