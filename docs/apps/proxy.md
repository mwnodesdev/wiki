# 🕶 Установка Proxy на Pterodactyl тариф

### Вы можете установить Shadowsocks Proxy-сервер для обхода региональных блокировок сайтов. Воспользуйтесь руководством ниже:
1. [Закажите](/docs/billing/createserver) Платный Pterodactyl сервер, выбрав яйцо `Code | Python`. Подойдет минимальная конфигурация в локации Германия
2. Скачайте последний релиз SSServer, например [с нашего сервера](https://file.mom/files/GCZmZb.file) и загрузите его на сервер, переименовав в `ssserver`
3. Создайте файл app.py, пропишите в нем следующее:
```python
from os import system
system('/bin/bash')
```
4. Создайте файл config.json, пропишите в нем следующее:
```json
{
    "server": "0.0.0.0",
    "server_port": Порт вашего сервера,
    "password": "ваш пароль для Proxy",
    "timeout": 300,
    "method": "aes-256-gcm",
    "mode": "tcp_only",
    "fast_open": true,
    "nameserver": "8.8.8.8"
}
```
5. Запустите сервер, пропишите `chmod 700 ssserver` и `./ssserver` для запуска Proxy сервера
6. Скачайте приложение для подключения к Proxy [здесь](https://shadowsocks5.github.io/en/download/clients.html)
7. Подключитесь к вашему серверу указав адрес сервера, порт и пароль.
:::note
Не забудьте указать тип шифрования `aes-256-gcm`
:::

🎉 Готово! Вы успешно установили Proxy сервер.
