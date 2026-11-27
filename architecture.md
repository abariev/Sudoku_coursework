# Архитектурные требования проекта «Веб-приложение Судоку»

## 1. Структура проекта

Репозиторий организован в виде монорепозитория из двух независимых TypeScript-проектов с типом `"module"` (ES6-модули):

1. **`ui-library` (`@sudoku-app/ui-library`)** — библиотека переиспользуемых презентационных UI-компонентов. Собирается в ES-модуль (`dist/index.js`), генерирует декларации типов (`dist/index.d.ts`) и изолированный файл стилей (`dist/index.css`). Не содержит бизнес-логики и маршрутизации.
2. **`frontend` (`sudoku-frontend`)** — основное клиентское веб-приложение (SPA). Отвечает за маршрутизацию, композицию страниц, управление состоянием сессии и демонстрацию интерфейса игры.

### Структура папок и файлов

```text
Sudoku-game/
├── .gitignore                    # Исключение node_modules, dist, coverage
├── architecture.md               # Архитектурная документация
├── mvp.md                        # Функциональные требования к MVP
├── README.md                     # Описание, запуск, скриншоты
├── ui-library/
│   ├── eslint.config.js          # Конфигурация ESLint (ES6)
│   ├── jest.config.js            # Конфигурация Jest (ES6)
│   ├── package.json              # Манифест пакета и exports
│   ├── tsconfig.json             # Корневая конфигурация TypeScript
│   ├── tsconfig.app.json         # Настройки TS для исходников библиотеки
│   ├── tsconfig.node.json        # Настройки TS для конфигурации Vite
│   ├── vite.config.ts            # Сборка библиотеки (library mode)
│   └── src/
│       ├── index.ts              # Точка входа (реэкспорт компонентов и типов)
│       ├── types.ts              # Общие типы данных (CellData, CellPosition)
│       ├── setupTests.ts         # Инициализация jest-dom
│       └── components/
│           ├── Button/           # Базовая кнопка (Button.tsx, Button.module.css, Button.test.tsx)
│           ├── Card/             # Контейнер-карточка (Card.tsx, Card.module.css, Card.test.tsx)
│           ├── NumberPanel/      # Панель ввода цифр 1–9 (NumberPanel.tsx, .module.css, .test.tsx)
│           └── SudokuGrid/       # Сетка Судоку 9×9 (SudokuGrid.tsx, .module.css, .test.tsx)
└── frontend/
    ├── eslint.config.js          # Конфигурация ESLint (ES6)
    ├── index.html                # HTML-шаблон
    ├── jest.config.js            # Конфигурация Jest (ES6)
    ├── package.json              # Зависимости и скрипты приложения
    ├── tsconfig.json             # Корневая конфигурация TypeScript
    ├── tsconfig.app.json         # Настройки TS для исходников приложения
    ├── tsconfig.node.json        # Настройки TS для конфигурации Vite
    ├── vite.config.ts            # Конфигурация Vite
    ├── images/                   # Скриншоты для README
    └── src/
        ├── App.tsx               # Корневой компонент и таблица маршрутов
        ├── App.css               # Базовые стили приложения
        ├── App.test.tsx          # Интеграционные/smoke-тесты маршрутизации
        ├── main.tsx              # Точка входа ReactDOM
        ├── setupTests.ts         # Полифиллы TextEncoder/TextDecoder и jest-dom
        ├── components/           # Прикладные компоненты (Layout, ProtectedRoute, GameStatusBar)
        └── pages/                # Компоненты страниц (Home, Game, Stats, Rules, Profile, Login, NotFound)
```

## 2. Используемые библиотеки

### Основные зависимости (runtime)

| Библиотека | Версия | Назначение |
| :--- | :--- | :--- |
| `react` | `^19.3.0` | Построение компонентного пользовательского интерфейса |
| `react-dom` | `^19.3.0` | Рендеринг React-дерева в DOM браузера |
| `react-router-dom` | `^7.5.0` | Клиентская маршрутизация, вложенные макеты, параметры URL и защищённые маршруты |
| `@sudoku-app/ui-library` | `file:../ui-library` | Локальная библиотека общих UI-компонентов |

### Инструменты разработки, сборки, линтинга и тестирования

| Библиотека | Версия | Назначение |
| :--- | :--- | :--- |
| `typescript` | `~5.9.3` | Статическая типизация (строгий режим, запрет `any`) |
| `vite` | `^7.1.11` | Dev-сервер и продакшен-сборка обоих проектов |
| `@vitejs/plugin-react` | `^5.0.4` | Поддержка React Fast Refresh и JSX в Vite |
| `vite-plugin-dts` | `^4.2.1` | Генерация `.d.ts` файлов при сборке `ui-library` |
| `eslint` | `^9.36.0` | Статический анализ кода и проверка стиля |
| `@eslint/js`, `typescript-eslint` | `^9.36.0` / `^8.45.0` | Правила линтинга для JS и TypeScript |
| `eslint-plugin-import` | `^2.32.0` | Контроль порядка и группировки импортов |
| `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | `^7.37.5` / `^7.1.1` / `^0.5.7` | Специфичные правила для React |
| `jest`, `jest-environment-jsdom`, `ts-jest` | `^30.2.0` / `^30.2.0` / `^29.4.5` | Запуск юнит-тестов и расчёт покрытия |
| `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event` | `^16.3.0` / `~6.9.1` / `^14.6.1` | Тестирование компонентов через DOM и действия пользователя |
| `identity-obj-proxy` | `^3.0.0` | Мокирование CSS Modules в Jest |

## 3. Разрабатываемые компоненты

### В проекте `ui-library`

* **`Button`** — универсальная кнопка с вариантами оформления (`primary`, `secondary`, `danger`), поддержкой `disabled` и обработчиком клика.
* **`Card`** — контейнер-карточка с опциональным заголовком для визуального выделения логических блоков.
* **`SudokuGrid`** — компонент игрового поля 9×9; принимает состояние сетки (`CellData[][]`), активную ячейку (`CellPosition | null`) и колбэк выбора ячейки.
* **`NumberPanel`** — панель ввода цифр 1–9 и кнопка «Очистить»; блокирует цифры, использованные 9 раз, и передаёт выбранное значение через колбэк.

### В проекте `frontend`

* **`Layout`** — общий каркас страниц с шапкой навигации, кнопкой переключения статуса авторизации, областью контента (`<Outlet />`) и футером.
* **`ProtectedRoute`** — обёртка для защищённых маршрутов; при отсутствии авторизации перенаправляет на `/login`.
* **`GameStatusBar`** — панель отображения статуса партии (уровень сложности, таймер, счётчик ошибок).
* **`HomePage`** — стартовая страница с выбором уровня сложности и переходом к новой игре.
* **`GamePage`** — страница игровой партии с полем, панелью ввода цифр и строкой статуса.
* **`StatsPage`** — страница статистики и истории сыгранных партий.
* **`RulesPage`** — страница правил Судоку и советов по решению.
* **`ProfilePage`** — защищённая страница профиля и персональных настроек игрока.
* **`LoginPage`** — страница входа в аккаунт для доступа к защищённым разделам.
* **`NotFoundPage`** — страница ошибки 404 для неизвестных URL.

## 4. Структура роутинга

Корневой маршрут рендерит общий макет `Layout`, внутри которого через `<Outlet />` отображаются дочерние страницы:

| Маршрут | Страница | Вложенность / особенности |
| :--- | :--- | :--- |
| `/` | `HomePage` | Индексный маршрут внутри `Layout` |
| `/game/:difficulty` | `GamePage` | Маршрут с динамическим параметром `:difficulty` (`easy`, `medium`, `hard`) |
| `/stats` | `StatsPage` | Вложен в `Layout` |
| `/rules` | `RulesPage` | Вложен в `Layout` |
| `/profile` | `ProfilePage` | **Защищённый маршрут** (`Layout` → `ProtectedRoute` → `ProfilePage`), редирект на `/login` при отсутствии авторизации |
| `/login` | `LoginPage` | Вложен в `Layout`, точка входа для авторизации |
| `*` | `NotFoundPage` | Fallback-маршрут для несуществующих адресов |

## 5. Взаимодействие `frontend` с `ui-library`

* Пакет `@sudoku-app/ui-library` подключён в `frontend/package.json` как локальная зависимость через `"@sudoku-app/ui-library": "file:../ui-library"`.
* В `ui-library/package.json` настроено поле `"exports"`, открывающее публичные точки входа `.` (JS-бандл и TypeScript-типы) и `./index.css` (собранные стили).
* Приложение `frontend` импортирует компоненты и типы строго по имени пакета (`import { Button, Card, NumberPanel, SudokuGrid } from '@sudoku-app/ui-library'`) и стили (`import '@sudoku-app/ui-library/index.css'`), без обращения к внутренним исходникам или папке `dist`.
* `react`, `react-dom` и `react/jsx-runtime` указаны в `peerDependencies` и `rollupOptions.external` библиотеки, что исключает дублирование экземпляров React в бандле.