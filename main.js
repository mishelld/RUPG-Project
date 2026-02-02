import Renderer from "./ui.js";
import Generator from "./model.js";
const generator = new Generator();
const renderer = new Renderer();

const genBtn = document.querySelector("#gen-btn");
const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
let usersData, quote, pokemon, text;
async function GenerateData() {
  try {
    [usersData, quote, pokemon, text] = await Promise.all([
      generator.getMainAndFriends(),
      generator.generateKanyeQuote(),
      generator.generatePokemon(),
      generator.generateText(),
    ]);

    renderer.render(usersData, quote, pokemon, text);
  } catch (error) {
    renderer.renderError(error);
  }
}

genBtn.addEventListener("click", () => {
  GenerateData();
});

saveBtn.addEventListener("click", () => {
  renderer.saveUserPage(usersData, quote, pokemon, text);
});

loadBtn.addEventListener("click", () => {
  renderer.showMenu();
});
GenerateData();
