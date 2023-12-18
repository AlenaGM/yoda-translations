document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
  });
});

document.querySelector("#submit").addEventListener("click", function () {
  let text = document
    .querySelector("#sourceText")
    .value.trim()
    .split(" ")
    .join("%20")
    .toLowerCase();

  const translateYoda = async () => {
    try {
      const response = await fetch(
        "https://api.funtranslations.com/translate/yoda.json?text=" + text
      );

      if (!response.ok)
        throw new Error(
          `Wrong, something went. Again in 60 minutes, try, please`
        );

      const translation = await response.json();

      if (
        document.querySelector("#sourceText").value ==
        translation.contents.translated
      )
        throw new Error(`Please, type in Galactic Basic Standard`);

      document.querySelector("#textTarget").innerHTML =
        translation.contents.translated;
    } catch (error) {
      alert(error);
    }
  };

  translateYoda();
});

document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("#sourceText").value = "";
  document.querySelector("#textTarget").innerHTML = "";
});
