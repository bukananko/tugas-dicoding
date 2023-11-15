import ProgrammingLanguageContent from "./ProgrammingLanguageContent.js";
import AiContent from "./AiContent.js";

const container = document.getElementById("content");
const aiBtn = document.getElementById("content-ai-btn");
const programmingLanguageBtn = document.getElementById("content-bahasa-btn");

window.onload = () => {
  container.innerHTML = ProgrammingLanguageContent();
  programmingLanguageBtn.classList.add("active");
  aiBtn.classList.remove("active");
};

programmingLanguageBtn.onclick = () => {
  programmingLanguageBtn.classList.add("active");
  aiBtn.classList.remove("active");
  container.innerHTML = ProgrammingLanguageContent();
};

aiBtn.onclick = () => {
  aiBtn.classList.add("active");
  programmingLanguageBtn.classList.remove("active");
  container.innerHTML = AiContent();
};
  