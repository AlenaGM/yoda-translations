
document.querySelector('#text').addEventListener('change', function(){
    let text = document.querySelector("#text").value.split(' ').join('%20');
    console.log(text);

    fetch("https://api.funtranslations.com/translate/yoda.json?text="+text)
    .then(response => response.json())
    .then(translation => {
        document.querySelector("#translateYoda").value = translation.contents.translated;
        console.log(translation.contents.translated);
    })
    .catch(error => console.log(error));
});


/*
document.querySelector('#translate').addEventListener('click', function(){
    translateYoda(text);
    //translateMinion(text);
});



function translateYoda(text){
    fetch("https://api.funtranslations.com/translate/yoda.json?text="+text)
    .then(response => response.json())
    .then(translation => {

        console.log(translation.contents.translated);
    })
    .catch(error => console.log(error));
};
document.querySelector('#reset').addEventListener('click', function(){
    location.reload();
});
/*
function translateMinion(){
    fetch("https://api.funtranslations.com/translate/minion.json?text="+text)
    .then(response => response.json())
    .then(translation => {
        document.querySelector("#translateMinion").value = translation.contents.translated;
        console.log(translation.contents.translated);
    })
    .catch(error => console.log(error));
};*/