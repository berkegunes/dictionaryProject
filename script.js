const wordInput = document.getElementById("word");
const button = document.querySelector("button");
const translatedDiv = document.getElementById("translatedDiv");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio");

async function fetchApi() {
  translatedDiv.style.display = "none";
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`;

  try {
    const result = await fetch(url).then((res) => res.json());
    console.log(result);

    if (result.title) {
      // API'den hata mesajı geldiğinde yapılacak işlemler
      title.textContent = "Word not found";
      meaning.textContent = "";
      audio.src = "";
    } else {
      translatedDiv.style.display = "block";
      title.textContent = result[0].word;
      meaning.textContent = result[0].meanings[0].definitions[0].definition;
      audio.src = result[0].phonetics[0]?.audio || "";
    }
  } catch (error) {
    console.error("Error fetching the API:", error);
    title.textContent = "Error fetching the API";
    meaning.textContent = "";
    audio.src = "";
  }
}

button.addEventListener("click", fetchApi);
