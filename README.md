## Student
- Name: Пахалович Д.О
- Group: 232он

## Практичне заняття №3 — CRUD REST API для MiniShop

### Структура репозиторію
```
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
│   │   ├── CreateTables1716924800000.ts
│   │   └── 1700000002-AddIsActiveToProducts.ts
│   ├── data-source.ts
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
| Method | URL | Опис |
|--------|-----|------|
| GET | /api/categories | Список категорій |
| GET | /api/categories/:id | Одна категорія |
| POST | /api/categories | Створити категорію |
| PATCH | /api/categories/:id | Оновити категорію |
| DELETE | /api/categories/:id | Видалити категорію |
| GET | /api/products | Список продуктів |
| GET | /api/products/:id | Один продукт |
| POST | /api/products | Створити продукт |
| PATCH | /api/products/:id | Оновити продукт |
| DELETE | /api/products/:id | Видалити продукт |

### Перевірка міграцій
```text
<вивід docker compose exec postgres psql -U nestuser -d nestdb -c "\dt">
```

### Приклади запитів

#### Створити категорію
```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name": "Electronics", "description": "Gadgets and devices"}'
```

#### Створити продукт
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "iPhone 15", "price": 999.99, "stock": 50, "categoryId": 1}'
```

#### Отримати всі продукти
```bash
curl http://localhost:3000/api/products
```

### Важливі налаштування
- `synchronize: false` - схема бази даних контролюється виключно міграціями
- Міграції запускаються автоматично при старті (`migrationsRun: true`)
- Entity: Category та Product зі зв'язком ManyToOne
