function printer(type, age) {
    if (type === 'Weekday') {
        if (age >= 0 && age <= 18) {
            console.log('12$')
        } else if (age > 18 && age <= 64) {
            console.log('18$')
        } else if (age > 64 && age <= 122) {
            console.log('12$')
        } else {
            console.log('Error!')
        }
    } else if (type === 'Weekend') {
        if (age >= 0 && age <= 18) {
            console.log('15$')
        } else if (age > 18 && age <= 64) {
            console.log('20$')
        } else if (age > 64 && age <= 122) {
            console.log('15$')
        } else {
            console.log('Error!')
        }
    } else if (type === 'Holiday') {
        if (age >= 0 && age <= 18) {
            console.log('5$')
        } else if (age > 18 && age <= 64) {
            console.log('12$')
        } else if (age > 64 && age <= 122) {
            console.log('10$')
        } else {
            console.log('Error!')
        }
    }

}
printer('Weekday', 42);