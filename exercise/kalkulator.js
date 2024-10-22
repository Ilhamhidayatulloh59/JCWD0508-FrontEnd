const display = document.getElementById('display')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.textContent
    })
})

clear.addEventListener('click', () => {
    display.value = ''
})

equal.addEventListener('click', () => {
    if (display.value) {
        display.value = eval(display.value)
    }
})

document.addEventListener('keydown', (e) => {
    const value = '1234567890+-/*.'.split('')
    const key = e.key
    if (value.includes(key)) {
        display.value += key
    }
    if (key == 'Enter' && display.value) {
        display.value = eval(display.value)
    }
    if (key == 'Backspace') {
        display.value = ''
    }
})
