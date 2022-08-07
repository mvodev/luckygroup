  # Тестовое задание компании Lucky Group.
  ## Ссылка на Github Pages
[]
  ## Клонирование
      git clone https://github.com/mvodev/luckygroup.git
  ## Установка
      npm i
  ## Сборка проекта в режиме production
      npm run build
  ## Запуск webpack dev server
      npm run start
  ## Результат сборки проекта
  Находится в папке dist

  ## Задание
Адаптивно сверстать сайт, мобильную версию предусмотреть на Ваше усмотрение.
Навигация на мобильной версии должна превращаться в выпадающий список
При открытии сайта, через 3 секунды все иконки должны выезжать из под зеленной плашки, по очереди с задержкой 0.4 секунды каждая, после того как все флаги расположатся на своих местах как в макете, они должны бесконечно крутится по часовой, проходя под фотографией девушки.
Поле поиска должно иметь ограничение на кол-во вводимых символов:
Минимум 4  символа.
Максимум 12 символов.
Так же должно быть ограничение на ввод этих символов:
```
!@#$%^&*()
```
Все остальные символы допускаются для ввода.
Не обязательные пункты:
Описание под заголовком, должно подтягиваться через ajax запрос с данного сервиса:
[https://baconipsum.com/api/?type=lucky]