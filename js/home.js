// new word form
newWordForm.addEventListener("submit", e => {
  e.preventDefault();
  const enWord = enInp.value;
  const uzWord = uzInp.value;
  if (enWord && uzWord) {
    const newWord = {
      id: Math.ceil(Math.random() * 10000),
      enWord,
      uzWord,
      isNew: true,
    };
    words.push(newWord);
    renderWords();
    enInp.value = "";
    uzInp.valu = "";
    document.getElementById("my_modal_1").close();
    calculateBadges();
  }
});

let intId = null;
enInp.addEventListener("input", e => {
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="loading loading-dots loading-lg"></span>`;
  let timer = 0;
  if (!intId) {
    intId = setInterval(async () => {
      timer++;
      if (timer == 5) {
        const tarjimasi = await getTranslation(enInp.value);
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit";
        uzInp.value = tarjimasi.result;
        clearInterval(intId);
        intId = null;
      }
    }, 100);
  }
});
