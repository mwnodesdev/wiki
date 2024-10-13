# 🤖 Создание бота в Discord
## Нужно автоматизировать какой либо процесс на вашем сервере Discord? Вы можете сделать для этого бота.

1. Создайте бота на сайте разработчиков Discord: https://discord.com/developers/applications
2. Перейдите во вкладку Installion, оставьте галочку только на Guild Install, в поле Install Link выберите None
3. Перейдите во вкладку Bot. Настройте аватар и баннер бота. По желанию сделайте бота приватным, используя ползунок Public Bot. Включите 3 последние ползунка (Privileged Gateway Intents). Получите токен бота, сбросив его кнопкой Reset Token.
4. Создайте Python сервер на нашем хостинге
5. Создайте файл `app.py`, напишите в него следующее:
```py
import nextcord

bot = nextcord.Client(intents=nextcord.Intents.all())

@bot.slash_command()
async def hello(ctx):
    await ctx.send(f'Привет, {ctx.user.mention}')

bot.run('ВАШ_ТОКЕН')
```
6. Добавьте в Startup -> Additional Python packages `nextcord`
7. Запустите сервер. Добавьте бота, сгенерировав ссылку на добавление приложения в портале разработчиков, включив `bot` и `applications.commands`. Установите нужные права боту, можно дать сразу все выбрав Administrator.
8. На сервере появится команда `/hello`, которая ответит вам "Привет, Ваш_ник". Если она не появилась, перезапустите клиент Discord

🎉 Готово! Вы создали своего первого бота в Discord, который будет приветствовать вас.