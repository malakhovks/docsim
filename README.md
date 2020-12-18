# docsim / UkrVectōrēs

**docsim/UkrVectōrēs** - An NLU-Powered tool for knowledge discovery, classification, diagnostics and prediction.

## Choose your language / Оберіть мову

- **[Українська](#toc-ua)**
- **[English](#toc-en)**

-------

<a name="toc-ua"></a>
## docsim/UkrVectōrēs - інструмент, що працює на основі NLU, для виявлення, класифікації, діагностики та прогнозування знань.

Сервіс **docsim/UkrVectōrēs** обчислює семантичні відношення між сутностями української мови в рамках обраної дистрибутино-семантичної моделі векторного представлення сутностей.

### Поняття векторного представлення сутностей

Векторне представлення (англ. Word embedding) – це техніка, яка розглядає сутності (слова, терміни, документи та інше) як вектори, відносна схожість між якими корелює з семантичною подібністю. Така техніка є одним із найуспішніших прикладів застосування навчання без учителя (unsupervised learning). Векторні представлення – техніка для опрацювання природної мови, альтернативна до традиційної, яка дозволяє відображати сутності (слова, словосполучення, терміни або документи зі "словника" на вектори дійсних чисел в малому щодо розміру "словника" просторі, а подібність між векторами корелює з семантичною подібністю між сутностями.

### Застосування векторних представлень

Сучасні векторні моделі дозволяють обчислити семантичну подібність між словами, реченнями чи документами, і саме на цих можливостях ґрунтується їхнє використання для розв’язання завдань опрацювання природної мови. Векторні представлення використовують безпосередньо, а також як ознаки для розв’язання насамперед завдань класифікації та кластеризації: розпізнавання іменованих сутностей, морфологічний аналіз слів, аналіз тональности текстів, класифікація/кластеризація документів, класифікація/кластеризація пошукових запитів, класифікація веб-сторінок, ранжування документів, кластеризація заголовків веб-сторінок. Також із використанням векторних представлень вирішують завдання ґенерації текстів, машинного перекладання, виявлення парафраз, моделювання текстів.

### Зміст

- **[Призначення та функції](#features-ua)**
- **[Компіляція, збірка та розгортання мережевого засобу docsim (з GitHub репозиторію) в середовищі UNIX-подібних операційних систем Linux](#unix-deployment-ua)**

-------

<a name="toc-en"></a>
## docsim/UkrVectōrēs - An NLU-Powered tool for knowledge discovery, classification, diagnostics and prediction.

### Table of Contents

<!-- - **[Features](#features-en)** -->
- **[Building and running under UNIX (Linux/MacOS) with Docker](#building-running-linux)**

-------

<a name="building-running-linux"></a>
## Building and running under UNIX (Linux/MacOS) with Docker

Clone from GitHub repository:

```bash
git clone https://username:token@github.com/username/repo_name.git
```

Or clone from the specific branch/tag of GitHub repository:

```bash
git clone --depth=1 --branch=<tag_name> <repo_url>
```

Checkout the branch you want to use:

```bash
git checkout <branch_name>
```

Build an docker image from a Dockerfile (It creates an image named `docsim_image`):

```bash
docker build . -t docsim_image
```

You can run the image `docsim_image` now with the command:

```bash
docker run --name docsim -d -p 80:80 docsim_image
```
