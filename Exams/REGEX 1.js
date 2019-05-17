function solve(words, text) {
    words.split(', ').forEach(a => { //ВСЧКА ЕДНА ОТ ДУМИТЕ Е ПРОВЕРЯВА В ТЕКСТА. 
        text = text.replace('*'.repeat(a.length), a); //АКО ОТКРИЕ  *-КИ,КАТО БРОЙКАТА ИМ Е КОЛКОТО ДЪЛЖИНАТА НА ДУМАТА,ГИ ЗАМЕНЯ С НЕЯ
    });;


    console.log(text);
}
solve('great', 'softuni is ***** place for learning new programming languages');