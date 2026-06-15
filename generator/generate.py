import csv
import random
import os

os.makedirs('/app/data', exist_ok=True)

columns = ["id", "name", "element", "weapon", "rarity", "region", "attack"]
num_rows = 100
names = ["Люмин", "Итер", "Эмбер", "Кэйа", "Лиза", "Ноэль", "Дилюк", "Джинн", "Венти", "Кли",
         "Чжун Ли", "Нин Гуан", "Кэ Цин", "Сяо", "Гань Юй", "Ху Тао", "Сёгун Райдэн", "Яэ Мико",
         "Камисато Аяка", "Кадзуха", "Кокоми", "Странник", "Нахида", "Аль-Хайтам", "Дэхья", "Нилу",
         "Лини", "Фурина", "Нёвиллет", "Навия", "Арлекино", "Клоринда", "Ризли",  "Эскофье",
         "Качина", "Кинич", "Мавуика", "Вареса", "Ифа", "Оророн", "Шилонен",  "Ягода",
         "Флинс", "Колумбина", "Айно", "Иллуги", "Инеффа", "Лаума", "Нефер", "Лоэн"]
elements = ["Пиро", "Гидро", "Анемо", "Электро", "Дендро", "Крио", "Гео"]
weapons = ["Меч", "Двуручный меч", "Копье", "Лук", "Катализатор"]
regions = ["Мондштадт", "Ли Юэ", "Инадзума", "Сумеру", "Фонтейн", "Натлан", "Нод Край", "Снежная"]

with open('/app/data/data.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(columns)
    for i in range(1, num_rows + 1):
        writer.writerow([i, random.choice(names), random.choice(elements), random.choice(weapons), random.choice([4,5]), random.choice(regions), random.randint(400, 100000)])

print(f"Создано {num_rows} персонажей")