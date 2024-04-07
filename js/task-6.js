// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]
function removeItem(arr, ...rest) {
    const newRemoveItem = [];
    for (const item of arr) {
        if (!rest.includes(item)) {
            newRemoveItem.push(item);
        }
    } 
    return newRemoveItem;
}
console.log(removeItem([1, 2, 3, 1, 2], 1, 2));