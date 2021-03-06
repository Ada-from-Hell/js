/*
Задание No1. Последнее значение цикла
Какое последнее значение выведет этот код? Почему?
let i = 3;
while (i) {
    alert (i--);
}

Я думала, что будет результат "2", так как i-- - это декремент, который уменьшает
значение на один, но, пока i не будет равно 0, условие будет истиной, поэтому
последний результат будет "1".
 */

/*
Задание No2.
Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
возрастанию, то удвоить их; в противном случае заменить значение каждой
переменной на противоположное. Вывести новые значения переменных A, B, C.
*/

let A = 66;
let B = 27;
let C = 69;
if (A > B && B > C) {
    alert(A *= 2);
    alert(B *= 2);
    alert(C *= 2);
}
else {
    alert(A /= -1);
    alert(B /= -1);
    alert(C /= -1);
}

/*
Задание No3.
Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
возрастанию или убыванию, то удвоить их; в противном случае заменить значение
каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
*/

let A = 92;
let B = 76;
let C = 49;
if (A > B && B > C || C > B && B > A) {
    alert(A *= 2);
    alert(B *= 2);
    alert(C *= 2);
}
else {
    alert(A /= -1);
    alert(B /= -1);
    alert(C /= -1);
}

/*
Задание No4.
На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
точек (B или C) расположена ближе к A, и вывести эту точку и её расстояние от точки A.
*/

let A = 79;
let B = 42;
let C = 47;
if (A > B && B > C) {
    alert(B);
    alert(A-B);
}
else if (A > C && C > B) {
    alert(C);
    alert(A - C);
}
else {
    alert('Error.');
}

/*
Задание No5.
Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом
координат, то вывести 0. Если точка не совпадает с начало координат, но лежит на оси
OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных
осях, то вывести 3.
*/

let X = 0;
let Y = 3;
if (X == 0 && Y == 0) {
    alert(0);
}
else if (X == 0) {
    alert(1);
}
else if (Y == 0) {
    alert(2);
}
else {
    alert(3);
}

/*
Задание No6.
Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
номер координатной четверти, в которой находится данная точка.
*/

let X = 2;
let Y = -3;
if (X > 0 && Y > 0) {
    alert('Первая четверть.');
}
else if (X < 0 && Y > 0) {
    alert('Вторая четверть.');
}
else if (X < 0 && Y < 0) {
    alert('Третья четверть.');
}
else if (X > 0 && Y < 0) {
    alert('Четвёртая четверть.');
}

/*
Задание No7.
Даны целочисленные координаты трёх вершин прямоугольника, стороны которого
параллельны координатным осям. Найти координаты его четвёртой вершины.
*/

let X1 = -3;
let Y1 = 2;
let X2 = 7;
let Y2 = 2;
let X3 = -3;
let Y3 = -5;
if (X1 == X3 && Y1 == Y2) {
    alert(`X4 = ${X2} and X4 = ${Y3}`)
}

/*
Задание No8.
Дан номер года (положительное целое число). Определить количество дней в этом
году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней.
Високосным считается год, делящийся на 4, за исключением тех годов, которые
делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются
високосными, а 1200 и 2000 — являются).
*/

let a = 2000;
if (a % 100 == 0 && a % 400 !== 0) {
    alert(365);
}
else if (a % 4 == 0) {
    alert(366);
    if (a % 100 !== 0 && a % 400 == 0) {
        alert(365);
    }
}

/*
Задание No10.
Дано целое число, лежащее в диапазоне 1 – 999. Вывести его строку - описание вида
«чётное двузначное число», «нечётное трёхзначное число» и т. д.
*/

let a = 999;
if (a > 0 && a < 10 && a % 2 == 0) {
    alert('Чётное однозначное число.');
}
else if (a > 0 && a < 10 && a % 2 !== 0) {
    alert('Нечётное однозначное число.');
}
else if (a >= 10 && a < 100 && a % 2 == 0) {
    alert('Чётное двузначное число.');
}
else if (a >= 10 && a < 100 && a % 2 !== 0) {
    alert('Нечётное двузначное число.');
}
else if (a >= 100 && a < 999 && a % 2 == 0) {
    alert('Чётное трёхзначное число.');
}
else if (a >= 100 && a <= 999 && a % 2 !== 0) {
    alert('Нечётное трёхзначное число.');
}

/*
Задание No11. Какие значения выведет цикл while?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert (i);
Префиксная форма увеличения увеличивает значение на единицу, поэтому выведутся
значения от 1 до 4.
Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert (i);
Постфиксная форма увеличения увеличивает значение на единицу, но затем возвращает
старое значение, поэтому выведутся значения от 1 до 5.
*/

/*
Задание No12. Какие значения выведет цикл for?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?
Постфиксная форма:
for (let i = 0; i < 5; i++) alert (i);
Префиксная форма:
for (let i = 0; i < 5; ++i) alert (i);
Оба цикла выведут alert с одинаковыми значениями, так как, если нужно только
увеличить перменную - без разницы, какую форму использовать.
*/

/*
Задание No13. Выведите чётные числа
При помощи цикла for выведите чётные числа от 2 до 10.
*/
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

/*
Задание No14. Замените for на while
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert (`number ${i}!`);
}
*/

let i = 0;
while (i < 3) {
    alert (`number ${i}!`);
    i++;
}

/*
Задание No15. Повторять цикл, пока ввод неверен.
Напишите цикл, который предлагает prompt ввести число, большее 100. Если
посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку
нечисловых строк в этой задаче необязательно.
*/

let i = prompt('Введите число, большее 100.')
while (i <= 100 && i)
    i = prompt('Введите число, большее 100.')
i++;

/*
Задание No16. Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится,
кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число от 1 до n есть
остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/

naturalNumber:
let n = 10;
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0 && i % 1 == 0) continue naturalNumber;
    }
    alert (i);
}

/*
Задание No17.
Вычислить среднее арифметическое двух чисел, введённых пользователем.
*/

let i = prompt('Введите первое число.')
let y = prompt('Введите второе число.')
alert ((+i + +y) / 2);

/*
Задание No18.
Напишите скрипт, который вычислит квадрат любого введённого числа.
*/

let i = prompt('Введите первое число.');
alert (i * i);

/*
Задание No19.
Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из
них.
*/

let i = prompt('Введите первое число.');
let j = prompt('Введите второе число.');
let k = prompt('Введите третье число.');
if (i > j && j > k) {
    alert(i - k);
} else if (i > k && k > j) {
    alert(i - j);
} else if (j > i && i > k) {
    alert(j - k);
} else if (k > i && i > j) {
    alert(k - j);
}

/*
Задание No20.
Напишите программу, проверяющую число, введённое с клавиатуры, на четность.
*/

let i = prompt('Введите число.');
if (i % 2 == 0) {
    alert('Число чётное.');
} else if (i % 2 !== 0) {
    alert('Число нечётное.');
}

/*
Задание No21.
Дано натуральное число а (a < 100). Напишите программу, выводящую на экран
количество цифр в этом числе и сумму этих цифр.
*/

let a = "99";
alert(a.length);
alert(+(a[0]) + +(a[1]));

/*
Задание No22.
Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в
сантиметры и наоборот. Диалог с пользователем реализовать через браузер.
*/

// 22.1
let sm = prompt('Введите число дюймов, которое необходимо перевести.');
let inch = sm * 2.54;
alert(`${sm} сантиметров = ${inch} дюймов`)

// 22.2
let inch = prompt('Введите число сантиметров, которое необходимо перевести.');
let sm = inch / 2.54;
alert(`${inch} дюймов = ${sm} сантиметров`)

/*
Задание No23. Найти сумму или произведение цифр трёхзначного числа
Пользователь вводит через prompt трёхзначное число. Проверить трёхзначное число
на чётность и найти сумму его цифр, если число чётное, или произведение его цифр,
если число нечётное.
*/

let i = prompt('Введите трёхзначное число.');
if (i % 2 == 0) {
    alert(+(i[0]) + +(i[1]) + +(i[2]));
}
else if (i % 2 !== 0) {
    alert(+(i[0]) * +(i[1]) * +(i[2]));
}

/*
Задание No24. Определить существование треугольника по трём сторонам
У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две
стороны просто <лягут> на третью, и треугольника не получится.
Пользователь вводит поочерёдно через prompt длины трёх сторон.
Напишите код, который должен определять, может ли существовать треугольник при
таких длинах. Т. е. нужно сравнить суммы двух любых сторон с оставшейся третьей
стороной. Чтобы треугольник существовал, сумма всегда должна быть больше
отдельной стороны.
*/

let i = prompt('Введите длину первой стороны.');
let j = prompt('Введите длину второй стороны.');
let k = prompt('Введите длину третьей стороны.');
if ((i + j) > k) {
    alert('Это треугольник.');
}
else if ((i + k) > j) {
    alert('Это треугольник.');
}
else {
    alert('Это не треугольник.');
}

/*
Задание No25. Принадлежность точки окружности
Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10) с центром в начале
координат.
Напишите код, который будет выводить сообщение о том, лежит ли данная точка
внутри окружности или за её пределами. Для извлечения квадратного корня из числа z
вам понадобится метод Math.sqrt(z).
Например: let a = Math.sqrt(4); // a=2
*/

let x = 4;
let y = 9;
let R = 10;
let h = Math.sqrt((x * x) + (y * y));
if (h < R) {
    alert('Точка лежит внутри окружности.');
}
else if (h > R) {
    alert('Точка лежит вне окружности.');
}

/*
Задание No26. Объекты
Напишите код, выполнив задание из каждого пункта отдельной строкой:
• Создайте пустой объект user.
• Добавьте свойство name со значением John.
• Добавьте свойство surname со значением Smith.
• Измените значение свойства name на Pete.
• Удалите свойство name из объекта.
*/

let user;
let user = {name = "John"};
let user = {surname = "Smith"};
user.name = "Pete";
delete user.name;

/*
Задание No27. Объекты-константы
Можно ли изменить объект, объявленный с помощью const?
const user = {
name: "John"
};
user.name = "Pete"; // это будет работать?
Это не будет работать, так как константы нельзя перезаписывать.
*/

/*
Задание No28. Сумма свойств объекта
Есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной
sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

alert (salaries.John + salaries.Ann + salaries.Pete);
if (salaries == '') {
    alert (0);
}

/*
Задание No29. Бесконечный цикл по ошибке
Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
    i += 0.2;
}
Это происходит из-за потери точности из-за дробей.
*/
