# module-mask-for-phone-by-digitalize

Пример работы можно посмотреть [здесь](http://c95387ot.beget.tech).


Маска для ввода российских и зарубежных номеров телефона. 

Корректно отрабатывает номера на 7, 8 и 9.

Код РФ можно не указывать, подставляется автоматически.

Не выбрасывает курсор в конец строки, что позволяет комфортно редактировать введенные данные.

Копипаста не ломает маску.

Авторский скрипт: [Alexey Goloburdin](https://github.com/alexey-goloburdin/phoneinput)


## Подключение модуля
Импорт модуля со скриптом:
```javascript
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    mask();
});
```
 
