
document.querySelector('#text').addEventListener('change', function(){
    let text = document.querySelector("#text").value.split(' ').join('%20');
    console.log(text);

    fetch("https://api.funtranslations.com/translate/yoda.json?text="+text)
    .then(response => response.json())
    .then(translation => {
        document.querySelector("#translatedYoda").innerHTML = translation.contents.translated;
        console.log(translation.contents.translated);
    })
    .catch(error => console.log(error));

    fetch("https://api.funtranslations.com/translate/minion.json?text="+text)
    .then(response => response.json())
    .then(translation => {
        document.querySelector("#translatedMinion").innerHTML = translation.contents.translated;
        console.log(translation.contents.translated);
    })
    .catch(error => console.log(error));
});

document.querySelector('#reset').addEventListener('click', function(){
    location.reload();
});

