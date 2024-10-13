# 🦜 Установка Pterodactyl на VDS

## Шаг 1: Подготовка
(/docs/vds/buyvds)[Закажите VDS]
:::tip
На IPv6 VDS для корректной работы Pterodactyl (/docs/vds/warp)[установите Warp]
:::
:::info
Если вы используйте свой домен: Подключите ваш домен в Cloudflare:
* Перейдите на https://dash.cloudflare.com
* Зарегистрируйтесь и подтвердите почту
* Нажмите Add Domain, введите ваше доменное имя, выберите бесплатный план и установите указанные днс в вашем регистраторе
* Подождите несколько часов (в среднем до 3х), пока DNS обновятся. После чего на почту придёт сообщение об активации домена в Cloudflare
Если у вас нет домена, (/docs/vds/subdomains)[создайте бесплатный поддомен с включенным проксированием]
:::

## Шаг 2: Установка
1. (/docs/vds/ssh)[Подключитесь по SSH]
2. Используйте скрипт для установки панели: введите `bash <(curl -s https://pterodactyl-installer.se)`
3. Выберите `0`
4. Первые 4 шага пропустите (нажмите энтер)
5. Введите ваш адрес электронной почты в двух следующих вопросах
6. В следующие 3 шага напишите ваше имя пользователя для панели
7. Введите пароль для аккаунта в панели
8. Введите ваш домен для панели
9. В следующих 3-х вопросах ответьте `n`
10. Ответьте `y` в вопросе про продолжение установки
11. Ответьте `no` на вопрос об отправке телеметрии

🎉 Готово! Вы успешно установили Pterodactyl панель. Перейдите по вашему домену, чтобы открыть её.