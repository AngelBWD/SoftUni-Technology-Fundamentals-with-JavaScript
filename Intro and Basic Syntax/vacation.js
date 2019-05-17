function vacation(count, type, dayOfWeek) {
    let studentFriday = 8.45;
    let studentSaturday = 9.80;
    let studentSunday = 10.46;
    let businessFriday = 10.90;
    let businessSaturday = 15.60;
    let businessSunday = 16.00;
    let regularFriday = 15.00;
    let regularSaturday = 20.00;
    let regularSunday = 22.50;
    let price = 0;

    if (type === 'Students') {
        if (dayOfWeek === 'Sunday') {
            price = count * studentSunday;
            if (count >= 30) {
                console.log(`Total price: ${(price*0.85).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        } else if (dayOfWeek === 'Saturday') {
            price = count * studentSaturday;
            if (count >= 30) {
                console.log(`Total price: ${(price*0.85).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        } else if (dayOfWeek === 'Friday') {
            price = count * studentFriday;
            if (count >= 30) {
                console.log(`Total price: ${(price*0.85).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
    } else if (type === 'Business') {
        if (dayOfWeek === 'Sunday') {
            price = count * businessSunday;
            if (count >= 100) {
                console.log(`Total price: ${(price-(10*businessSunday)).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        } else if (dayOfWeek === 'Saturday') {
            price = count * businessSaturday;
            if (count >= 100) {
                console.log(`Total price: ${(price-(10*businessSaturday)).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        } else if (dayOfWeek === 'Friday') {
            price = count * businessFriday;
            if (count >= 100) {
                console.log(`Total price: ${(price-(10*businessFriday)).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
    } else if (type === 'Regular') {
        if (dayOfWeek === 'Sunday') {
            price = count * regularSunday;
            if (count >= 10 && count <= 20) {
                console.log(`Total price: ${(price*0.95).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        } else if (dayOfWeek === 'Saturday') {
            price = count * regularSaturday;
            if (count >= 10 && count <= 20) {
                console.log(`Total price: ${(price*0.95).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        } else if (dayOfWeek === 'Friday') {
            price = count * regularFriday;
            if (count >= 10 && count <= 20) {
                console.log(`Total price: ${(price*0.95).toFixed(2)}`);
            } else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
        }
    }
}
vacation(40, "Regular", "Saturday");