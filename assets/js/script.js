document.querySelector("#text").addEventListener("change", function () {
  let text = document.querySelector("#text").value.split(" ").join("%20");
  console.log(text);

  const translateYoda = async () => {
    try {
      const response = await fetch(
        "https://api.funtranslations.com/translate/yoda.json?text=" + text
      );

      if (!response.ok)
        throw new Error(
          `Can't translate into Yoda: too  many requests! Only 5 translations allowed per hour. Please, try later`
        );

      const translation = await response.json();

      if (
        document.querySelector("#text").value == translation.contents.translated
      )
        throw new Error(`Please, type in English.`);

      document.querySelector("#translatedYoda").innerHTML =
        translation.contents.translated;
      console.log(translation.contents.translated);
    } catch (error) {
      alert(error + `!`);
    }
  };

  const translateMinion = async () => {
    try {
      const response = await fetch(
        "https://api.funtranslations.com/translate/minion.json?text=" + text
      );

      if (!response.ok)
        throw new Error(
          `Can't translate into Minion: too many requests! Only 5 translations allowed per hour. Please, try later`
        );

      const translation = await response.json();

      if (
        document.querySelector("#text").value == translation.contents.translated
      )
        throw new Error(`Non-English phrases are not translated`);

      document.querySelector("#translatedMinion").innerHTML =
        translation.contents.translated;
      console.log(translation.contents.translated);
    } catch (error) {
      alert(error + `!`);
    }
  };

  translateYoda();
  translateMinion();
});

document.querySelector("#reset").addEventListener("click", function () {
  location.reload();
});
