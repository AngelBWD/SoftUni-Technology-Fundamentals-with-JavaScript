function round(arg, arg2) {

    if (arg2 > 15) {
        arg2 = 15;
    }
    console.log(+(arg.toFixed(arg2)));
}
round(10.5, 3);