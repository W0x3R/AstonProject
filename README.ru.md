## 📖 Описание проекта:

Этот проект представляет собой приложение для просмотра постов и комментариев, основанное на публичном API <a href = 'https://jsonplaceholder.typicode.com/'>JSONPlaceholder.</a>, созданное в рамках React-интенсива от компании Aston.


### 🖥️ Реализованный функционал:

- Реализовал файловую структуру проекта по архитектуре Feature-Sliced Design.

- Настроил роутинг (React Router) и страницы: посты, пользователи, альбомы, комментарии.

- Подключил работу с API через RTK Query (posts, users, albums и др.), реализовал кэширование, инвалидацию запросов и загрузку данных по id.

- Настроил глобальное состояние через Redux Toolkit (createEntityAdapter, слайсы, селекторы).

- Реализовал функционал: модальные окна (React.Portal + Compound Components), аккордеон комментариев, фильтрация постов, ленивые загрузки компонентов с fallback.

- Добавил ThemeContext (Provider, кастомный хук, переключатель темы).

- Использовал HOC withLoading для расширения компонентов.

- Типизировал проект с помощью TypeScript (модели данных, Props, RTK Query).

⚡ Итог: приложение SPA с навигацией, темизацией, API-интеграцией и современными паттернами (HOC, Compound Components, Context, Feature-Sliced Design).

## 🚀 Deploy

[Посмотреть сайт в действии →](https://w0x3r.github.io/React-Intensive-Project)

---

## 🛠 Технологии проекта

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Context](https://img.shields.io/badge/React_Context-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---


## 🛠 Установка проекта

1. Клонировать репозиторий:

```bash
 git clone https://w0x3r.github.io/React-Intensive-Project
```

2. Перейти в папку проекта

```
 cd React-Intensive-Project
```

3. Установить зависимости

```
 npm install
```

4. Запустить локальный сервер

```
npm run dev
```