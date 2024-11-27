# Указываем базовый образ (самый свежий)
FROM node:20-alpine

# Устанавливаем рабочий каталог
WORKDIR /app

# Копируем файлы зависимости в рабочий каталог
COPY package.json .

# Устанавливаем зависимости
RUN npm install

# Копируем файл окружения (если необходимо)
# COPY .env.production

ENV HOST='https://83.147.246.205:5000'

# ENV HOST='miracreative-api-node-4f0d.twc1.net:5000'

ENV DOMAIN='https://miracreative-atman-auto-2ee1.twc1.net'

ENV EMAIL_HOST='smtp.yandex.ru'

ENV EMAIL_PASS='gdwemxtnbfrgyabd'

ENV EMAIL_PORT='465'

ENV EMAIL_USER='radicall004@yandex.ru'

ENV DESTINATION_EMAIL='radicall004@yandex.ru'


# Копируем остальные файлы вашего приложения и переносим их в рабочий каталог
COPY . .

# Открываем порт 3000
EXPOSE 3000

# Собираем приложение
RUN npm run build

# Указываем команду для запуска приложения (как в production)
CMD ["npm", "start"]