console.log("Задание 1");
const arr = [1, 5, 7, 9];
const min = Math.min(...arr); 
console.log(min);

console.log("Задание 2");
function createCounter() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count,
    };
}

// Пример использования:
const counter = createCounter();
counter.increment(); 
console.log(counter.getCount());
counter.decrement(); 
console.log(counter.getCount());

console.log("Задание 3");
function findElementByClass(rootElement, className) {
    if (!rootElement || !rootElement.classList) return null; // Проверка на отсутствие корневого элемента или класса
    if (rootElement.classList.contains(className)) return rootElement; // Проверка наличия класса у текущего элемента

    for (let child of rootElement.children) {
        const result = findElementByClass(child, className); // Рекурсивный поиск в дочерних элементах
        if (result) return result; // Возвращаем первый найденный элемент
    }
    return null; // Элемент не найден
}

// Пример использования:
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); // Выведет первый найденный элемент с классом 'my-class'

