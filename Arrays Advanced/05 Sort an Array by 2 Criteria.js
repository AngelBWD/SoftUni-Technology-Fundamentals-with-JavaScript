function sort(arr) {
    arr.sort((a, b) => { return a.length - b.length || a.localeCompare(b);}).forEach(element =>  console.log(element))
    }
    sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);