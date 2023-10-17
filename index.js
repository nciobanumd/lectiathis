
/* =============EXERCITIU 1 ===================*/

function fibonacci (number) {
    if (number < 2) {
        return 1 
    }

    return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log(fibonacci(10))


/* =========EXERCITIU 2============ */

const salutare = function (arg, arg1) {
    return 'Ce mai faci draga ' + this.nume + arg + arg1

}

const obj = {
    nume: 'Nadea',
    salutare: salutare
}

const obj1 = {
    nume: 'Traian',
    salutare: salutare
}

const bind = salutare.bind(obj)


console.log(obj.salutare('?', '!'))
console.log(obj1.salutare('?', '!'))
console.log(obj1.salutare.call(obj, ', unde te duci', '?'))
console.log(obj.salutare.apply(obj1, [', de unde vii', '?']))
console.log(bind(', Salutare', '!'));
