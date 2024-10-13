# 🚀 Как написать свой первый сервер на Express.js

### Express.js — это крутой фреймворк для Node.js, который позволяет быстро создавать веб-приложения и API. Следуй этому гайду, чтобы создать свой первый сервер на Express.js!

1. **Устанавливаем Express.js**:
   - Установи Express.js с помощью npm:
     ```bash
     npm install express
     ```

2. **Создаем файл сервера**:
   - Создай файл `server.js` и добавь туда код:
     ```javascript
     const express = require('express');
     const app = express();
     const port = 3000;

     app.get('/', (req, res) => {
       res.send('Привет, мир!');
     });

     app.listen(port, () => {
       console.log(`Сервер запущен на http://localhost:${port}`);
     });
     ```

3. **Запускаем сервер**:
   - Запусти сервер командой:
     ```bash
     node server.js
     ```
   - Открой браузер и перейди на `http://localhost:3000`. Увидишь сообщение "Привет, мир!".

4. **Добавляем маршруты**:
   - Добавь маршрут для `/about`:
     ```javascript
     app.get('/about', (req, res) => {
       res.send('Это страница "О нас"');
     });
     ```

5. **Используем статические файлы**:
   - Чтобы обслуживать статические файлы (CSS, JS, картинки), используй `express.static`:
     ```javascript
     app.use(express.static('public'));
     ```
   - Создай папку `public` и кидай туда свои файлы.

6. **Обрабатываем POST-запросы**:
   - Установи `body-parser` для обработки POST-запросов:
     ```bash
     npm install body-parser
     ```
   - Добавь `body-parser` в сервер:
     ```javascript
     const bodyParser = require('body-parser');
     app.use(bodyParser.urlencoded({ extended: false }));

     app.post('/submit', (req, res) => {
       res.send(`Привет, ${req.body.name}!`);
     });
     ```

7. **Используем шаблонизатор**:
   - Установи EJS для генерации HTML:
     ```bash
     npm install ejs
     ```
   - Настрой Express для использования EJS:
     ```javascript
     app.set('view engine', 'ejs');

     app.get('/profile', (req, res) => {
       res.render('profile', { name: 'Иван' });
     });
     ```
   - Создай файл `views/profile.ejs`:
     ```html
     <h1>Привет, <%= name %>!</h1>
     ```

🎉 Вуаля! Ты создал свой первый сервер на Express.js. Теперь можешь добавлять новые маршруты, обработчики и функционал. Удачи в разработке!
