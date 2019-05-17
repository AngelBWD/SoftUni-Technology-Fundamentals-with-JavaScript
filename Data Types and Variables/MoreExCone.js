function cone(r, h) {
    
    let l = Math.sqrt((r ** 2) + (h ** 2));
    let volume = ((Math.PI * (r ** 2) * h) / 3).toFixed(4);
    let area = (l * Math.PI * r + (Math.PI * (r ** 2))).toFixed(4);
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}
cone(3, 5);