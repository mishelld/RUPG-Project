import Renderer from "./ui.js";
import Generator from "./model.js";
const generator = new Generator();
const renderer = new Renderer();

const genBtn = document.querySelector("#gen-btn");
const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
let usersData, quote, pokemon, text;
async function generateData() {
  try {
    [usersData, quote, pokemon, text] = await Promise.all([
      generator.getMainAndFriends(),
      generator.generateKanyeQuote(),
      generator.generatePokemon(),
      generator.generateText(),
    ]);

    renderer.render(usersData, quote, pokemon, text);
  } catch (error) {
    renderer.renderError(error.message || "Something went wrong");
  }
}
function validatePageData({ usersData, quote, pokemon, text }) {
  if (!usersData) throw new Error("User data is missing.");
  if (quote === null) throw new Error("Quote is missing.");
  if (!pokemon) throw new Error("Pokemon is missing.");
  if (text === null) throw new Error("About text is missing.");
}

genBtn.addEventListener("click", () => {
  generateData();
});

saveBtn.addEventListener("click", () => {
  try {
    validatePageData({ usersData, quote, pokemon, text });
    renderer.saveUserPage(usersData, quote, pokemon, text);
  } catch (error) {
    renderer.renderError(error.message || "Something went wrong");
  }
});

loadBtn.addEventListener("click", () => {
  renderer.showMenu();
});

document.addEventListener("DOMContentLoaded", () => {
  generateData();
});
