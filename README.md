# docsim / UkrVectōrēs

**docsim/UkrVectōrēs** – An NLU-powered tool for knowledge discovery, classification, diagnostics and prediction.

You can preview a completed latest version of the UkrVectōrēs app here:

- without ssl certificate [http://test.ulif.org.ua:51082](http://test.ulif.org.ua:51082)
- with self-singed ssl certificate [https://test.ulif.org.ua:51043](https://test.ulif.org.ua:51043)

## Caution/Disclaimer

Project and documentation are in active development! For any technical clarifications and questions contact us via email [malakhovks@nas.gov.ua](mailto:malakhovks@nas.gov.ua) or via Issues.

## Choose your language / Оберіть мову

- **[Українська](#toc-ua)**
- **[English](#toc-en)**

-------

<a name="toc-ua"></a>
## docsim/UkrVectōrēs – інструмент, "когнітивно-семантичний калькулятор", що працює на основі NLU, для виявлення, класифікації, діагностики та прогнозування знань.

Сервіс **docsim/UkrVectōrēs** обчислює семантичні відношення між сутностями української мови в рамках обраної дистрибутино-семантичної моделі векторного представлення сутностей.

Ви можете переглянути актуальну версію додатка UkrVectōrēs за посиланнями:

- без ssl сертифікату [http://test.ulif.org.ua:51082](http://test.ulif.org.ua:51082)
- з self-singed ssl сертифікатом [https://test.ulif.org.ua:51043](https://test.ulif.org.ua:51043)

### Увага

Проєкт та документація знаходяться в активній розробці! За будь-якими технічними роз'ясненнями та питаннями зв'яжіться з нами електронною поштою [malakhovks@nas.gov.ua](mailto:malakhovks@nas.gov.ua) або через розділ Issues.

### Поняття векторного представлення сутностей

Векторне представлення (англ. Word embedding) – це техніка, яка розглядає сутності (слова, терміни, документи та інше) як вектори, відносна схожість між якими корелює з семантичною подібністю. Така техніка є одним із найуспішніших прикладів застосування навчання без учителя (unsupervised learning). Векторні представлення – техніка для опрацювання природної мови, альтернативна до традиційної, яка дозволяє відображати сутності (слова, словосполучення, терміни або документи зі "словника" на вектори дійсних чисел в малому щодо розміру "словника" просторі, а подібність між векторами корелює з семантичною подібністю між сутностями.

### Застосування векторних представлень

Сучасні векторні моделі дозволяють обчислити семантичну подібність між словами, реченнями чи документами, і саме на цих можливостях ґрунтується їхнє використання для розв’язання завдань опрацювання природної мови. Векторні представлення використовують безпосередньо, а також як ознаки для розв’язання насамперед завдань класифікації та кластеризації: розпізнавання іменованих сутностей, морфологічний аналіз слів, аналіз тональности текстів, класифікація/кластеризація документів, класифікація/кластеризація пошукових запитів, класифікація веб-сторінок, ранжування документів, кластеризація заголовків веб-сторінок. Також із використанням векторних представлень вирішують завдання ґенерації текстів, машинного перекладання, виявлення парафраз, моделювання текстів.

### Зміст

- **[Призначення та функції](#features-ua)**
- **[Програмні залежності](#dependencies-ua)**
- **[Компіляція, збірка та розгортання мережевого засобу docsim (з GitHub репозиторію) в середовищі UNIX-подібних операційних систем Linux](#unix-deployment-ua)**

-------

<a name="features-ua"></a>
## Призначення та функції

Мережевий засіб **docsim/UkrVectōrēs** (у вигляді веб-сервісу з API) – це інструмент, який дозволяє досліджувати семантичні відношення між словами в рамках прогностичних моделей дистрибутивної семантики, з використанням програмної бібліотеки з відкритим вихідним кодом для передової обробки та математичного моделювання природної мови [gensim](https://github.com/RaRe-Technologies/gensim) (яка включає інтерфейс прикладного програмування для роботи з алгоритмами Word2vec, fastText та інші).

Можна образно назвати Мережевий засіб **docsim/UkrVectōrēs** "когнітивно-семантичним калькулятором". Користувач може вибрати одну або кілька з ретельно підготовлених (або використовувати інші векторні представлення для слів Word Embeddings, які вільно поширюються) прогностичних моделей дистрибутивної семантики, навчених на різних корпусах текстів, зокрема, таких наборів даних:

- проблеми поетики творчого доробку Олеся Гончара;
- художня література;
- книга «Серце віддаю дітям».

Мережевий засіб **docsim/UkrVectōrēs** охоплює наступні елементи дистрибутивно-семантичного аналізу:

- обчислювати семантичну схожість/близькість між парами слів в рамках обраної прогностичної моделі дистрибутивної семантики;
- знаходити слова, найближчі до заданого (з можливістю фільтрації за алфавітом і коефіцієнтом косинусної схожості/близькості) в рамках обраної прогностичної моделі дистрибутивної семантики (обчислення семантичних асоціатів). Коефіцієнт косинусної близькості патентів може приймати значення в проміжку [-1 ... 1]. Якщо коефіцієнт косинусної схожості/близькості сутностей – слів приймає значення в проміжку [-1 ... 0,5] – це свідчить про відсутність схожих контекстів в наборі даних та найменшу семантичну близькість слів. Якщо коефіцієнт косинусної схожості/близькості сутностей – слів приймає значення в проміжку [0,5 ... 1] – це свідчить про наявність схожих контекстів в наборі даних та більшу семантичну близькість слів. Чим більше коефіцієнтом косинусної схожості/близькості наближається до 1, тим більша семантична близькість слів та більше схожих контекстів в наборі даних;
- виконувати над векторами слів алгебраїчні операції (додавання, віднімання, пошук центру лексичного кластера і відстаней до цього центру) в рамках обраної прогностичної моделі дистрибутивної семантики;
- генерувати семантичні карти (з використанням програмного інструментарію з відкритим початковим кодом TensorFlow, а саме – TensorBoard) відношень між словами (це дозволяє виявляти семантичні кластери або тестувати гіпотези на таких кластерах);
- отримувати вектор (у вигляді масиву чисел) та його візуалізацію для заданого слова в рамках обраної прогностичної моделі дистрибутивної семантики;
- завантажити для подальшого використання обрану прогностичну модель дистрибутивної семантики;
- використовувати інші прогностичні моделі дистрибутивної семантики, які вільно поширюються, за допомоги налаштування конфігураційного файлу.

-------

<a name="dependencies-ua"></a>
## Програмні залежності

- Python 3.8.6+ – інтерпретатор та стандартні бібліотеки;
- gensim – програмна бібліотека з відкритим вихідним кодом для передової обробки та математичного моделювання природної мови;
- Flask – мікрофреймворк для веб-додатків;
- Flask-CORS – розширення Flask для обробки спільного використання ресурсів з різних джерел (англ. Cross-Origin Resource Sharing, CORS);
- uWSGI – веб-сервер і сервер веб-додатків, спочатку реалізований для запуску додатків Python через протокол WSGI (і його бінарний варіант uwsgi);
- Pandas – програмна бібліотека, написана для мови програмування Python для маніпулювання даними та їхнього аналізу. Вона, зокрема, пропонує структури даних та операції для маніпулювання чисельними таблицями та часовими рядами;
- nginx – вільний веб-сервер і проксі-серверl;
- Angular – написаний на TypeScript front-end фреймворк з відкритим кодом для розробки односторінкових застосунків (англ. Single-page application, SPA). В програмній інженерії терміни «front-end» та «back-end» розрізняють за принципом розділення відповідальності між рівнем представлення та рівнем доступу до даних відповідно. Front-end – це  інтерфейс для взаємодії між користувачем і back-end. Front-end та back-end можуть бути розподілені між однією або кількома системами. В програмній архітектурі може бути багато рівнів між апаратним забезпеченням та кінцевим користувачем. Кожен з цих рівнів може мати як front-end, так і back-end. Front – це абстракція, спрощення базового компоненту через надання користувачу зручного інтерфейсу взаємодію з SPA.
- Docker – інструментарій для управління ізольованими Linux-контейнерами.

-------

<a name="toc-en"></a>
## docsim/UkrVectōrēs - An NLU-Powered tool for knowledge discovery, classification, diagnostics and prediction.

You can preview a completed latest version of the UkrVectōrēs app here:

- without ssl certificate [http://test.ulif.org.ua:51082](http://test.ulif.org.ua:51082)
- with self-singed ssl certificate [https://test.ulif.org.ua:51043](https://test.ulif.org.ua:51043)

### Caution/Disclaimer

Project and documentation are in active development! For any technical clarifications and questions contact us via email [malakhovks@nas.gov.ua](mailto:malakhovks@nas.gov.ua) or via Issues.

### Table of Contents

- **[Features](#features-en)**
- **[Dependencies](#dependencies-en)**
- **[Building and running under UNIX (Linux/MacOS) with Docker](#building-running-linux)**

-------

<a name="features-en"></a>
## Features

You can think about **docsim/UkrVectōrēs** as a kind of "cognitive-semantic calculator".
The online toolkit **docsim/UkrVectōrēs** covers the following elements of distributional analysis:

- calculate semantic similarity between pairs of words;
- find words semantically closest to the query word;
- apply simple algebraic operations to word vectors (addition, subtraction, finding average vector for a group of words and distances to this average value);
- draw semantic maps of relations between input words (it is useful to explore clusters and oppositions, or to test your hypotheses about them);
- get the raw vectors (arrays of real values) and their visualizations for words in the chosen model;
- download default models;
- use other prognostic models distributive semantics freely distributed, by adjusting the configuration file.

-------

<a name="dependencies-en"></a>
## Dependencies

- Python 3.8.6+;
- gensim 3.8.3;
- Flask 1.1.2;
- Flask-CORS 3.0.9;
- uWSGI 2.0.19.1;
- Pandas latest;
- nginx latest;
- Angular latest;
- Docker latest;
- docker-compose.

-------

<a name="building-running-linux"></a>
## Building and running under UNIX (Linux/MacOS) with Docker

Clone from GitHub repository:

```bash
git clone https://github.com/malakhovks/docsim.git
```

Or clone from the specific branch/tag of GitHub repository:

```bash
git clone --depth=1 --branch=<tag_name> <repo_url>
```

Checkout the branch you want to use:

```bash
git checkout <branch_name>
```

Build an docker image from Dockerfile-nginx, Dockerfile-docsim with docker-compose:

```bash
docker-compose up -d
```
