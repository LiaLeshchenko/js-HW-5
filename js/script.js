// 1. Створіть змінну, що симулює вибір варіанта зі
// списку.Виводьте повідомлення залежно від обраного
// варіанта: "Кава", "Чай" або "Сік".Використайте switch

const option = "Кава";
switch (option) {
  case "Кава":
        console.log("Кава");
        break
  case "Чай":
        console.log("Чай");
        break
  case "Сік":
        console.log("Сік");
        break
    default:
        console.log("involet option");
}

// 2. Створіть змінну для зберігання введеного
// рядка, який може бути днем тижня.Якщо це робочий
// день — виведіть повідомлення про робочий день,
//     якщо вихідний — про вихідний.

const day = "monday";
switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Робочий день");
    break;
    case "saturnday":
    case "sunday":
        console.log("Вихідний день");
    break;
  default:
    console.log("involet option");
}

// 3. Створіть змінну для зберігання номера
// місяця.За номером місяця визначайте пору року
//  і виводьте відповідне повідомлення.
const month = 1;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("осінь");
    break;
  default:
    console.log("involet option");
}

// 4. Створіть змінну для зберігання назви кольору.
//  Виводьте повідомлення відповідно до вибраного
// кольору: якщо "червоний" — "стоп", "зелений" —
// "йти", "жовтий" — "чекати".

const color = "зелений";
switch (color) {
  case "зелений":
    console.log("йти");
    break;
  case "жовтий":
    console.log("чекати");
    break;
  case "червоний":
    console.log("стоп");
    break;
  default:
    console.log("involet option");
}

// 5. Створіть змінні для зберігання двох 
// чисел та оператора(як у списку select).
// Виконайте відповідну операцію та виведіть
// результат.У випадку ділення на нуль — виведіть
// попередження.

const namber1 = 1;
const namber2 = 2;
const оператор = "+";
switch (оператор) {
  case "+":
    console.log("додавання", namber1 + namber2);
    break;
  case "*":
    console.log("множення", namber1 * namber2);
    break;
  case "-":
    console.log("віднімання", namber1 - namber2);
    break;
  case "/":
    console.log("ділення", namber1 / namber2);
    break;
  default:
    console.log("involet option");
}

