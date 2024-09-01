# База знаний MWNODES

## В этом репозитории вы можете отредактировать нашу базу знаний

### Чтобы сделать это
* Создайте нужный файл в папке docs (или создайте подпапку в docs, если это категория)
* Напишите статью в формате Markdown
* Добавьте статью (и категорию) в sidebars.js

```js
// Статья без категории
{
 type: 'doc',
 id: 'filename_without_.md',
},
```

```js
// Статья в категории
{
    type: 'category',
    label: '📍 Название Категории',
    items: [
      {
        type: 'doc',
        id: 'folder_name/filename_without_.md',
      },
      
    ],
},
```

:::note
При добавлении в sidebars.js указывайте имя файла без md, например `myfile.md` нужно записать просто как `myfile`
:::
