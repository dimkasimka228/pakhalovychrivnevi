## Student
- Name: <ПІБ>
- Group: <Група>
 
## Практичне заняття №2 — NestJS + PostgreSQL + Redis
 
## Структура репозиторію
```
.
├── src/              # NestJS source code
├── test/             # e2e-тести NestJS
├── Dockerfile        # development-образ для NestJS (node:20-alpine + @nestjs/cli)
├── docker-compose.yml
├── .env.example      # шаблон змінних оточення
├── .gitignore
└── README.md
```
 
## Запуск проекту
```bash
cp .env.example .env   # за потреби налаштувати значення
docker compose up --build
```
 
## Перевірка сервісів
```Plaintext
NAME                               IMAGE                COMMAND                  SERVICE    STATUS              PORTS
pakhalovychrivnevi-app-1           node:20-alpine       "docker-entrypoint.s…"   app        running (healthy)   0.0.0.0:3000->3000/tcp
pakhalovychrivnevi-postgres-1      postgres:15-alpine   "docker-entrypoint.s…"   postgres   running (healthy)   0.0.0.0:5432->5432/tcp
pakhalovychrivnevi-redis-1         redis:7-alpine       "docker-entrypoint.s…"   redis      running (healthy)   0.0.0.0:6379->6379/tcp
```
 
## Перевірка PostgreSQL
```text
Plaintext
                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-----------+----------+----------+-------------+-------------+-----------------------
 nestdb    | nestuser | UTF8     | en_US.utf8  | en_US.utf8  | 
(1 row)
<вивід docker compose exec postgres psql -U nestuser -d nestdb -c '\l'>
```
 
## Перевірка Redis
```text
$ docker compose exec redis redis-cli ping
PONG
<вивід docker compose exec redis redis-cli ping>
```
 
## Перевірка застосунку
```text
<$ docker compose exec redis redis-cli ping
PONG>
```
 
## Логи NestJS (фрагмент)
```text
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [NestFactory] Starting Nest application...
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [InstanceLoader] AppModule dependencies initialized +10ms
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [RoutesResolver] AppController {/}: +3ms
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 34  - 05/29/2026, 5:46:43 PM     LOG [NestApplication] Nest application successfully started +2ms

<вивід docker compose logs app (ключові рядки запуску)>
```
## Технічні примітки

- **Dockerfile** використовує `node:20-alpine` (легший образ ~170MB) з глобально встановленим `@nestjs/cli`.
- **PostgreSQL** підключено через TypeORM (`@nestjs/typeorm`, `typeorm`, `pg`), `synchronize: true` — лише для розробки.
- **Redis** підключено через CacheModule (`@nestjs/cache-manager`). Оскільки в проекті використовується `cache-manager` v7, store налаштовано через `@keyv/redis` (`createKeyv(...)`) — це актуальний спосіб підключення Redis для NestJS 11, що замінює застарілий `cache-manager-redis-yet`.
- `depends_on` з `condition: service_healthy` гарантує, що app стартує лише після того, як postgres і redis стали healthy.

docker --version
Docker version 27.4.1, build b9d17ea

docker compose version
Docker Compose version v2.32.1