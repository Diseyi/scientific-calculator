
const equalButton = document.getElementById('equal')
const display = document.getElementById('display')
const buttons = document.getElementsByTagName('button')

const pi = () => Math.PI
const getEulerNumber = () =>  Math.E
const squareroot = (num) => Math.sqrt(num)
const naturalLgrithm = (num) => Math.log(num)
const commonLogrithm = (num) => Math.log10(num)
const arcsin = (num) => Math.asin(num)
const arccos = (num) => Math.acos(num)
const arctan = (num) => Math.atan(num)

const piString = pi().toString()

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (display.value === 'Bad Expression' | display.value === 'NaN') {
            display.value = ''
        }
        else if (buttons[i].value === '=') {
            if (display.value === '') {
                display.value = ''
                return
            }
            evaluate()
        }
        else if (buttons[i].value === 'pi') {
            display.value = pi()
        }
        else if (buttons[i].value === 'euler') {
            display.value = getEulerNumber()
        }
        else if (buttons[i].value === 'x!') {
            display.value = factorial(display.value)
        }
        else if (buttons[i].value === 'AC') {
            display.value = ''
        }
        else if (buttons[i].value === 'log10(') {
            display.value = buttons[i].value
        }
        else if (buttons[i].value === 'log(') {
            display.value = buttons[i].value
        }
        else if (buttons[i].value === '√') {
            display.value = buttons[i].value
        }
        else if (buttons[i].value === 'asin(') {
            display.value = buttons[i].value
        }
        else if (buttons[i].value === 'atan(') {
            display.value = buttons[i].value
        }
        else if (buttons[i].value === 'acos(') {
            display.value = buttons[i].value
        }
        else if (buttons[i].value === 'del') {
            display.value = display.value.slice(0, -1)
        }
        else if (display.value === piString) {
            display.value = buttons[i].value
        }
        else if (display.value === 'NaN') {
            display.value = buttons[i].value
        }
        else {
            display.value += buttons[i].value
        }


    })
}

function evaluate() {
    let equation = display.value

    try {
        if (equation.includes('√')) {
            equation = equation.replace('√', '')
            display.value = squareroot(equation)
            return
        }
        if (equation.includes('log10(')) {
            equation = equation.replace('log10(', '')
            equation = equation.replace(')', '')
            display.value = commonLogrithm(equation)
            return
        }
        if (equation.includes('log(')) {
            equation = equation.replace('log(', '')
            equation = equation.replace(')', '')
            display.value = naturalLgrithm(equation)
            return
        }
        if (equation.includes('atan(')) {
            equation = equation.replace('atan(', '')
            display.value = arctan(equation)
            return
        }
        if (equation.includes('acos(')) {
            equation = equation.replace('acos(', '')
            display.value = arctan(equation)
            return
        }
        if (equation.includes('asin(')) {
            equation = equation.replace('asin(', '')
            display.value = arctan(equation)
            return
        }

        if (equation.includes('%')) {
            equation = equation.replace('%', '')
            display.value = equation / 100
            return
        }

        const result = new Function(`return ${equation}`)();
        if (result === undefined || result === NaN) {
            display.value = 'Bad Expression'
            return;
        }
        display.value = result

    } catch (err) {
        display.value = 'Bad Expression'
        console.log(err)
    }
}

function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}



