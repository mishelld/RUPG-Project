import Renderer from "./ui.js";
import Generator from "./model.js";
const generator = new Generator();
const renderer = new Renderer();

const button = document.querySelector("button");

async function GenerateData() {
  try {
    const [usersData, quote, pokemon, text] = await Promise.all([
      generator.getMainAndFriends(),
      generator.generateKanyeQuote(),
      generator.generatePokemon(),
      generator.generateText(),
    ]);

    renderer.render(usersData, quote, pokemon, text);
  } catch (error) {
    renderer.renderError();
  }
}

button.addEventListener("click", () => {
  GenerateData();
});

GenerateData();
