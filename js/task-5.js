// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
function updateObject(obj, ...rest) {
  const newObj = { ...obj };
  for (const ell of rest) {
    delete newObj[ell];
  }
  /*for (const key of Object.keys(obj)) {
    if (!rest.includes(key)) {
      newObj[key] = obj[key];
    }
  }*/

  return newObj;
}
console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));
