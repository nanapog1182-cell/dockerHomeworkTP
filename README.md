# Docker Homework: Genshin Impact Character Generator

## Как запустить

### 1. Собрать и запустить генератор
./run.sh build_generator
./run.sh run_generator

### 2. Собрать и запустить аналитик
./run.sh build_reporter
./run.sh run_reporter

### 3. Запустить веб-сервер и открыть отчёт
./run.sh report_server
Открой в браузере: http://localhost:8080/report.html

## Все команды

./run.sh build_generator - собирает образ генератора
./run.sh run_generator - генерирует data.csv
./run.sh create_local_data - генерирует данные локально (без Docker)
./run.sh build_reporter - собирает образ аналитика
./run.sh run_reporter - создаёт report.html
./run.sh structure - показывает структуру проекта
./run.sh clear_data - очищает папку data/
./run.sh inside_generator - показывает содержимое папки data из контейнера генератора
./run.sh inside_reporter - показывает содержимое папки data из контейнера аналитика
./run.sh report_server - запускает веб-сервер на порту 8080
./run.sh stop_server - останавливает веб-сервер

## Данные

data/data.csv - сгенерированные персонажи Genshin Impact
data/report.html - HTML-отчёт с таблицей

## Тема

Персонажи Genshin Impact. Генерируется 100 персонажей со случайными именами, стихией, оружием, редкостью (4 или 5 звезд), регионом и атакой (от 400 до 100000).


## Как проверить что всё работает

1. ./run.sh build_generator
2. ./run.sh run_generator
3. ./run.sh build_reporter
4. ./run.sh run_reporter
5. ./run.sh report_server
6. Открыть http://localhost:8080/report.html


## Погребная Анна, ББИ2505
