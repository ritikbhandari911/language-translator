const translateBtn = document.getElementById("translateBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");
const copyBtn = document.getElementById("copyBtn");
const swapBtn = document.getElementById("swapBtn");
const status = document.getElementById("status");

// Translate Function
translateBtn.addEventListener("click", async () => {
  const text = inputText.value.trim();

  if (!text) {
    alert("Please enter text!");
    return;
  }

  status.innerText = "Translating... ⏳";

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang.value}|${targetLang.value}`
    );

    const data = await response.json();

    outputText.innerText = data.responseData.translatedText;
    status.innerText = "Done ✅";

  } catch (error) {
    console.error(error);
    status.innerText = "Error translating text ❌";
  }
});

// Copy Button
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputText.innerText);
  alert("Copied to clipboard!");
});

// Swap Languages
swapBtn.addEventListener("click", () => {
  let temp = sourceLang.value;
  sourceLang.value = targetLang.value;
  targetLang.value = temp;
});