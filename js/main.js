let words = localStorage.getItem("words")
  ? JSON.parse(localStorage.getItem("words"))
  : [];
renderWords();

function renderWords() {
  let newHTML = "";
  let oldHTML = "";
  words.forEach((word, i) => {
    if (word.isNew) {
      newHTML += `<tr>
          <th>${i + 1}</th>
          <td class='flex items-center gap-2'><svg onclick="readText('${
            word.enWord
          }')"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8.88889 16H5C4.44772 16 4 15.5523 4 15V9.00001C4 8.44772 4.44772 8.00001 5 8.00001H8.88889L14.1834 3.66815C14.3971 3.49329 14.7121 3.52479 14.887 3.73851C14.9601 3.82784 15 3.93971 15 4.05513V19.9449C15 20.221 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16ZM18.8631 16.5911L17.4411 15.169C18.3892 14.4376 19 13.2901 19 12C19 10.5697 18.2493 9.31469 17.1203 8.6076L18.5589 7.169C20.0396 8.2616 21 10.0187 21 12C21 13.8422 20.1698 15.4904 18.8631 16.5911Z" fill="rgba(36,191,255,1)"></path></svg> ${
        word.enWord
      }</td>
          <td>${word.uzWord}</td>
          <td class='space-x-2'>
          <button onclick='doneWord(${word.id})'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z" fill="rgba(41,149,2,1)"></path></svg></button>
          <button onclick='deleteWord(${word.id})'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z" fill="rgba(242,85,85,1)"></path></svg>
          </button>
        
          </td>
        </tr>`;
    } else {
      oldHTML += `<tr>
      <th>${i + 1}</th>
      <td class='flex items-center gap-2'><svg onclick="readText('${
        word.enWord
      }')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8.88889 16H5C4.44772 16 4 15.5523 4 15V9.00001C4 8.44772 4.44772 8.00001 5 8.00001H8.88889L14.1834 3.66815C14.3971 3.49329 14.7121 3.52479 14.887 3.73851C14.9601 3.82784 15 3.93971 15 4.05513V19.9449C15 20.221 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16ZM18.8631 16.5911L17.4411 15.169C18.3892 14.4376 19 13.2901 19 12C19 10.5697 18.2493 9.31469 17.1203 8.6076L18.5589 7.169C20.0396 8.2616 21 10.0187 21 12C21 13.8422 20.1698 15.4904 18.8631 16.5911Z" fill="rgba(36,191,255,1)"></path></svg> ${
        word.enWord
      }</td>
      <td>${word.uzWord}</td>
      <td class='space-x-2'>
      <button onclick='doneWord(${word.id})'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11 20L1 12L11 4V9C16.5228 9 21 13.4772 21 19C21 19.2729 20.9891 19.5433 20.9676 19.8107C19.4605 16.9502 16.458 15 13 15H11V20Z" fill="rgba(23,113,229,1)"></path></svg>
      <button onclick='deleteWord(${word.id})'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z" fill="rgba(242,85,85,1)"></path></svg>
      </button>
    
      </td>
    </tr>`;
    }
  });
  if (newWordsTBody) {
    newWordsTBody.innerHTML = newHTML;
  }
  if (oldWordsTBody) {
    oldWordsTBody.innerHTML = oldHTML;
  }
  calculateBadges();
  localStorage.setItem("words", JSON.stringify(words));
}

function doneWord(id) {
  const word = words.find(word => word.id === id);
  word.isNew = !word.isNew;
  renderWords();
}

function deleteWord(id) {
  words = words.filter(word => word.id !== id);
  renderWords();
}

function calculateBadges() {
  const newCount = words.filter(word => word.isNew).length;
  const oldCount = words.filter(word => !word.isNew).length;

  document.getElementById("new-badge").textContent = newCount;
  document.getElementById("old-badge").textContent = oldCount;
  document.getElementById("mobile-old-badge").textContent = oldCount;
  document.getElementById("mobile-new-badge").textContent = newCount;
}

function readText(text) {
  if ("speechSynthesis" in window) {
    var synthesis = window.speechSynthesis;

    // Get the first `en` language voice in the list
    var voice = synthesis.getVoices().filter(function (voice) {
      return voice.lang === "en";
    })[0];

    // Create an utterance object
    var utterance = new SpeechSynthesisUtterance(text);

    // Set utterance properties
    utterance.voice = voice;
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    // Speak the utterance
    synthesis.speak(utterance);
  } else {
    console.log("Text-to-speech not supported.");
  }
}
