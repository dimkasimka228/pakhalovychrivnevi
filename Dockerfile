FROM node:20-alpine

# Встановлюємо NestJS CLI глобально
RUN npm install -g @nestjs/cli

WORKDIR /app

# Копіюємо тільки файли залежностей (для кешування шарів)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
