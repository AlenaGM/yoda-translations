/*/ СТАРЫЙ КОД 20-Й НЕДЕЛИ
document.querySelector('#text').addEventListener('change', function(){
    let text = document.querySelector("#text").value.split(' ').join('%20');
    console.log(text);

    fetch("https://api.funtranslations.com/translate/yoda.json?text="+text)
    .then(response => response.json())
    .then(translation => {
        document.querySelector("#translatedYoda").innerHTML = translation.contents.translated;
        console.log(translation.contents.translated);
    })
    .catch(error => {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    });

/*
    fetch("https://api.funtranslations.com/translate/minion.json?text="+text)
    .then(response => response.json())
    .then(translation => {
        document.querySelector("#translatedMinion").innerHTML = translation.contents.translated;
        console.log(translation.contents.translated);
        throw error;
    })
    .catch(error => {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    });

});*/


//ЛОВИМ ОШИБКИ
//ПРОБЛЕМА: превышен максимум запросов на этот час (можно 5)
//ПРОБЛЕМА: язык запроса не английский (внешне все работает, по значение поля ввода и полей переводов идентичны)

document.querySelector('#text').addEventListener('change', function(){

    let text = document.querySelector("#text").value.split(' ').join('%20');
    console.log(text);

    const translateYoda = async () => {

        try {
            const response = await fetch("https://api.funtranslations.com/translate/yoda.json?text="+text);

            if (!response.ok)
                throw new Error(`Can't translate into Yoda: too  many requests! Only 5 translations allowed per hour. Please, try later`);

        const translation = await response.json();

            if (document.querySelector("#text").value == translation.contents.translated)
                throw new Error(`Please, type in English.`);

        document.querySelector("#translatedYoda").innerHTML = translation.contents.translated;
        console.log(translation.contents.translated);

        } catch (error) {
            alert(error + `!`);
        }

    }

    const translateMinion = async () => {

        try {
            const response = await fetch("https://api.funtranslations.com/translate/minion.json?text="+text);

            if (!response.ok)
                throw new Error(`Can't translate into Minion: too many requests! Only 5 translations allowed per hour. Please, try later`);

        const translation = await response.json();

            if (document.querySelector("#text").value == translation.contents.translated)
                throw new Error(`Non-English phrases are not translated`);

        document.querySelector("#translatedMinion").innerHTML = translation.contents.translated;
        console.log(translation.contents.translated);

        } catch (error) {
            alert(error + `!`);
        }

    }

    translateYoda();
    translateMinion();

});


document.querySelector('#reset').addEventListener('click', function(){
    location.reload();
});



