function hashTag(text) {
    text.split(' ').forEach(word => {
        let pattern = /#[A-Za-z]+/g; //ТЪРСИ ДУМИ КОИТО ЗАПОЧВАТ С # В ЦЕЛИЯ СТРИНГ

        if (pattern.test(word)) { //ТЕСТВА ВСЯКА ДУМА ПО ЗАДАДЕНИЯ РЕГЕКС
            console.log(word.substring(1));//ИЗРЯЗВА ОТ 1 ЕЛЕМЕНТ (В СЛУЧАЯ #)
        }
    });
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');