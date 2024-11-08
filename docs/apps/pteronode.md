# 💻 Установка Pterodactyl ноды на VDS
## Шаг 1: подготовка
:::note
Подготовка к установке ноды для Pterodactyl отличается на IPv6 и IPv4 VDS
Мы не рекомендуем использовать IPv6 VDS для ноды.
:::
### IPv4 VDS:
Добавьте DNS запись в вашем регистраторе  
Тип записи: A 
Target IPv4: Адрес вашей машины  
Проксирование (Cloudflare, оранжевое облако): выключено  
  
Если у вас нет домена, вы можете использовать наши поддомены для VDS

### IPv6 VDS:
1. Подключите домен в Cloudflare
2. Перейдите в https://one.dash.cloudflare.com
3. Перейдите в раздел Tunnels
![cftunnels](https://file.mom/files/wFc110.png)
4. Создайте новый туннель. Дайте ему любое название. Тип Cloudflared
5. В типе подключения выберите Debian -> x64
![cfdebian](https://file.mom/files/h0N09m.png)
6. Введите команду через SSH на ваш сервер, которую показывает для подключения туннеля
![cfcommand](https://file.mom/files/RnN5Fl.png)
7. Создайте DNS запись на ваш домен, поддомен и домен может быть любым, сервис сделайте как ниже:
![cfcreatedns](https://file.mom/files/a50RfW.png)

## Шаг 2: Установка
1. Запустите скрипт через SSH: `bash <(curl -s https://pterodactyl-installer.se)`
2. Выберите пункт `1`
3. На первые 2 вопроса ответьте `n`
:::note
Пункт 4 различается для разных типов VDS
**IPv4**  
Выберите `y`, введите ваш домен, еще раз введите `y`  
**IPv6**
Выберите `n`
:::
5. На вопрос про продолжение установки ответьте `y`
:::note
IPv4 VDS:
Через несколько минут нужно будет подтвердить сертификат, введите `A`(`Y`)
:::
6. Перейдите в вашу панель -> Admin -> Locations -> Создайте локацию, например `Germany`
7. Перейдите в Nodes и создайте новый узел:  
Придумайте название ноде, укажите её домен
:::tip
Для IPv6 VDS Выберите `Behind Proxy`, в поле Daemon Port укажите `443`
:::
:::tip
SFTP не будет работать на IPv6
:::
Заполните все остальные поля, например как на скриншоте:
![newnode](https://file.mom/files/kJ77yL.png)
8. Добавьте несколько портов
:::tip
Для IPv4 - адрес бинда `0.0.0.0`  
Для IPv6 - `::`
:::
:::tip
Вы можете использовать диапазоны, например `5000-5999` откроет порты 5000...5999
:::
9. Перейдите в Configuration -> Нажмите Auto Deploy, скопируйте команду и введите её на вашем узле
:::tip
Если на вашем сайте есть капча, необходимо добавить ваш узел в обход  
Например в Cloudflare, перейдите в WAF -> Tools, добавьте адрес вашего узла с действием Allow
:::
10. Перезапустите Wings: `systemctl restart wings`

🎉 Если всё сделано верно, в панели у узла загорится зелёное сердце.