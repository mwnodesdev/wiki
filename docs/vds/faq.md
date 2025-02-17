# 🤔 FAQ по VDS

### Какой тип виртуализации используется?
Мы используем KVM для наших VDS.

### Можно ли майнить на VDS?
Нет, нельзя. Более подробно о правилах можно ознакомиться https://mwnodes.xyz/tos

### Есть ли DDoS защита на VDS?
Да, все наши VDS защищены DDoS защитой. Её тип зависит от локации, например в Германии мы используем L3/L4 технологии защиты от Smartnet

### Что значит Shared ресурсы?
Это означает, что ресурсы делятся между серверами, т.е. 100%-я доступность ресурсов не гарантируется
:::note
В случае с Оперативной памятью Shared применяется в отношении файла подкачки
Т.е. какая то часть при большой нагрузке на ОЗУ будет загружена в файл подкачки на диске.
:::

### Какие лимиты присутствуют на VDS?
Помимо указанных в биллинге лимитов для тарифа, присутствует лимит на диск для всех виртуальных серверов: до 300 мб/с чтения/записи и до 15000 IOPS
* Ручные лимиты  
Серверу может быть назначен ручной лимит: на операции ввода/вывода диска, на процессор или на сеть при нарушении наших правил
При первом нарушении часть ресурсов сервера, которые были затронуты ограничиваются. Снять лимит можно через поддержку
В случае повторного нарушения, сервер блокируется и удаляется. Восстановить такой сервер не получится.

### Что такое NAT и приватная сеть?
В некоторых локациях VDS находятся за NAT. Это значит, что сам сервер видит сеть как приватную (с адресом 10.0.X.X), но подключен к сети и имеет свой IP адрес. Это помогает быстро и легко направлять маршруты на адреса со стороны узла, что сильно облегчает нам работу 😉
